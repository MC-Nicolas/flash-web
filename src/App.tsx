import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import FlexContainer from './components/FlexContainer/FlexContainer.component';
import RoutesHandler from './components/RoutesHandler/RoutesHandler.component';

const App = () => {
  return (
    <Provider store={store}>
      <FlexContainer height='100vh'>
        <RoutesHandler />
      </FlexContainer>
    </Provider>
  );
};

export default App;
