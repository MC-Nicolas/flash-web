import React, { useState } from 'react';
import DarkContainer from '../../components/DarkContainer/DarkContainer.component';

import FlippableFlashcard from '../../components/Flashcard/FlippableFlashcard.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import useFlashcards from '../../hooks/useFlashcards.hooks';
import { useAppSelector } from '../../redux/redux.hooks';
import { FlashcardType } from '../../Types/Flashcards';

type StudyFlashcards = {
  folder: string;
  subFolder: string;
};

const StudyFlashcards = ({ folder, subFolder }: StudyFlashcards) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [areCardsDone, setAreCardsDone] = useState(false);
  const { flashcards } = useFlashcards(folder, subFolder);
  const [activeCard, setActiveCard] = useState(1);

  const handleOnNextCard = () => {
    if (activeCard < flashcards.length) {
      setActiveCard(activeCard + 1);
      setIsFlipped(false);
    } else setAreCardsDone(true);
  };

  return (
    <DarkContainer height='80%'>
      {!areCardsDone
        ? flashcards?.map((flashcard: FlashcardType) => {
            if (activeCard === flashcard.number) {
              return (
                <FlippableFlashcard
                  front={flashcard.front}
                  back={flashcard.back}
                  isFlipped={isFlipped}
                  setIsFlipped={setIsFlipped}
                />
              );
            } else return <></>;
          })
        : 'You are done!'}

      <FlexContainer
        height='100px'
        justifyContent='space-evenly'
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        {isFlipped && !areCardsDone ? (
          <>
            <button onClick={handleOnNextCard}>Fail</button>
            <button onClick={handleOnNextCard}>Succes</button>
          </>
        ) : (
          <button onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
        )}
      </FlexContainer>
    </DarkContainer>
  );
};

export default StudyFlashcards;
