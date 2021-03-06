import { Delete } from '@mui/icons-material';
import React from 'react';
import { useAppSelector } from '../../redux/redux.hooks';

import { RadioButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { BasicInput } from '../Inputs/Inputs.component';

type TextOptionWithButtonProps = {
  text: string;
  setText: any;
  isCorrect: boolean;
  onCorrectChange: any;
  onDelete?: any;
  isFirstInit?: boolean;
};

const TextOptionWithButton = ({
  text,
  setText,
  isCorrect,
  onCorrectChange,
  onDelete,
  isFirstInit = false,
}: TextOptionWithButtonProps) => {
  return (
    <FlexContainer
      style={{
        backgroundImage: `linear-gradient(#1d2a3a00, #1d2a3a02), linear-gradient(
          140deg,
          rgba(0 ,0, 0, 0.40) 45%,
          rgba(255, 255, 255, 0.3) 155%
        )`,
        boxShadow: '0px 0px 10px rgba(0,0,0,0.8)',
        border: '1px solid rgba(0,0,0,0.4)',
        width: '80%',
        height: '50px',
        borderRadius: '50px',
        paddingLeft: '10px',
      }}
      flexWrap
      flexDirection='column'
      alignItems='center'
      justifyContent='space-evenly'
      isTest
    >
      <RadioButton
        isFirstInit={isFirstInit}
        isActive={isCorrect}
        onClick={onCorrectChange}
      />
      <FlexContainer width='90%' style={{ backgroundColor: 'transparent' }}>
        <BasicInput text={text} onChange={setText} placeholder='Your answer' />
        {onDelete && (
          <Delete color='error' sx={{ cursor: 'pointer' }} onClick={onDelete} />
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default TextOptionWithButton;
