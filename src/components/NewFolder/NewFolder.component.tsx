import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { theme } from '../../theme/theme';

import { DarkPlainButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicInput } from '../Inputs/Inputs.component';

import {
  createNewFolderToDatabase,
  extractFolders,
  getFoldersFromDB,
} from '../../database/foldersData';
import { useNavigate } from 'react-router-dom';
import {
  setActiveFolder,
  setFolders,
  setFoldersOptions,
} from '../../redux/foldersFlashcards/foldersFlashcards';
import toast from 'react-hot-toast';
import { setIsLoading } from '../../redux/loader/loader';

const NewFolder = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { folders } = useAppSelector((state) => state.folders);
  const { email, isUserAuthenticated } = useAppSelector((state) => state.user);
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = async () => {
    await createNewFolderToDatabase(email, folderName);
    toast.success('Folder created successfully');
    setFolderName('');
    dispatch(setActiveFolder(folderName));
    dispatch(setFoldersOptions(extractFolders(folders)));
    navigate('/create/deck');
  };

  const getFolders = async () => {
    if (email && isUserAuthenticated) {
      dispatch(setIsLoading(true));
      const folders = await getFoldersFromDB(email);
      dispatch(setFolders(folders));
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <FlexContainer>
      <FlexContainer
        flexDirection='column'
        height='40%'
        justifyContent='space-evenly'
      >
        <NeumorphicInput
          label="Folder's name"
          placeholder='Folder name'
          value={folderName}
          onChange={(e: { target: { value: string } }) =>
            setFolderName(e.target.value)
          }
        />
        <DarkPlainButton
          theme={theme}
          title='Create'
          onClick={handleCreateFolder}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default NewFolder;
