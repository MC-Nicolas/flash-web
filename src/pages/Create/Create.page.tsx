import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import NewDeck from '../../components/NewDeck/NewDeck.component';
import NewFlashcard from '../../components/NewFlashcard/NewFlashcard.component';
import NewFolder from '../../components/NewFolder/NewFolder.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import { extractFolders, extractSubFolders } from '../../database/foldersData';
import {
  setActiveFolder,
  setActiveSubFolder,
  setFoldersOptions,
} from '../../redux/create/create';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { capitalizeFirstLetter } from '../../utils/functions';

const Create = () => {
  const dispatch = useAppDispatch();

  const { folders } = useAppSelector((state) => state.folders);
  const { activeFolder, activeSubFolder, foldersOptions } = useAppSelector(
    (state) => state.activeFolder
  );
  const params = useParams();

  useEffect(() => {
    if (!activeFolder) {
      dispatch(setActiveFolder(extractFolders(folders)[0]));
    }
    if (!activeSubFolder) {
      dispatch(setActiveSubFolder(extractSubFolders(folders, activeFolder)[0]));
    }
    if (foldersOptions.length < 1) {
      dispatch(setFoldersOptions(extractFolders(folders)));
    }
  }, [folders]);

  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer
        flexDirection='column'
        justifyContent='space-between'
        style={{ paddingTop: '20px' }}
      >
        <h1 style={{ color: 'white', letterSpacing: '2px' }}>
          {activeFolder && activeSubFolder
            ? `${capitalizeFirstLetter(activeFolder)} > ${capitalizeFirstLetter(
                activeSubFolder
              )}`
            : activeFolder
            ? `${capitalizeFirstLetter(activeFolder)}`
            : 'Create'}
        </h1>
        {params.type === 'folder' ? <NewFolder /> : <></>}
        {params.type === 'deck' ? <NewDeck /> : <></>}
        {params.type === 'flashcard' ? <NewFlashcard /> : <></>}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Create;
