import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import Typography from './Typography';
import themedColor from '../../styles/theme/themedColor';

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Typography fontSize={'TITLE_LARGE'} color={'WHITE'}>
        {'Events'}
      </Typography>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  background-color: ${themedColor('PRIMARY')};
  height: 60px;
  padding-left: 15px;
`;

export default React.memo(Header);
