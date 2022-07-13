import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';

import { getFoldersFromDB } from '../../database/foldersData';
import { setFolders } from '../../redux/foldersFlashcards/foldersFlashcards';

import MyCards from '../../pages/MyCards/MyCards.component';
import Create from '../../pages/Create/Create.page';
import Dashboard from '../../pages/Dashboard/Dashboard.page';
import Login from '../../pages/Login/Login.page';
import Study from '../../pages/Study/Study.component';

const RoutesHandler = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email, isUserAuthenticated } = useAppSelector((state) => state.user);

  const getFolders = async () => {
    if (email && isUserAuthenticated) {
      const folders = await getFoldersFromDB(email);
      dispatch(setFolders(folders));
    }
  };

  useEffect(() => {
    getFolders();
  }, [email, isUserAuthenticated]);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/my-cards' element={<MyCards />} />
      <Route path='/create/:type' element={<Create />} />
      <Route path='/study' element={<Study />} />
    </Routes>
  );
};

export default RoutesHandler;
