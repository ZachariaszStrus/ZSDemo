import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root-reducer';
import ListItem from './ListItem/ListItem';
import styled from 'styled-components/native';
import Separator from '../shared/Separator';
import Header from '../shared/Header';
import CustomStatusBar from '../shared/CustomStatusBar';
import { fetchMoreEvents, refreshEvents } from '../../store/events/thunks';
import Typography from '../shared/Typography';

const MainScreen: FunctionComponent = () => {
  const { items, loading, error, page } = useSelector(
    (state: RootState) => state.events
  );

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState<string | null>(null);

  const onItemPress = useCallback(
    (id: string) => {
      setExpanded(expanded === id ? null : id);
    },
    [expanded]
  );

  useEffect(() => {
    dispatch(refreshEvents());
  }, [dispatch]);

  useEffect(() => {
    console.log(items, loading, error, page);
  }, [error, items, loading, page]);

  return (
    <>
      <CustomStatusBar />
      <Container>
        <Header />
        {error != null && (
          <ErrorContainer>
            <Typography>{'Ops, something went wrong :()'}</Typography>
          </ErrorContainer>
        )}
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onItemPress(item.id)}>
              <ListItem expanded={expanded === item.id} event={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          refreshing={loading}
          onRefresh={() => dispatch(refreshEvents())}
          ItemSeparatorComponent={Separator}
          onEndReached={() => dispatch(fetchMoreEvents())}
        />
      </Container>
    </>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ErrorContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export default MainScreen;
