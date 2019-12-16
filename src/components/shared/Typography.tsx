import styled, { DefaultTheme } from 'styled-components/native';

import themedColor, {
  THEMED_COLOR_TYPES
} from '../../styles/theme/themedColor';
import themedFontSize, {
  THEMED_FONT_SIZE_TYPES
} from '../../styles/theme/themedFontSize';

interface OwnProps {
  color?: keyof DefaultTheme['colors'];
  fontSize?: keyof DefaultTheme['fontSizes'];
}

const Typography = styled.Text<OwnProps>`
  color: ${(props) =>
    themedColor(props.color || THEMED_COLOR_TYPES.PRIMARY_TEXT)};
  font-size: ${(props) =>
    themedFontSize(props.fontSize || THEMED_FONT_SIZE_TYPES.TITLE)};
  line-height: ${(props) =>
    themedFontSize(props.fontSize || THEMED_FONT_SIZE_TYPES.TITLE)};
`;

export default Typography;
