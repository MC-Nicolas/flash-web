import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { mathOperators } from '../../utils/smartcard';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { BasicSelect } from '../Inputs/Inputs.component';

type ResultsSelectorsProps = {
  variables: any;
  onSaveVariable: any;
  onRemoveVariable: any;
  resultsOperationsLength: number;
};

const ResultsSelectors = ({
  variables,
  onSaveVariable,
  onRemoveVariable,
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

  return (
    <FlexContainer
      flexDirection='row'
      justifyContent='space-evenly'
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
    >
      <BasicSelect
        options={variables}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            firstOperand: e.target.value,
          })
        }
        value={resultOperation.firstOperand}
      />
      <BasicSelect
        value={'test'}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            operator: e.target.value,
          })
        }
        options={mathOperators}
      />

      <BasicSelect
        options={variables}
        onChange={(e: any) =>
          setResultOperation({
            ...resultOperation,
            secondOperand: e.target.value,
          })
        }
        value={resultOperation.secondOperand}
      />
      <Button onClick={() => onSaveVariable(resultOperation)}>Save</Button>
      <Button color='error' onClick={onRemoveVariable}>
        Clear
      </Button>
    </FlexContainer>
  );
};

export default ResultsSelectors;
