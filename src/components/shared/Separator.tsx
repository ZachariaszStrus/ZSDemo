import styled from 'styled-components/native';
import themedColor from '../../styles/theme/themedColor';

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${themedColor('BORDER')};
`;

export default Separator;
