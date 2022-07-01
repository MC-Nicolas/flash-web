import React, { useState } from 'react';
import { useAppSelector } from '../../redux/redux.hooks';
import { theme } from '../../theme/theme';

import { DarkPlainButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicInput } from '../Inputs/Inputs.component';

import { createNewFolderToDatabase } from '../../database/foldersData';

const NewFolder = () => {
  const { email } = useAppSelector((state) => state.user);
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = () => {
    createNewFolderToDatabase(email, folderName);
  };

  return (
    <FlexContainer>
      <FlexContainer
        flexDirection='column'
        height='40%'
        justifyContent='space-evenly'
      >
        <NeumorphicInput
          label="Folder's name"
          placeholder='Folder name'
          value={folderName}
          onChange={(e: { target: { value: string } }) =>
            setFolderName(e.target.value)
          }
        />
        <DarkPlainButton
          theme={theme}
          title='Create'
          onClick={handleCreateFolder}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default NewFolder;
