import React, { useState } from 'react';

import { NeumorphicButton } from '../Buttons/Buttons.component';
import Flashcard from '../Flashcard/Flashcard.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';

import DoneAllIcon from '@mui/icons-material/DoneAll';

type WhatNewCardProps = {
  typeOfCard: string;
  onClick: () => void;
  frontCardText: string;
  setFrontCardText: any;
  backCardText: string;
  setBackCardText: any;
};

const WhatNewCard = ({
  typeOfCard,
  onClick,
  frontCardText,
  setFrontCardText,
  backCardText,
  setBackCardText,
}: WhatNewCardProps) => {
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
        <Flashcard
          text={frontCardText}
          onChange={(e: { target: { value: string } }) =>
            setFrontCardText(e.target.value)
          }
        />
        <Flashcard
          text={backCardText}
          onChange={(e: { target: { value: string } }) =>
            setBackCardText(e.target.value)
          }
        />
      </FlexContainer>
      <NeumorphicButton icon={<DoneAllIcon />} onClick={onClick} />
    </FlexContainer>
  );
};

export default WhatNewCard;
