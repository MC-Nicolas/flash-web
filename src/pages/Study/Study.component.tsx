import React, { useEffect, useState } from 'react';
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
  const [folder, setFolder] = useState('');
  const [subFolder, setSubFolder] = useState('');

  useEffect(() => {
    if (folders) {
      setFolder(extractFolders(folders)[0]);
    }
  }, [folders]);

  useEffect(() => {
    setSubFolder(extractSubFolders(folders, folder)[0]);
  }, [folder]);

  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer flexDirection='column' justifyContent='space-evenly'>
        <h1 style={{ color: 'white', letterSpacing: '2px' }}>{subFolder}</h1>
        {isSelectSection ? (
          <SelectFolders
            folder={folder}
            setFolder={(e: { target: { value: string } }) =>
              setFolder(e.target.value)
            }
            subFolder={subFolder}
            setSubFolder={(e: { target: { value: string } }) =>
              setSubFolder(e.target.value)
            }
            setIsSelectionSection={() => setIsSelectSection(false)}
          />
        ) : (
          <StudyFlashcards folder={folder} subFolder={subFolder} />
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Study;
