import React from 'react';
import { useParams } from 'react-router-dom';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import NewDeck from '../../components/NewDeck/NewDeck.component';
import NewFlashcard from '../../components/NewFlashcard/NewFlashcard.component';
import NewFolder from '../../components/NewFolder/NewFolder.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import { useAppSelector } from '../../redux/redux.hooks';
import { capitalizeFirstLetter } from '../../utils/functions';

const Create = () => {
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.activeFolder
  );
  const params = useParams();

  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer
        flexDirection='column'
        justifyContent='space-between'
        style={{ paddingTop: '20px' }}
      >
        <h1 style={{ color: 'white', letterSpacing: '2px' }}>
          {`${capitalizeFirstLetter(activeFolder)} > ${capitalizeFirstLetter(
            activeSubFolder
          )}`}
        </h1>
        {params.type === 'folder' ? <NewFolder /> : <></>}
        {params.type === 'deck' ? <NewDeck /> : <></>}
        {params.type === 'flashcard' ? <NewFlashcard /> : <></>}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Create;
