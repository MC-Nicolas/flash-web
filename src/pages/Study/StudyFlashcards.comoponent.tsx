import React, { useState } from 'react';

import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlippableFlashcard from '../../components/Flashcard/FlippableFlashcard.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import useFlashcards from '../../hooks/useFlashcards.hooks';

import { FlashcardType } from '../../Types/Flashcards';
import { Button } from '@mui/material';
import { updateSubFolderOnFlashcardResult } from '../../database/foldersData';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/redux.hooks';

const StudyFlashcards = () => {
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.folders
  );
  let navigate = useNavigate();

  const { email } = useAppSelector((state) => state.user);
  const [isFlipped, setIsFlipped] = useState(false);
  const [areCardsDone, setAreCardsDone] = useState(false);
  const { flashcards } = useFlashcards(activeFolder, activeSubFolder);
  const [activeCard, setActiveCard] = useState(1);
  console.log(activeFolder, activeSubFolder);

  const handleOnNextCard = async (isSuccess: boolean) => {
    if (activeCard < flashcards.length) {
      setActiveCard(activeCard + 1);
      setIsFlipped(false);
      await updateSubFolderOnFlashcardResult(
        email,
        activeFolder,
        activeSubFolder,
        isSuccess
      );
    } else {
      setAreCardsDone(true);
    }
  };

  return (
    <DarkContainer height='80%'>
      {!areCardsDone
        ? flashcards.map((flashcard: FlashcardType) => {
            if (activeCard === flashcard.number) {
              return (
                <FlippableFlashcard
                  key={flashcard.number}
                  front={flashcard.front}
                  back={flashcard.back}
                  isFlipped={isFlipped}
                  setIsFlipped={setIsFlipped}
                />
              );
            } else return null;
          })
        : 'You are done!'}

      <FlexContainer
        height='100px'
        justifyContent='space-evenly'
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        {isFlipped && !areCardsDone ? (
          <>
            <Button
              variant='contained'
              onClick={() => handleOnNextCard(false)}
              color='error'
            >
              Fail
            </Button>
            <Button
              variant='contained'
              onClick={() => handleOnNextCard(true)}
              color='success'
            >
              Succes
            </Button>
          </>
        ) : (
          <Button
            variant='contained'
            onClick={() => {
              areCardsDone ? navigate('/') : setIsFlipped(true);
            }}
          >
            {areCardsDone ? 'Back to folder' : 'Flip'}
          </Button>
        )}
      </FlexContainer>
    </DarkContainer>
  );
};

export default StudyFlashcards;
