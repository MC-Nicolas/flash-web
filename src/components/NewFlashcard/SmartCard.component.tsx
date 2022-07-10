import React, { useEffect, useState } from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import Button from '@mui/material/Button';
import { NeumorphicInput, WhiteInput } from '../Inputs/Inputs.component';
import CardDropdown from '../CardDropdown/CardDropdown.component';
import AddVariable from './AddVariable.component';
import { BasicModal } from '../Modals/Modals.component';
import Result from './Result.component';
import { BasicParagraph } from '../Texts/Texts.component';
import { handleCalculation, randomNum } from '../../utils/smartcard';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import {
  addNewVariable,
  setModalIsVisible,
  setTypeOfAdd,
} from '../../redux/newFlashcard/newFlashcard';
import { VariableType } from '../../redux/newFlashcard/newFlashcard.types';

type Props = {};

const getResultFromOperation = (operation: any, variables: any[]) => {
  const { firstOperand, operator, secondOperand } = operation;
  const firstOperandValue = findValueByName(firstOperand, variables);
  console.log(firstOperandValue);
  const secondOperandValue = findValueByName(secondOperand, variables);
  console.log(secondOperandValue);
  const result = handleCalculation[operator](
    firstOperandValue,
    secondOperandValue
  );

  return result;
};

const findValueByName = (name: string, variables: any[]) => {
  const variable = variables.find((v) => v.name === name);
  return variable ? variable.value : null;
};

const SmartCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const { typeOfAdd, modalIsVisible, variables } = useAppSelector(
    (state) => state.newFlashcard
  );

  const [variableToAdd, setVariableToAdd] = useState<any>({
    name: '',
    value: 0,
    symbol: '',
    type: 'number',
  });
  const [RNValues, setRNValues] = useState({ min: 0, max: 0 });
  const [textToAdd, setTextToAdd] = useState<string>('');

  const handleAddNewTextOrVariable = () => {
    const {
      type: typeOfResult = 'number',
      name,
      value,
      symbol,
    } = variableToAdd;

    if (typeOfAdd === 'variable') {
      dispatch(
        addNewVariable({
          type: 'variable',
          typeOfVariable: typeOfResult,
          name: name,
          value: typeOfResult === 'number' ? value : RNValues,
          symbol: symbol,
        })
      );
    } else {
      dispatch(
        addNewVariable({
          type: 'text',
          value: textToAdd,
        })
      );
    }

    setVariableToAdd({ name: '', value: 0, symbol: '' });
    setTextToAdd('');
  };

  const handleVariableChange = (e: any, propToChange: string, state: any) => {
    setVariableToAdd({ ...state, [propToChange]: e.target.value });
  };

  const { name, value, type = 'number', symbol } = variableToAdd;

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      flexDirection='column'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)', padding: '30px 0' }}
        justifyContent='space-evenly'
        flexDirection='column'
        height='300px'
        width='100%'
      >
        <CardDropdown
          onChange={(val: string) => {
            dispatch(setModalIsVisible(true));
            dispatch(setTypeOfAdd(val));
          }}
        />

        {modalIsVisible && (
          <BasicModal>
            {typeOfAdd === 'variable' && (
              <AddVariable
                name={name}
                value={value}
                symbol={symbol}
                typeOfVariable={type}
                state={variableToAdd}
                setState={handleVariableChange}
                RNState={RNValues}
                setRNState={setRNValues}
              />
            )}
            {typeOfAdd === 'text' && (
              <WhiteInput
                isTextArea
                value={textToAdd}
                label='Text'
                onChange={(e: any) => setTextToAdd(e.target.value)}
              />
            )}
            {typeOfAdd === 'result' && (
              <Result onChange={(e: any) => setTextToAdd(e.target.value)} />
            )}
            <Button
              color='error'
              variant='contained'
              onClick={handleAddNewTextOrVariable}
            >
              Validate
            </Button>
          </BasicModal>
        )}
      </FlexContainer>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        justifyContent='center'
        flexDirection='column'
      >
        {variables.map((element: any) => {
          if (element.type === 'variable') {
            if (typeof element.value === 'object') {
              let totalResult = 0;
              const firstOpValue = findValueByName(
                element.value.firstOperand,
                variables
              );

              const secondOpValue = findValueByName(
                element.value.secondOperand,
                variables
              );

              if (typeof firstOpValue === 'object') {
                getResultFromOperation(firstOpValue, variables);
              } else {
                totalResult =
                  totalResult +
                  handleCalculation[element.value.operator](
                    parseFloat(firstOpValue),
                    parseFloat(secondOpValue)
                  );
              }
              return (
                <BasicParagraph key={element.name} text={`${totalResult}`} />
              );
            } else {
              return (
                <BasicParagraph
                  key={element.name}
                  text={`${element.value}${element.symbol}`}
                />
              );
            }
          } else if (element.type === 'text') {
            return <BasicParagraph text={`${element.text}`} />;
          }
        })}
      </FlexContainer>
    </FlexContainer>
  );
};

export default SmartCard;
