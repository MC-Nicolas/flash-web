import React, { useEffect, useState } from 'react';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import Sidebar from '../../components/Sidebar/Sidebar.component';

import { useAppSelector } from '../../redux/redux.hooks';
import SelectFolders from './SelectFolders.component';
import StudyFlashcards from './StudyFlashcards.comoponent';

type Props = {};

const Study = (props: Props) => {
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.folders
  );
  const [isSelectSection, setIsSelectSection] = useState(true);

  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer flexDirection='column' justifyContent='space-evenly'>
        <h1 style={{ color: 'white', letterSpacing: '2px' }}>
          {activeFolder.toUpperCase()} - {activeSubFolder.toUpperCase()}
        </h1>
        {isSelectSection ? (
          <SelectFolders
            setIsSelectionSection={() => setIsSelectSection(false)}
          />
        ) : (
          <StudyFlashcards />
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Study;
