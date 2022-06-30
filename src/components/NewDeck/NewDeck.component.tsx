import React, { useState } from 'react';
import { theme } from '../../theme/theme';
import { DarkPlainButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicInput } from '../Inputs/Inputs.component';

type Props = {};

const NewDeck = (props: Props) => {
  const [deckName, setDeckName] = useState('');
  return (
    <FlexContainer>
      <FlexContainer
        flexDirection='column'
        height='40%'
        justifyContent='space-evenly'
      >
        <NeumorphicInput
          label="Deck's name"
          placeholder="Deck's name"
          value={deckName}
          onChange={(e: { target: { value: string } }) =>
            setDeckName(e.target.value)
          }
        />
        <DarkPlainButton theme={theme} title='Create' />
      </FlexContainer>
    </FlexContainer>
  );
};

export default NewDeck;
