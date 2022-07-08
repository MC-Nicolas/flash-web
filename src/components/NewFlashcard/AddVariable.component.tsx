import React, { useEffect, useState } from 'react';
import { randomNum } from '../../utils/smartcard';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { BasicSelect, WhiteInput } from '../Inputs/Inputs.component';
import { BasicParagraph } from '../Texts/Texts.component';

const typesOfVariables = ['number', 'random number'];

interface AddVariableProps {
  setState: any;
  state: any;
  RNState: any;
  setRNState: any;
  name: string;
  value: any;
  symbol: string;
  typeOfVariable: string;
}
const AddVariable = ({
  setState,
  state,
  RNState,
  setRNState,
  name,
  value,
  typeOfVariable,
  symbol,
}: AddVariableProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      justifyContent='space-evenly'
    >
      <FlexContainer
        flexDirection='column'
        justifyContent='space-evenly'
        height='100px'
        width='75px'
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        <BasicParagraph text='Type' />
        <BasicSelect
          onChange={(e: any) => setState(e, 'type', state)}
          options={typesOfVariables}
          value={typeOfVariable}
        />
      </FlexContainer>
      {typeOfVariable === 'number' ? (
        <>
          <WhiteInput
            label='Name'
            value={name}
            onChange={(e: any) => setState(e, 'name', state)}
            style={{ width: '100px' }}
          />
          <WhiteInput
            label='Value'
            value={value}
            onChange={(e: any) => setState(e, 'value', state)}
            style={{ width: '100px' }}
          />
          <WhiteInput
            label='Symbol'
            value={symbol}
            onChange={(e: any) => setState(e, 'symbol', state)}
            style={{ width: '100px' }}
          />
        </>
      ) : (
        <FlexContainer
          flexDirection='column'
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          height='200px'
          width='300px'
          justifyContent='space-between'
        >
          <FlexContainer
            flexDirection='row'
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            height='200px'
            width='300px'
            justifyContent='space-between'
          >
            <WhiteInput
              label='Name'
              value={name}
              onChange={(e: any) => setState(e, 'name', state)}
              style={{ width: '100px' }}
            />

            <WhiteInput
              label='Symbol'
              value={symbol}
              onChange={(e: any) => setState(e, 'symbol', state)}
              style={{ width: '100px' }}
            />
          </FlexContainer>
          <FlexContainer
            flexDirection='row'
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            height='200px'
            width='300px'
            justifyContent='space-between'
          >
            <WhiteInput
              label='Min'
              value={RNState.min.toString()}
              onChange={(e: any) =>
                setRNState({ ...RNState, min: e.target.value })
              }
              style={{ width: '100px' }}
            />
            <WhiteInput
              label='Max'
              value={RNState.max.toString()}
              onChange={(e: any) =>
                setRNState({ ...RNState, max: e.target.value })
              }
              style={{ width: '100px' }}
            />
          </FlexContainer>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default AddVariable;
