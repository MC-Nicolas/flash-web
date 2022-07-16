import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import NewDeck from '../../components/NewDeck/NewDeck.component';
import NewFlashcard from '../../components/NewFlashcard/NewFlashcard.component';
import NewFolder from '../../components/NewFolder/NewFolder.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import { getFoldersFromDB } from '../../database/foldersData';
import { setFolders } from '../../redux/foldersFlashcards/foldersFlashcards';

import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { capitalizeFirstLetter } from '../../utils/functions';

const Create = () => {
  const dispatch = useAppDispatch();
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.folders
  );
  const { email, isUserAuthenticated } = useAppSelector((state) => state.user);
  const params = useParams();

  const getFolders = async () => {
    if (email && isUserAuthenticated) {
      const folders = await getFoldersFromDB(email);
      dispatch(setFolders(folders));
    }
  };

  useEffect(() => {
    getFolders();
  }, [params.type]);

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
