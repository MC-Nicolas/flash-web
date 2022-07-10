import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { mathOperators } from '../../utils/smartcard';
import { BasicSelect } from '../Inputs/Inputs.component';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import { formatVariables } from '../../utils/dataFormatting';

type ResultsSelectorsProps = {
  variables: any;
  onSaveCalculatedVariable: any;
  onRemoveCalculatedVariable: any;
  resultsOperationsLength: number;
};

const ResultsSelectors = ({
  variables,
  onSaveCalculatedVariable,
  onRemoveCalculatedVariable,
  resultsOperationsLength,
}: ResultsSelectorsProps) => {
  const [resultOperation, setResultOperation] = useState<any>({
    firstOperand: '',
    operator: '*',
    secondOperand: '',
  });
  const [formattedVariables, setFormattedVariables] = useState<any>();

  useEffect(() => {
    setFormattedVariables(formatVariables(variables));
  }, [variables]);

  return (
    <FlexContainer
      flexDirection='row'
      justifyContent='space-evenly'
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
    >
      <BasicSelect
        options={formattedVariables ?? []}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            firstOperand: e.target.value,
          })
        }
        value={resultOperation.firstOperand}
      />
      <BasicSelect
        value={''}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            operator: e.target.value,
          })
        }
        options={mathOperators}
      />

      <BasicSelect
        options={formattedVariables ?? []}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            secondOperand: e.target.value,
          })
        }
        value={resultOperation.secondOperand}
      />
      <Button onClick={() => onSaveCalculatedVariable(resultOperation)}>
        Save
      </Button>
      <Button color='error' onClick={onRemoveCalculatedVariable}>
        Clear
      </Button>
    </FlexContainer>
  );
};

export default ResultsSelectors;
