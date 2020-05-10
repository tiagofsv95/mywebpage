import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
