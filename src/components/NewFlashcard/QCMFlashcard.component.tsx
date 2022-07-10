import { Button } from '@mui/material';
import React, { useState } from 'react';
import Flashcard from '../Flashcard/Flashcard.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import TextOptionWithButton from '../TextOptionWithButton/TextOptionWithButton.component';

type Props = {};

const QCMFlashcard = (props: Props) => {
  const [text, setText] = useState('');
  const [frontSideIsActive, setFrontSideIsActive] = useState(false);
  const [QCMAnswers, setQCMAnswers] = useState([
    { text: '', isCorrect: false },
  ]);

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
            setQCMAnswers([...QCMAnswers, { text: '', isCorrect: false }]);
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
          text={text}
          onChange={(e: { target: { value: string } }) =>
            setText(e.target.value)
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
            {QCMAnswers.map((answer, index) => (
              <TextOptionWithButton
                key={index}
                text={answer.text}
                isCorrect={answer.isCorrect}
                onCorrectChange={() => {
                  const newAnswers = [...QCMAnswers];
                  newAnswers[index].isCorrect = !answer.isCorrect;
                  setQCMAnswers(newAnswers);
                }}
                setText={(e: any) => {
                  const newAnswers = [...QCMAnswers];
                  newAnswers[index].text = e.target.value;
                  setQCMAnswers(newAnswers);
                }}
              />
            ))}
          </FlexContainer>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default QCMFlashcard;
