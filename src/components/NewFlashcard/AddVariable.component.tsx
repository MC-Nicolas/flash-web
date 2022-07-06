import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { WhiteInput } from '../Inputs/Inputs.component';

interface AddVariableProps {
  onNameChange: any;
  onValueChange: any;
  onSymbolChange: any;
  name: string;
  value: any;
  symbol: string;
}
const AddVariable = ({
  onNameChange,
  onValueChange,
  onSymbolChange,
  name,
  value,
  symbol,
}: AddVariableProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      justifyContent='space-evenly'
    >
      <WhiteInput
        label='Name'
        value={name}
        onChange={onNameChange}
        style={{ width: '100px' }}
      />
      <WhiteInput
        label='Value'
        value={value}
        onChange={onValueChange}
        style={{ width: '100px' }}
      />
      <WhiteInput
        label='Symbol'
        value={symbol}
        onChange={onSymbolChange}
        style={{ width: '100px' }}
      />
    </FlexContainer>
  );
};

export default AddVariable;
