import React, { useEffect } from 'react';
import CirclePercentage from '../../components/CirclePercentage/CirclePercentage.component';

import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import ProgressBar from '../../components/ProgressBar/ProgressBar.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import StarsContainer from '../../components/StarsContainer/StarsContainer.component';
import { extractImportantFolders } from '../../database/foldersData';
import { setImportantFolders } from '../../redux/foldersFlashcards/foldersFlashcards';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { RootState } from '../../redux/store';
import { SubFolderType } from '../../Types/Flashcards';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { folders, importantFolders } = useAppSelector(
    (state: RootState) => state.folders
  );

  useEffect(() => {
    dispatch(setImportantFolders(extractImportantFolders(folders)));
  }, [folders]);

  return (
    <FlexContainer justifyContent='space-between'>
      <Sidebar />
      <FlexContainer flexDirection='column' justifyContent='space-evenly'>
        <FlexContainer height='100px' width='100%' justifyContent='center'>
          <h1 style={{ color: 'white', letterSpacing: '2px' }}>Daily Goals</h1>
        </FlexContainer>

        <FlexContainer flexDirection='column' justifyContent='space-evenly'>
          <DarkContainer height='30%' minHeight='200px'>
            <FlexContainer
              style={{ backgroundColor: 'rgba(0,0,0,0)', margin: '10px 0' }}
              justifyContent='space-evenly'
            >
              {/* <StarsContainer /> */}
              <CirclePercentage />
            </FlexContainer>
          </DarkContainer>
          <DarkContainer height='60%' minHeight='400px'>
            {importantFolders.length > 0 &&
              importantFolders?.map((folder: SubFolderType) => (
                <ProgressBar
                  key={folder.title}
                  width={`${folder.successPercentage}%`}
                  title={`${folder.title}`}
                />
              ))}
          </DarkContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Dashboard;
