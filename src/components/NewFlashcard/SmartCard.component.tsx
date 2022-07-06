import React, { useEffect, useState } from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import Button from '@mui/material/Button';
import { NeumorphicInput, WhiteInput } from '../Inputs/Inputs.component';
import CardDropdown from '../CardDropdown/CardDropdown.component';
import AddVariable from './AddVariable.component';
import { BasicModal } from '../Modals/Modals.component';
import Result from './Result.component';

type Props = {};

const SmartCard = (props: Props) => {
  const [typeOfAdd, setTypeOfAdd] = useState<String>('variable');
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [variableToAdd, setVariableToAdd] = useState<any>({
    name: '',
    value: 0,
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

    setVariableToAdd({ name: '', value: 0, symbol: '' });
    setTextToAdd('');
  };

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
            setModalIsVisible(true);
            setTypeOfAdd(val);
          }}
        />

        {modalIsVisible && (
          <BasicModal onClose={() => setModalIsVisible(false)}>
            {typeOfAdd === 'variable' && (
              <AddVariable
                name={variableToAdd.name}
                value={variableToAdd.value}
                symbol={variableToAdd.symbol}
                onNameChange={(e: any) =>
                  setVariableToAdd({ ...variableToAdd, name: e.target.value })
                }
                onValueChange={(e: any) =>
                  setVariableToAdd({
                    ...variableToAdd,
                    value: e.target.value,
                  })
                }
                onSymbolChange={(e: any) =>
                  setVariableToAdd({
                    ...variableToAdd,
                    symbol: e.target.value,
                  })
                }
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
              <Result
                elements={elements}
                onChange={(e: any) => setTextToAdd(e.target.value)}
              />
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
        {elements.map((element: any) => {
          if (element.type === 'variable') {
            return (
              <p
                style={{
                  color: 'white',
                  fontSize: '24px',
                  letterSpacing: '2px',
                }}
              >
                &nbsp;{`${element.value}${element.symbol}`}&nbsp;
              </p>
            );
          } else if (element.type === 'text') {
            return (
              <p
                style={{
                  color: 'white',
                  fontSize: '24px',
                  letterSpacing: '2px',
                }}
              >
                &nbsp;{element.text}&nbsp;
              </p>
            );
          }
        })}
      </FlexContainer>
    </FlexContainer>
  );
};

export default SmartCard;
