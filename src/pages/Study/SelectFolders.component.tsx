import React, { useState } from 'react';

import { NeumorphicButton } from '../../components/Buttons/Buttons.component';
import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../../components/Inputs/Inputs.component';

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { extractFolders, extractSubFolders } from '../../database/foldersData';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import {
  setActiveFolder,
  setActiveSubFolder,
} from '../../redux/foldersFlashcards/foldersFlashcards';
import useFlashcards from '../../hooks/useFlashcards.hooks';

const SelectFolders = ({
  setIsSelectionSection,
}: {
  setIsSelectionSection: any;
}) => {
  const dispatch = useAppDispatch();
  const { activeFolder, activeSubFolder, subFoldersOptions, foldersOptions } =
    useAppSelector((state) => state.folders);
  const { flashcards } = useFlashcards(activeFolder, activeSubFolder);

  return (
    <DarkContainer height='80%'>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        height='150px'
        justifyContent='space-evenly'
      >
        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          value={activeFolder}
          label='Folder'
          options={foldersOptions}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setActiveFolder(e.target.value))
          }
        />
        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          value={activeSubFolder}
          label='Sub Folder'
          options={subFoldersOptions}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setActiveSubFolder(e.target.value))
          }
        />
      </FlexContainer>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        height='60%'
        justifyContent='space-evenly'
      >
        {flashcards && flashcards.length > 0 ? (
          <NeumorphicButton
            icon={<PlayCircleFilledWhiteIcon />}
            onClick={setIsSelectionSection}
          />
        ) : (
          <h1>No flashcards</h1>
        )}
      </FlexContainer>
    </DarkContainer>
  );
};

export default SelectFolders;
