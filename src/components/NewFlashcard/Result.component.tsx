import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { handleCalculation } from '../../utils/smartcard';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';
import { BasicParagraph } from '../Texts/Texts.component';
import ResultsSelectors from './ResultsSelectors.component';

type ResultProps = {
  onChange: any;
  elements: { type: string }[];
};

const mathOperators = ['+', '-', '*', '/'];

const removeElementFromArray = (
  elements: any,
  indexOfElementToRemove: number
) => {
  const newElements = [...elements];
  newElements.splice(indexOfElementToRemove, 1);
  return newElements;
};

const changeElementInResultOperations = (
  elements: any,
  elementToChange: any,
  index: number
) => {
  const newElements = [...elements];
  newElements[index] = { ...elementToChange, step: index + 1 };
  return newElements;
};

const Result = ({ onChange, elements }: ResultProps) => {
  const [result, setResult] = useState(0);
  const [resultOperations, setResultOperations] = useState<any>([]);
  const [variables, setVariables] = useState<any>([]);

  useEffect(() => {
    const varElements = [];
    for (const element of elements) {
      element.type === 'variable' && varElements.push(element);
    }
    setVariables(varElements);
  }, [elements]);

  useEffect(() => {
    if (resultOperations && resultOperations.length > 0) {
      resultOperations.forEach(
        (operation: {
          operator: string;
          firstOperand: string;
          secondOperand: string;
          step: number;
        }) => {
          const { operator, firstOperand, secondOperand, step } = operation;

          const varExists = variables.find(
            (variable: any) => variable.name === `Step ${step}: `
          );

          if (operator && firstOperand && secondOperand) {
            const res = handleCalculation[operation.operator](
              operation.firstOperand,
              operation.secondOperand
            );

            if (!varExists) {
              const newVariable = {
                name: `Step ${step}: `,
                type: 'variable',
                value: res,
                symbol: '',
              };
              setResult(res);
              setVariables([...variables, newVariable]);
            }
          }
        }
      );
    }
  }, [resultOperations]);

  useEffect(() => {
    // console.log(variables);
  }, [variables]);

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
        {resultOperations.map((operation: any, index: number) => (
          <ResultsSelectors
            key={index}
            resultsOperationsLength={resultOperations.length}
            onRemoveVariable={() => {
              const newElements = removeElementFromArray(
                resultOperations,
                index
              );
              setResultOperations(newElements);
            }}
            onSaveVariable={(e: any) => {
              const newElements = changeElementInResultOperations(
                resultOperations,
                e,
                index
              );
              setResultOperations(newElements);
            }}
            variables={variables}
          />
        ))}
        <Button
          variant='contained'
          onClick={() => setResultOperations([...resultOperations, {}])}
        >
          Then
        </Button>
      </FlexContainer>

      <BasicParagraph text={`Result: ${result}`} />
    </FlexContainer>
  );
};

export default Result;
