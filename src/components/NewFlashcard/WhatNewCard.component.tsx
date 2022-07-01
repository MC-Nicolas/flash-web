import React from 'react';

import { NeumorphicButton } from '../Buttons/Buttons.component';
import Flashcard from '../Flashcard/Flashcard.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';

import DoneAllIcon from '@mui/icons-material/DoneAll';

type WhatNewCardProps = {
  typeOfCard: string;
};

const WhatNewCard = ({ typeOfCard }: WhatNewCardProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      flexDirection='column'
      justifyContent='space-evenly'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        justifyContent='space-evenly'
      >
        <Flashcard text='Calculer la composante de vent traversier' />
        <Flashcard text='Wv * sin(angle au vent°)' />
      </FlexContainer>
      <NeumorphicButton icon={<DoneAllIcon />} />
    </FlexContainer>
  );
};

export default WhatNewCard;
