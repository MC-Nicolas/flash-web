import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  removeFlashcardBack,
  setFlashcardBack,
  setFlashcardFront,
} from '../../redux/create/create';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import Flashcard from '../Flashcard/Flashcard.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import TextOptionWithButton from '../TextOptionWithButton/TextOptionWithButton.component';

const QCMFlashcard = () => {
  const dispatch = useAppDispatch();
  const { flashcard } = useAppSelector((state) => state.create);
  const [frontSideIsActive, setFrontSideIsActive] = useState(true);

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      flexDirection='column'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        height='100px'
        justifyContent='space-evenly'
      >
        <Button
          variant='contained'
          color='success'
          onClick={() => {
            dispatch(
              setFlashcardBack({
                typeOfFlashcard: 'qcm',
                type: 'add',
              })
            );
            setFrontSideIsActive(false);
          }}
        >
          +
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setFrontSideIsActive(!frontSideIsActive)}
        >
          Flip
        </Button>
      </FlexContainer>
      {frontSideIsActive ? (
        <Flashcard
          style={{ width: '80%', height: '300px' }}
          text={flashcard.front}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setFlashcardFront(e.target.value))
          }
        />
      ) : (
        <FlexContainer
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          height='300px'
          flexDirection='column'
          justifyContent='space-evenly'
        >
          <FlexContainer
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            height='300px'
            flexDirection='column'
            justifyContent='space-evenly'
          >
            {flashcard.back.map(
              (answer: { text: string; isCorrect: boolean }, index: number) => (
                <TextOptionWithButton
                  key={index}
                  text={answer.text}
                  isCorrect={answer.isCorrect}
                  onCorrectChange={() => {
                    dispatch(
                      setFlashcardBack({
                        typeOfFlashcard: 'qcm',
                        type: 'update',
                        index,
                        value: {
                          text: answer.text,
                          isCorrect: !answer.isCorrect,
                        },
                      })
                    );
                  }}
                  setText={(e: any) => {
                    dispatch(
                      setFlashcardBack({
                        typeOfFlashcard: 'qcm',
                        type: 'update',
                        index,
                        value: {
                          text: e.target.value,
                          isCorrect: answer.isCorrect,
                        },
                      })
                    );
                  }}
                  onDelete={() => dispatch(removeFlashcardBack(answer.text))}
                />
              )
            )}
          </FlexContainer>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default QCMFlashcard;
