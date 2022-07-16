import React, { useEffect, useState } from 'react';

import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlippableFlashcard from '../../components/Flashcard/FlippableFlashcard.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import useFlashcards from '../../hooks/useFlashcards.hooks';

import { FlashcardType } from '../../Types/Flashcards';
import { Button } from '@mui/material';
import {
  getFoldersFromDB,
  updateSubFolderOnFlashcardResult,
} from '../../database/foldersData';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import QCMFlashcard from '../../components/Flashcard/QCMFlashcard.component';
import { setQCMAnswers } from '../../redux/study/study';
import { checkIsSuccessOnQCMAnswers } from '../../utils/functions';
import DoneIcon from '../../components/DoneIcon/DoneIcon.component';
import { setFolders } from '../../redux/foldersFlashcards/foldersFlashcards';

const StudyFlashcards = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { QCMAnswers } = useAppSelector((state) => state.study);
  const { email, isUserAuthenticated } = useAppSelector((state) => state.user);
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.folders
  );
  const { flashcards } = useFlashcards(activeFolder, activeSubFolder);

  const [isFlipped, setIsFlipped] = useState(false);
  const [areCardsDone, setAreCardsDone] = useState(false);
  const [activeCard, setActiveCard] = useState(1);
  const [typeOfCard, setTypeOfCard] = useState('classic');
  const [QCMIsRevealed, setQCMIsRevealed] = useState(false);
  const [prevQCMAnswers, setPrevQCMAnswers] = useState<any>();

  useEffect(() => {
    const activeFlashcard = flashcards[activeCard - 1];
    if (activeFlashcard) {
      if (typeof activeFlashcard.back === 'object') {
        setTypeOfCard('qcm');
        setIsFlipped(false);
        setQCMIsRevealed(false);
      } else if (typeof activeFlashcard.back === 'string') {
        setTypeOfCard('classic');
        setQCMIsRevealed(false);
        setIsFlipped(false);
      }
    } else {
      setAreCardsDone(true);
    }
  }, [flashcards, activeCard]);

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
      setQCMIsRevealed(false);
      setIsFlipped(false);
    }
  };

  const handleOnRevealCard = () => {
    const activeFlashcard = flashcards[activeCard - 1];
    if (typeOfCard === 'qcm') {
      setPrevQCMAnswers(QCMAnswers);
      dispatch(setQCMAnswers(activeFlashcard.back));
      setQCMIsRevealed(true);
    } else {
      setIsFlipped(true);
    }
  };

  const getFolders = async () => {
    if (email && isUserAuthenticated) {
      const folders = await getFoldersFromDB(email);
      dispatch(setFolders(folders));
    }
  };

  useEffect(() => {
    getFolders();
  }, [email, isUserAuthenticated]);

  return (
    <DarkContainer height='80%'>
      {!areCardsDone ? (
        flashcards.map((flashcard: FlashcardType) => {
          if (activeCard === flashcard.number) {
            if (typeof flashcard.back === 'string') {
              return (
                <FlippableFlashcard
                  key={flashcard.number}
                  front={flashcard.front}
                  back={flashcard.back}
                  isFlipped={isFlipped}
                  setIsFlipped={setIsFlipped}
                />
              );
            } else if (typeof flashcard.back === 'object') {
              return (
                <QCMFlashcard
                  key={flashcard.number}
                  front={flashcard.front}
                  back={flashcard.back}
                />
              );
            }
          } else return null;
        })
      ) : (
        <FlexContainer
          style={{ background: 'transparent' }}
          height='30%'
          justifyContent='center'
          alignItems='center'
        >
          <DoneIcon />
        </FlexContainer>
      )}

      <FlexContainer
        height='100px'
        justifyContent='space-evenly'
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        {isFlipped || (QCMIsRevealed && !areCardsDone) ? (
          <>
            {!QCMIsRevealed ? (
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
                onClick={() =>
                  handleOnNextCard(
                    checkIsSuccessOnQCMAnswers(
                      prevQCMAnswers,
                      flashcards[activeCard - 1].back
                    )
                  )
                }
                color='primary'
              >
                Next
              </Button>
            )}
          </>
        ) : (
          <Button
            variant='contained'
            onClick={() => {
              areCardsDone ? navigate('/') : handleOnRevealCard();
            }}
          >
            {areCardsDone && 'Back to folder'}
            {!areCardsDone && typeOfCard === 'classic' && 'Flip'}
            {!areCardsDone &&
              typeOfCard === 'qcm' &&
              !QCMIsRevealed &&
              'Reveal'}
          </Button>
        )}
      </FlexContainer>
    </DarkContainer>
  );
};

export default StudyFlashcards;
