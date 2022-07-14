import React, { useState } from 'react';

import store from './redux/store';

import ReduxProvider from './redux/Provider';
import FlexContainer from './components/FlexContainer/FlexContainer.component';
import RoutesHandler from './components/RoutesHandler/RoutesHandler.component';
import DevSuggestions from './components/DevSuggestions/DevSuggestions.component';
import DevModal from './components/DevSuggestions/DevModal.component';

import { Toaster } from 'react-hot-toast';

const App = () => {
  const [devModalIsActive, setDevModalIsActive] = useState(false);
  return (
    <ReduxProvider store={store}>
      <Toaster />
      <DevSuggestions
        setDevModalIsActive={() => setDevModalIsActive(!devModalIsActive)}
      />
      {devModalIsActive && <DevModal />}
      <FlexContainer height='100vh'>
        <RoutesHandler />
      </FlexContainer>
    </ReduxProvider>
  );
};

export default App;
