import { DefaultTheme, css } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}

const colors = {
  black: '#141414',
  lightBlack: '#1f1f1f',
  white: '#ffffff',
  gray: '#8c8c8c',
  blue: '#1890ff',
  green: '#52c41a',
  purple: '#722ed1',
  magenta: '#eb2f96',
  red: '#f5222d',
};

const fonts = {
  main: css`
    font-family: 'Noto Sans KR', sans-serif;
  `,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
};
