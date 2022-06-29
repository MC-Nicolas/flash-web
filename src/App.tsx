import React from 'react';
import { Routes, Route } from 'react-router-dom';

import store from './redux/store';

import FlexContainer from './components/FlexContainer/FlexContainer.component';
import Dashboard from './pages/Dashboard/Dashboard.page';
import Login from './pages/Login/Login.page';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <FlexContainer height='100vh'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </FlexContainer>
    </Provider>
  );
};

export default App;
