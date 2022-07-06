import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { WhiteInput } from '../Inputs/Inputs.component';

type AddVariableProps = {
  onChange: any;
};

const AddVariable = ({ onChange }: AddVariableProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      justifyContent='space-evenly'
    >
      <WhiteInput
        label='Name'
        value='Cap'
        onChange={() => console.log('test')}
      />
      <WhiteInput label='Value' value='' onChange={() => console.log('test')} />
      <WhiteInput
        label='Symbol'
        value=''
        onChange={() => console.log('test')}
      />
    </FlexContainer>
  );
};

export default AddVariable;
