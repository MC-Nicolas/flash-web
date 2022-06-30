import React from 'react';
import { theme } from '../../theme/theme';

import { DarkPlainButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicInput } from '../Inputs/Inputs.component';

const NewFolder = () => {
  const [folderName, setFolderName] = React.useState('');
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
        <DarkPlainButton theme={theme} title='Create' />
      </FlexContainer>
    </FlexContainer>
  );
};

export default NewFolder;
