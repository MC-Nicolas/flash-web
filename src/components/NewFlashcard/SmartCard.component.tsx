import React, { useEffect, useState } from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import Button from '@mui/material/Button';
import { NeumorphicInput, WhiteInput } from '../Inputs/Inputs.component';
import CardDropdown from '../CardDropdown/CardDropdown.component';
import AddVariable from './AddVariable.component';

type Props = {};

const SmartCard = (props: Props) => {
  const [typeOfAdd, setTypeOfAdd] = useState<String>('variable');
  const [variableToAdd, setVariableToAdd] = useState<any>({
    name: '',
    value: null,
    symbol: '',
  });
  const [textToAdd, setTextToAdd] = useState<string>('');
  const [elements, setElements] = useState<any>([]);

  const handleAddNewTextOrVariable = () => {
    if (typeOfAdd === 'variable') {
      setElements([
        ...elements,
        {
          type: 'variable',
          name: variableToAdd.name,
          value: variableToAdd.value,
          symbol: variableToAdd.symbol,
        },
      ]);
    } else {
      setElements([
        ...elements,
        {
          type: 'text',
          text: textToAdd,
        },
      ]);
    }
  };
  useEffect(() => {
    console.log(elements);
  }, [elements]);

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      flexDirection='column'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        justifyContent='space-evenly'
        flexDirection='column'
        height='300px'
      >
        <CardDropdown onChange={(val: string) => setTypeOfAdd(val)} />

        <FlexContainer
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          justifyContent='space-evenly'
          alignItems='center'
        >
          {typeOfAdd === 'variable' && (
            <AddVariable
              onChange={(name: string, value: any, symbol: string) =>
                setVariableToAdd({ name, value, symbol })
              }
            />
          )}
          {typeOfAdd === 'text' && (
            <WhiteInput
              isTextArea
              value={textToAdd}
              label='Text'
              onChange={(e: { target: { value: string } }) =>
                setTextToAdd(e.target.value)
              }
            />
          )}
          <Button
            color='error'
            variant='contained'
            onClick={handleAddNewTextOrVariable}
          >
            Validate
          </Button>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        justifyContent='space-evenly'
      >
        Variable 1 = Cap 90°
      </FlexContainer>
    </FlexContainer>
  );
};

export default SmartCard;

{
  /* <WhiteInput
label='Name'
value='Cap'
onChange={() => console.log('test')}
/>
<WhiteInput
label='Value'
value=''
onChange={() => console.log('test')}
/>
<WhiteInput
label='Symbol'
value=''
onChange={() => console.log('test')}
/>
<Button color='success' variant='contained'>
<h1>+</h1>
</Button> */
}
