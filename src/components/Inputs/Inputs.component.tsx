import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import './Inputs.component.style.scss';

interface NeumorphicInputProps {
  label?: string;
  onChange: any;
  placeholder?: string;
  value: string;
  style?: {};
  options?: string[];
  isTextArea?: boolean;
}

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
        style={{ cursor: 'pointer' }}
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

export const WhiteInput = ({
  label,
  onChange,
  placeholder,
  value,
  isTextArea,
  style,
}: NeumorphicInputProps) => {
  return (
    <FlexContainer
      flexDirection='column'
      alignItems='center'
      style={{ backgroundColor: 'rgba(0,0,0,0)', ...style }}
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
      {isTextArea ? (
        <textarea
          style={{ width: '90%', height: '50%' }}
          className='white-input'
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          className='white-input'
          type='text'
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      )}
    </FlexContainer>
  );
};

interface SelectOptionsTypes {
  name: string;
  value: string | number;
  symbol: string;
}
interface BasicSelectProps extends Omit<NeumorphicInputProps, 'options'> {
  options: string[] | SelectOptionsTypes[];
  onChange: any;
}

export const BasicSelect = ({ options, onChange }: BasicSelectProps) => {
  return (
    <select
      onChange={onChange}
      style={{ fontSize: '18px', padding: '10px', width: '100px' }}
    >
      {options.map((option: string | SelectOptionsTypes) => {
        if (typeof option === 'string') {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        } else {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          );
        }
      })}
    </select>
  );
};

export const BasicInput = ({
  text,
  onChange,
  placeholder = '',
}: {
  text: string;
  onChange: any;
  placeholder: string;
}) => {
  return (
    <input
      value={text}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        marginLeft: '10px',
        border: 'none',
        fontSize: '20px',
        letterSpacing: '1px',
        color: 'white',
        outline: 'none',
      }}
    />
  );
};

export const BorderBottomInput = ({
  text,
  onChange,
  placeholder = '',
  type = 'text',
}: {
  text: string;
  onChange: any;
  placeholder: string;
  type?: string;
}) => {
  return (
    <input
      value={text}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        borderBottom: '1px solid white',
        fontSize: '18px',
        letterSpacing: '1px',
        color: 'white',
        outline: 'none',
        padding: '0 0 6px 0',
      }}
    />
  );
};
