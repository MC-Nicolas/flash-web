import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';
import ResultsSelectors from './ResultsSelectors.component';

type ResultProps = {
  onChange: any;
  elements: { type: string }[];
};

const mathOperators = ['+', '-', '*', '/'];

const handleCalculation: any = {
  '+': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) + parseInt(secondOperand),
  '-': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) - parseInt(secondOperand),
  '*': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) * parseInt(secondOperand),
  '/': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) / parseInt(secondOperand),
};

const Result = ({ onChange, elements }: ResultProps) => {
  const [result, setResult] = useState(0);
  const [resultOperations, setResultOperations] = useState<any>([
    {
      step: 1,
      firstOperand: '',
      operator: '*',
      secondOperand: '',
    },
    {
      step: 2,
      firstOperand: '',
      operator: '*',
      secondOperand: '',
    },
  ]);
  const [variables, setVariables] = useState<any>([]);

  useEffect(() => {
    const varElements = [];
    for (const element of elements) {
      element.type === 'variable' && varElements.push(element);
    }
    setVariables(varElements);
  }, [elements]);

  useEffect(() => {
    if (resultOperations.firstOperand && resultOperations.secondOperand) {
      const res = handleCalculation[resultOperations.operator](
        resultOperations.firstOperand,
        resultOperations.secondOperand
      );
      setResult(res);
    }
  }, [resultOperations]);

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)', paddingBottom: '50px' }}
      justifyContent='space-evenly'
      flexDirection='column'
      height='80%'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        flexDirection='column'
        justifyContent='space-between'
        height='150px'
      >
        {resultOperations.map((operation: any, index: number) => (
          <ResultsSelectors
            key={index}
            resultsOperationsLength={resultOperations.length}
            onSaveVariable={(e: any) =>
              setResultOperations([...resultOperations, e])
            }
            variables={[operation.firstOperand, operation.secondOperand]}
          />
        ))}
        <Button variant='contained'>Then</Button>
      </FlexContainer>

      <p style={{ fontSize: '22px', color: 'white', letterSpacing: '1px' }}>
        Result: {result}
      </p>
    </FlexContainer>
  );
};

export default Result;
