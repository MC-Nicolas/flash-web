import React, { useState } from 'react';

import { NeumorphicButton } from '../Buttons/Buttons.component';
import Flashcard from '../Flashcard/Flashcard.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';

import DoneAllIcon from '@mui/icons-material/DoneAll';
import SmartCard from './SmartCard.component';
import QCMFlashcard from './QCMFlashcard.component';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { setFlashcardBack, setFlashcardFront } from '../../redux/create/create';

type WhatNewCardProps = {
  typeOfCard: string;
  onClick: () => void;
};

const WhatNewCard = ({ typeOfCard, onClick }: WhatNewCardProps) => {
  const dispatch = useAppDispatch();
  const {
    flashcard: { front, back },
  } = useAppSelector((state) => state.create);

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
        {typeOfCard === 'classic' && (
          <>
            <Flashcard
              text={front}
              onChange={(e: { target: { value: string } }) =>
                dispatch(setFlashcardFront(e.target.value))
              }
            />
            <Flashcard
              style={{
                background:
                  'radial-gradient(rgba(255, 255, 255, 0.546) 0%, rgba(35, 38, 41, 0.5) 100%)',
              }}
              text={back}
              onChange={(e: { target: { value: string } }) =>
                dispatch(
                  setFlashcardBack({
                    typeOfFlashcard: 'classic',
                    value: e.target.value,
                  })
                )
              }
            />
          </>
        )}
        {typeOfCard.toLowerCase() === 'smartcard' && <SmartCard />}
        {typeOfCard.toLowerCase() === 'qcm' && <QCMFlashcard />}
      </FlexContainer>
      <NeumorphicButton icon={<DoneAllIcon />} onClick={onClick} />
    </FlexContainer>
  );
};

export default WhatNewCard;
