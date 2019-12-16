import 'styled-components';
import { DefaultTheme, ThemedColor } from 'styled-components';

import { THEMED_COLOR_TYPES } from './themedColor';
import { THEMED_FONT_SIZE_TYPES } from './themedFontSize';

declare module 'styled-components' {
  export type ThemedColor = keyof typeof THEMED_COLOR_TYPES;
  export type FontSize = keyof typeof THEMED_FONT_SIZE_TYPES;
  export interface DefaultTheme {
    colors: { [K in ThemedColor]: string };
    fontSizes: { [K in FontSize]: number };
  }
}
