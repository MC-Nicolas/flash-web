import React, { useEffect, useState } from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import Button from '@mui/material/Button';
import { NeumorphicInput, WhiteInput } from '../Inputs/Inputs.component';
import CardDropdown from '../CardDropdown/CardDropdown.component';
import AddVariable from './AddVariable.component';
import { BasicModal } from '../Modals/Modals.component';
import Result from './Result.component';
import { BasicParagraph } from '../Texts/Texts.component';
import { randomNum } from '../../utils/smartcard';

type Props = {};

const SmartCard = (props: Props) => {
  const [typeOfAdd, setTypeOfAdd] = useState<String>('variable');
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [variableToAdd, setVariableToAdd] = useState<any>({
    name: '',
    value: 0,
    symbol: '',
    type: 'number',
  });
  const [RNValues, setRNValues] = useState({ min: 0, max: 0 });
  const [textToAdd, setTextToAdd] = useState<string>('');
  const [elements, setElements] = useState<any>([]);

  useEffect(() => {
    console.log(elements);
  }, [elements]);

  const handleAddNewTextOrVariable = () => {
    const { type: typeOfResult, name, value, symbol } = variableToAdd;
    console.log(typeOfResult);

    if (typeOfAdd === 'variable') {
      setElements([
        ...elements,
        {
          type: 'variable',
          typeOfVariable: typeOfResult,
          name: name,
          value: typeOfResult === 'number' ? value : RNValues,
          symbol: symbol,
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

  const handleVariableChange = (e: any, propToChange: string, state: any) => {
    setVariableToAdd({ ...state, [propToChange]: e.target.value });
  };

  const { name, value, type, symbol } = variableToAdd;

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
          console.log(
            randomNum(parseInt(element.value.min), parseInt(element.value.max))
          );
          if (element.type === 'variable') {
            if (element.typeOfVariable === 'random number') {
              return (
                <BasicParagraph
                  key={element.name}
                  text={`${element.name} = ${randomNum(
                    parseInt(element.value.min),
                    parseInt(element.value.max)
                  )}${element.symbol}`}
                />
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
