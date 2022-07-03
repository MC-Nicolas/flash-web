import React, { useEffect, useState } from 'react';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import Sidebar from '../../components/Sidebar/Sidebar.component';
import { extractFolders, extractSubFolders } from '../../database/foldersData';
import {
  setActiveFolder,
  setActiveSubFolder,
  setFoldersOptions,
  setSubFoldersOptions,
} from '../../redux/foldersFlashcards/foldersFlashcards';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import SelectFolders from './SelectFolders.component';
import StudyFlashcards from './StudyFlashcards.comoponent';

type Props = {};

const Study = (props: Props) => {
  const dispatch = useAppDispatch();
  const {
    folders,
    activeFolder,
    activeSubFolder,
    foldersOptions,
    subFoldersOptions,
  } = useAppSelector((state) => state.folders);
  const [isSelectSection, setIsSelectSection] = useState(true);

  useEffect(() => {
    if (!activeFolder) {
      dispatch(setActiveFolder(extractFolders(folders)[0]));
    }
    if (!activeSubFolder) {
      dispatch(setActiveSubFolder(extractSubFolders(folders, activeFolder)[0]));
    }
    if (foldersOptions.length === 0) {
      dispatch(setFoldersOptions(extractFolders(folders)));
    }
    if (subFoldersOptions.length === 0) {
      dispatch(setSubFoldersOptions(extractSubFolders(folders, activeFolder)));
    }
  }, [activeFolder, activeSubFolder]);

  useEffect(() => {
    if (activeFolder) {
      dispatch(setSubFoldersOptions(extractSubFolders(folders, activeFolder)));
    }
  }, [activeFolder]);

  useEffect(() => {
    dispatch(setSubFoldersOptions(extractSubFolders(folders, activeFolder)));
  }, [activeSubFolder]);

  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer flexDirection='column' justifyContent='space-evenly'>
        <h1 style={{ color: 'white', letterSpacing: '2px' }}>
          {activeSubFolder}
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
