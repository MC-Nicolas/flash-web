import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import './Inputs.component.style.scss';

type NeumorphicInputProps = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
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
