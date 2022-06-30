import React from 'react';
import { Routes, Route } from 'react-router-dom';

import store from './redux/store';

import FlexContainer from './components/FlexContainer/FlexContainer.component';
import Dashboard from './pages/Dashboard/Dashboard.page';
import Login from './pages/Login/Login.page';
import { Provider } from 'react-redux';
import Create from './pages/Create/Create.page';

const App = () => {
  return (
    <Provider store={store}>
      <FlexContainer height='100vh'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create/:type' element={<Create />} />
        </Routes>
      </FlexContainer>
    </Provider>
  );
};

export default App;
