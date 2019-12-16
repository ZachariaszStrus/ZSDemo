import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import mainTheme from './styles/theme/main.theme';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <AppNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
