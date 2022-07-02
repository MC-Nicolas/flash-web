import React, { useState } from 'react';
import DarkContainer from '../../components/DarkContainer/DarkContainer.component';

import FlippableFlashcard from '../../components/Flashcard/FlippableFlashcard.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import useFlashcards from '../../hooks/useFlashcards.hooks';
import { useAppSelector } from '../../redux/redux.hooks';

type Props = {};

const StudyFlashcards = (props: Props) => {
  const { folders } = useAppSelector((state) => state.folders);
  const [isFlipped, setIsFlipped] = useState(false);
  const { flashcards } = useFlashcards('ppl', 'navigation');

  return (
    <DarkContainer height='80%'>
      <FlippableFlashcard
        front='Front'
        back='Back'
        isFlipped={isFlipped}
        setIsFlipped={setIsFlipped}
      />
      <FlexContainer
        height='100px'
        justifyContent='space-evenly'
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        {isFlipped ? (
          <>
            <button>Fail</button>
            <button>Succes</button>
          </>
        ) : (
          <button onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
        )}
      </FlexContainer>
    </DarkContainer>
  );
};

export default StudyFlashcards;
