import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from '../../redux/redux.hooks';

import { getFoldersFromDB } from '../../database/foldersData';
import { setFolders } from '../../redux/foldersFlashcards/foldersFlashcards';

import MyCards from '../../pages/MyCards/MyCards/MyCards.component';
import Create from '../../pages/Create/Create.page';
import Dashboard from '../../pages/Dashboard/Dashboard.page';
import Login from '../../pages/Login/Login.page';

const RoutesHandler = () => {
  const dispatch = useAppDispatch();

  const getFolders = async () => {
    const folders = await getFoldersFromDB('mace_nicolas@icloud.com');
    dispatch(setFolders(folders));
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/my-cards' element={<MyCards />} />
      <Route path='/create/:type' element={<Create />} />
    </Routes>
  );
};

export default RoutesHandler;
