import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import { darkThemeColors, lightThemeColors } from './colors';
import {
  fontSize,
  fontWeight,
  borderRadius,
  space,
  lineHeight,
  breakpoint,
} from './tokens';

const global = createGlobalTheme(':root', {
  space,
  fontSize,
  fontWeight,
  lineHeight,
  borderRadius,
  breakpoint,
});

const themeColor = createThemeContract({
  ...lightThemeColors,
});

export const lightTheme = createTheme(themeColor, {
  ...lightThemeColors,
});

export const darkTheme = createTheme(themeColor, {
  ...darkThemeColors,
});

export const vars = { ...global, themeColor };
