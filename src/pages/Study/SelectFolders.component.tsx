import React, { useState } from 'react';

import { NeumorphicButton } from '../../components/Buttons/Buttons.component';
import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../../components/Inputs/Inputs.component';

import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { extractFolders, extractSubFolders } from '../../database/foldersData';
import { useAppSelector } from '../../redux/redux.hooks';

const SelectFolders = ({
  setIsSelectionSection,
  folder,
  setFolder,
  subFolder,
  setSubFolder,
}: {
  setIsSelectionSection: any;
  folder: string;
  setFolder: any;
  subFolder: string;
  setSubFolder: any;
}) => {
  const { folders } = useAppSelector((state) => state.folders);

  return (
    <DarkContainer height='80%'>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        height='150px'
        justifyContent='space-evenly'
      >
        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          value={folder}
          label='Folder'
          options={folders && extractFolders(folders)}
          onChange={setFolder}
        />
        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          value={subFolder}
          label='Sub Folder'
          options={folders && extractSubFolders(folders)}
          onChange={(e: { target: { value: string } }) =>
            setSubFolder(e.target.value)
          }
        />
      </FlexContainer>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        height='60%'
        justifyContent='space-evenly'
      >
        <NeumorphicButton
          icon={<PlayCircleFilledWhiteIcon />}
          onClick={setIsSelectionSection}
        />
      </FlexContainer>
    </DarkContainer>
  );
};

export default SelectFolders;
