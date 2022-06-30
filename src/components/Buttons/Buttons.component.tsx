import React from 'react';

import { StyledDarkPlainButton } from './Buttons.component.styles';

import './Buttons.component.styles.scss';

type DarkPlainButtonProps = {
  title: string;
  theme: any;
};

export const DarkPlainButton = ({ title, theme }: DarkPlainButtonProps) => {
  return (
    <StyledDarkPlainButton
      theme={theme}
      className='darkPlainStyledDarkPlainButton'
    >
      {title}
    </StyledDarkPlainButton>
  );
};

export const NeumorphicButton = ({ icon }: { icon: JSX.Element | any }) => {
  return (
    <div className='neumorphic-container'>
      <div className='neumorphic-1'>
        <div className='neumorphic-2'>
          <div className='neumorphic-3' />
          <p className='neumorphic-content'>{icon}</p>
        </div>{' '}
      </div>
    </div>
  );
};

export const NewElementButton = () => {
  return (
    <div className='newElementButton-container'>
      <div className='newElementButton-inner'>+</div>
    </div>
  );
};
