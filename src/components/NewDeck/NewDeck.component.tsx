import React, { useState } from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';

import { useAppSelector } from '../../redux/redux.hooks';
import { DarkPlainButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicInput, NeumorphicSelect } from '../Inputs/Inputs.component';

import { theme } from '../../theme/theme';
import { extractFolders } from '../../database/foldersData';
import { createNewSubFolder } from '../../database/foldersData';
type Props = {};

const NewDeck = (props: Props) => {
  const { email } = useAppSelector((state) => state.user);
  const { folders } = useAppSelector((state) => state.folders);
  const [folderToAddTo, setfolderToAddTo] = useState('');
  const [deckName, setDeckName] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleOnNewSubFolder = async () => {
    await createNewSubFolder(email, folderToAddTo, isImportant, deckName);
  };

  return (
    <FlexContainer>
      <FlexContainer
        flexDirection='column'
        height='40%'
        justifyContent='space-evenly'
      >
        <NeumorphicSelect
          label='Folder to add deck'
          onChange={(e: { target: { value: string } }) =>
            setfolderToAddTo(e.target.value)
          }
          value={folderToAddTo}
          options={extractFolders(folders)}
        />
        <NeumorphicInput
          label="Deck's name"
          placeholder="Deck's name"
          value={deckName}
          onChange={(e: { target: { value: string } }) =>
            setDeckName(e.target.value)
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              color='success'
              value={isImportant}
              onChange={(e: { target: { checked: boolean } }) =>
                setIsImportant(e.target.checked)
              }
            />
          }
          label='Want to make this Deck part of your daily goals ? '
        />
        <DarkPlainButton
          theme={theme}
          title='Create'
          onClick={handleOnNewSubFolder}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default NewDeck;
