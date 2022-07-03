import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';

import { Checkbox, FormControlLabel } from '@mui/material';

import { DarkPlainButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicInput, NeumorphicSelect } from '../Inputs/Inputs.component';

import { theme } from '../../theme/theme';
import { extractFolders } from '../../database/foldersData';
import { createNewSubFolder } from '../../database/foldersData';
import { setActiveFolder } from '../../redux/create/create';

type Props = {};

const NewDeck = (props: Props) => {
  let navigate = useNavigate();

  const { activeFolder, foldersOptions } = useAppSelector(
    (state) => state.activeFolder
  );
  const dispatch = useAppDispatch();

  const { email } = useAppSelector((state) => state.user);
  const { folders } = useAppSelector((state) => state.folders);

  const [deckName, setDeckName] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleOnNewSubFolder = async () => {
    await createNewSubFolder(email, activeFolder, isImportant, deckName);
    setDeckName('');
    navigate('/create/flashcard');
  };

  console.log(foldersOptions);

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
            dispatch(setActiveFolder(e.target.value))
          }
          value={activeFolder}
          options={foldersOptions}
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
