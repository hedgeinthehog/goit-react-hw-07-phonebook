import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme.js';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
