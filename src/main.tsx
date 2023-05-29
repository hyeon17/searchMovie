import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import {theme} from '@/styles/theme.styles.ts';
import GlobalStyle from '@/styles/Global.styles.ts';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </QueryClientProvider>,
);
