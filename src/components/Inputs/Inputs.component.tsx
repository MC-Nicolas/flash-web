import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import './Inputs.component.style.scss';

type NeumorphicInputProps = {
  label: string;
  onChange: any;
  placeholder?: string;
  value: string;
  style?: {};
  options?: string[];
};

export const NeumorphicInput = ({
  label,
  onChange,
  placeholder,
  value,
}: NeumorphicInputProps) => {
  return (
    <FlexContainer
      height='100px'
      width='200px'
      flexDirection='column'
      alignItems='flex-start'
    >
      <p
        style={{
          fontSize: '18px',
          color: 'white',
          letterSpacing: '2px',
          paddingBottom: '10px',
        }}
      >
        {label}
      </p>
      <input
        className='neumorphic-input'
        type='text'
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </FlexContainer>
  );
};

export const NeumorphicSelect = ({
  label,
  onChange,
  placeholder,
  value,
  style,
  options,
}: NeumorphicInputProps) => {
  return (
    <FlexContainer
      style={style}
      height='100px'
      width='200px'
      flexDirection='column'
      alignItems='flex-start'
    >
      <p
        style={{
          fontSize: '18px',
          color: 'white',
          letterSpacing: '2px',
          paddingBottom: '10px',
        }}
      >
        {label}
      </p>
      <select
        className='neumorphic-select'
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      >
        {options?.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FlexContainer>
  );
};
