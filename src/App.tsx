import React from 'react';

import store from './redux/store';

import ReduxProvider from './redux/Provider';
import FlexContainer from './components/FlexContainer/FlexContainer.component';
import RoutesHandler from './components/RoutesHandler/RoutesHandler.component';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <FlexContainer height='100vh'>
        <RoutesHandler />
      </FlexContainer>
    </ReduxProvider>
  );
};

export default App;
