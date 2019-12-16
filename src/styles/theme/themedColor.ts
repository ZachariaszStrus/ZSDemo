import { DefaultTheme, ThemedColor } from 'styled-components';

enum THEMED_COLOR_TYPES {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  TRANSPARENT = 'TRANSPARENT',
  PRIMARY = 'PRIMARY',
  PRIMARY_DARK = 'PRIMARY_DARK',
  PRIMARY_LIGHT = 'PRIMARY_LIGHT',
  SECONDARY = 'SECONDARY',
  ACCENT = 'ACCENT',
  PRIMARY_TEXT = 'PRIMARY_TEXT',
  SECONDARY_TEXT = 'SECONDARY_TEXT',
  ICON = 'ICON',
  BORDER = 'BORDER',
  STATUS_BAR_DEFAULT = 'STATUS_BAR_DEFAULT'
}

const themedColor = (color: ThemedColor, opacity?: string) => (props: {
  theme: DefaultTheme;
}) => props.theme.colors[color] + (opacity != null ? opacity : '');

export { THEMED_COLOR_TYPES };
export default themedColor;
