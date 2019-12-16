import { Dimensions } from 'react-native';
import React, { FunctionComponent, useMemo } from 'react';
import { Event, EventImage } from '../../../store/events/models';
import styled from 'styled-components/native';
import Typography from '../../shared/Typography';
import Margin from '../../shared/Margin';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const MARGIN = 15;

interface OwnProps {
  expanded: boolean;
  event: Event;
}

const ListItem: FunctionComponent<OwnProps> = ({ expanded, event }) => {
  const primaryClassification = useMemo(
    () =>
      event.classifications.find((classification) => classification.primary),
    [event.classifications]
  );

  const firstImage = useMemo(
    () => (event.images.length > 0 ? event.images[0] : null),
    [event.images]
  );

  return (
    <Container expanded={expanded}>
      <LeftContainer expanded={expanded}>
        {firstImage && (
          <StyledImage
            image={firstImage}
            expanded={expanded}
            source={{ uri: firstImage.url }}
          />
        )}
      </LeftContainer>
      <RightContainer>
        <Typography fontSize={'TITLE'} color={'PRIMARY_TEXT'}>
          {event.name}
        </Typography>
        <Margin sizeTop={'5px'}>
          <Typography fontSize={'SUBTITLE'} color={'SECONDARY_TEXT'}>
            {event.type}
            {' - '}
            {primaryClassification && primaryClassification.genre
              ? primaryClassification.genre.name
              : ''}
            {' - '}
            {primaryClassification && primaryClassification.subGenre
              ? primaryClassification.subGenre.name
              : ''}
          </Typography>
        </Margin>
        <Margin sizeTop={'5px'}>
          <Typography fontSize={'SUBTITLE'} color={'SECONDARY_TEXT'}>
            {event.dates.start.localDate}
          </Typography>
        </Margin>
      </RightContainer>
    </Container>
  );
};

const Container = styled.View<{
  expanded: boolean;
}>`
  padding: ${MARGIN}px;
  flex-direction: ${(props) => (props.expanded ? 'column' : 'row')};
`;

const LeftContainer = styled.View<{
  expanded: boolean;
}>`
  margin-bottom: ${(props) => (props.expanded ? `${MARGIN}px` : 0)};
  margin-right: ${(props) => (props.expanded ? 0 : `${MARGIN}px`)};
`;

const RightContainer = styled.View`
  width: ${SCREEN_WIDTH - 50 - 3 * MARGIN}px;
`;

const StyledImage = styled.Image<{
  expanded: boolean;
  image: EventImage;
}>`
  width: ${(props) =>
    props.expanded ? `${SCREEN_WIDTH - 2 * MARGIN}px` : '50px'};
  height: ${(props) =>
    props.expanded
      ? `${((SCREEN_WIDTH - 2 * MARGIN) * props.image.height) /
          props.image.width}px`
      : '50px'};
`;

export default React.memo(ListItem);
