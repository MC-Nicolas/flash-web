import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import {
  changeQCMAnswer,
  setIsFirstInit,
  setQCMAnswers,
} from '../../redux/study/study';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import TextOptionWithButton from '../TextOptionWithButton/TextOptionWithButton.component';
import { BasicText } from '../Texts/Texts.component.stories';

type QCMFlashcardProps = {
  front: string;
  back: any[];
};

const QCMFlashcard = ({ front, back }: QCMFlashcardProps) => {
  const { QCMAnswers } = useAppSelector((state) => state.study);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (back.length > 0) {
      const newAnswers = back.map((answer, index) => {
        return {
          ...answer,
          isCorrect: false,
        };
      });
      dispatch(setQCMAnswers(newAnswers));
    }
  }, [back]);

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      height='100%'
      width='80%'
      flexDirection='column'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        height='300px'
      >
        <BasicText text={front} />
      </FlexContainer>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        flexDirection='column'
        flexWrap
        justifyContent='space-evenly'
      >
        {QCMAnswers &&
          QCMAnswers.map(
            (
              answer: {
                text: string;
                isCorrect: boolean;
                isFirstInit: boolean;
              },
              index: number
            ) => (
              <TextOptionWithButton
                key={index}
                text={answer.text}
                isCorrect={answer.isCorrect}
                isFirstInit={answer.isFirstInit}
                onCorrectChange={() => {
                  dispatch(changeQCMAnswer(index));
                  dispatch(setIsFirstInit({ index, isFirstInit: false }));
                }}
                setText={(e: any) => ''}
              />
            )
          )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default QCMFlashcard;
