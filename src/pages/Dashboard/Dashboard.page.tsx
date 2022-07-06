import React, { useEffect, useState } from 'react';
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
import { FolderType, SubFolderType } from '../../Types/Flashcards';
import {
  extractTodayFromImportantFolderSuccessPercentages,
  formatPercentage,
} from '../../utils/dataFormatting';
import { calculatePercentage } from '../../utils/functions';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const [totalPercentage, setTotalPercentage] = useState(0);
  const { folders, importantFolders } = useAppSelector(
    (state: RootState) => state.folders
  );

  useEffect(() => {
    dispatch(setImportantFolders(extractImportantFolders(folders)));
  }, [folders]);

  useEffect(() => {
    const percentages = [];
    let sum = 0;
    if (importantFolders.length > 0) {
      for (const folder of importantFolders) {
        const todaysResults =
          extractTodayFromImportantFolderSuccessPercentages(folder);
        const percentage = calculatePercentage(
          todaysResults,
          folder.flashcards.length
        );
        percentages.push(percentage);
        sum += percentage;
      }
      setTotalPercentage(sum / percentages.length);
    }
  }, [importantFolders]);

  const extractTotalAnswersByNumberOfFlaschards = (folder: any) => {
    const todaysTotalAnswers =
      extractTodayFromImportantFolderSuccessPercentages(folder);
    const numberOfFlashcards = folder.flashcards.length;
    return calculatePercentage(todaysTotalAnswers, numberOfFlashcards);
  };

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
              <CirclePercentage percentage={totalPercentage} />
            </FlexContainer>
          </DarkContainer>
          <DarkContainer height='60%' minHeight='400px'>
            {importantFolders.length > 0 &&
              importantFolders?.map((folder: SubFolderType) => (
                <ProgressBar
                  key={folder.title}
                  width={`${extractTotalAnswersByNumberOfFlaschards(folder)}%`}
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
