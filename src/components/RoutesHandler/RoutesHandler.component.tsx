import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getFoldersFromDB } from '../../database/foldersData';
import Create from '../../pages/Create/Create.page';
import Dashboard from '../../pages/Dashboard/Dashboard.page';
import Login from '../../pages/Login/Login.page';
import { setFolders } from '../../redux/foldersFlashcards/foldersFlashcards';
import { useAppDispatch } from '../../redux/redux.hooks';

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
      <Route path='/create/:type' element={<Create />} />
    </Routes>
  );
};

export default RoutesHandler;
