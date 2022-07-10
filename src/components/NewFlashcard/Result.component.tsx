import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  addNewOperation,
  addNewVariable,
  changeOperation,
  removeOperation,
  selectVariablesByVar,
} from '../../redux/newFlashcard/newFlashcard';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { handleCalculation } from '../../utils/smartcard';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';
import { BasicParagraph } from '../Texts/Texts.component';
import ResultsSelectors from './ResultsSelectors.component';

type ResultProps = {
  onChange: any;
};

const valuess = [
  { step: 1, firstOperand: 'a', operator: '+', secondOperand: 'b' },
  { step: 2, firstOperand: 'step-1', operator: '+', secondOperand: 'a' },
];

const Result = ({ onChange }: ResultProps) => {
  const dispatch = useAppDispatch();
  const { variables, operations } = useAppSelector(
    (state) => state.newFlashcard
  );
  const variablesTypeVar = useAppSelector(selectVariablesByVar);

  const handleAddNewVariable = (operation: any, index: number) => {
    const { firstOperand, operator, secondOperand } = operation;
    const newOperation = {
      ...operation,
      step: index + 1,
      name: `step-${index + 1}`,
    };

    dispatch(changeOperation({ index, operation: newOperation }));
    dispatch(
      addNewVariable({
        type: 'variable',
        name: `step-${index + 1}`,
        value: { firstOperand, operator, secondOperand },
        symbol: '',
        typeOfVariable: 'number',
      })
    );
  };

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)', paddingBottom: '50px' }}
      justifyContent='space-evenly'
      flexDirection='column'
      height='80%'
    >
      <FlexContainer
        style={{
          backgroundColor: 'rgba(0,0,0,0)',
          height: '300px',
          overflowY: 'scroll',
        }}
        flexDirection='column'
        justifyContent='center'
      >
        {operations.map((operation: any, index: number) => (
          <ResultsSelectors
            key={index}
            resultsOperationsLength={operations.length}
            onRemoveCalculatedVariable={() => dispatch(removeOperation(index))}
            onSaveCalculatedVariable={(operation: any) =>
              handleAddNewVariable(operation, index)
            }
            variables={variablesTypeVar}
          />
        ))}
        <Button
          variant='contained'
          onClick={() =>
            dispatch(
              addNewOperation({
                firstOperand: '',
                secondOperand: '+',
                operator: '',
                step: 1,
              })
            )
          }
        >
          Then
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Result;
