import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme.js';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
