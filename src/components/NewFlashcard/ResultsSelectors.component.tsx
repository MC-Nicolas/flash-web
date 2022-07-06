import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

type ResultsSelectorsProps = {
  variables: any;
  onSaveVariable: any;
  resultsOperationsLength: number;
};

const mathOperators = ['+', '-', '*', '/'];

const ResultsSelectors = ({
  variables,
  onSaveVariable,
  resultsOperationsLength,
}: ResultsSelectorsProps) => {
  const [resultOperation, setResultOperation] = useState<any>({
    firstOperand: '',
    operator: '*',
    secondOperand: '',
    step: 0,
  });

  useEffect(() => {
    setResultOperation({
      ...resultOperation,
      step: resultsOperationsLength + 1,
    });
  }, [resultsOperationsLength]);
  console.log(variables);

  return (
    <FlexContainer
      flexDirection='row'
      justifyContent='space-evenly'
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
    >
      <select
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            firstOperand: e.target.value,
          })
        }
        style={{ fontSize: '18px', padding: '10px', minWidth: '120px' }}
      >
        {variables.map((variable: any) => (
          <option key={variable.name} value={variable.value}>
            {variable.name} {variable.value} {variable.symbol}
          </option>
        ))}
      </select>
      <select
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            operator: e.target.value,
          })
        }
        style={{ fontSize: '18px', padding: '10px', minWidth: '75px' }}
      >
        {mathOperators.map((operator: string) => (
          <option key={operator} value={operator}>
            {operator}
          </option>
        ))}
      </select>
      <select
        style={{ fontSize: '18px', padding: '10px', minWidth: '120px' }}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            secondOperand: e.target.value,
          })
        }
      >
        {variables.map((variable: any) => (
          <option key={variable.name} value={variable.value}>
            {variable.name} {variable.value} {variable.symbol}
          </option>
        ))}
      </select>
      <Button onClick={() => onSaveVariable(resultOperation)}>Save</Button>
      <Button color='error' onClick={() => console.log('remove var')}>
        Clear
      </Button>
    </FlexContainer>
  );
};

export default ResultsSelectors;
