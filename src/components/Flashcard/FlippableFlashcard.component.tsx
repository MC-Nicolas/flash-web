import React, { useState } from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import './FlippableFlashcard.component.styles.scss';

type FlippableFlashcardProps = {
  front: string;
  back: string;
  isFlipped: boolean;
  setIsFlipped: React.Dispatch<React.SetStateAction<boolean>>;
};

const FlippableFlashcard = ({
  front,
  back,
  isFlipped,
  setIsFlipped,
}: FlippableFlashcardProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)', perspective: '1000px' }}
      height='400px'
      width='500px'
    >
      <div className={`flippable-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className='flippable-front'>{front}</div>
        <div className='flippable-back'>{back}</div>
      </div>
    </FlexContainer>
  );
};

export default FlippableFlashcard;
