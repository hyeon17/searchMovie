import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from '@/styles/theme.styles';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    height: 100vh;
    ${theme.fonts.main};
    color: ${theme.colors.black};
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }
  a {
    text-decoration: none;
    color:inherit;
  }
`;

export default GlobalStyle;
