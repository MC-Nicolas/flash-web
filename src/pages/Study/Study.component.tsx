import React, { useState } from 'react';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import Sidebar from '../../components/Sidebar/Sidebar.component';
import { extractFolders, extractSubFolders } from '../../database/foldersData';
import { useAppSelector } from '../../redux/redux.hooks';
import SelectFolders from './SelectFolders.component';
import StudyFlashcards from './StudyFlashcards.comoponent';

type Props = {};

const Study = (props: Props) => {
  const [isSelectSection, setIsSelectSection] = useState(true);
  const { folders } = useAppSelector((state) => state.folders);
  const [folder, setFolder] = useState(folders && extractFolders(folders)[0]);
  const [subFolder, setSubFolder] = useState(
    folders && extractSubFolders(folders)[0]
  );
  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer flexDirection='column' justifyContent='space-evenly'>
        <h1 style={{ color: 'white', letterSpacing: '2px' }}>Study</h1>
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
