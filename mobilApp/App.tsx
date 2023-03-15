import React from 'react';

import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/UI/navigation/Navigation';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.3.142:3001';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
