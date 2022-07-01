import React from 'react';

import { StyledDarkPlainButton } from './Buttons.component.styles';

import './Buttons.component.styles.scss';

type DarkPlainButtonProps = {
  title: string;
  theme: any;
  onClick?: () => void;
};

export const DarkPlainButton = ({
  title,
  theme,
  onClick,
}: DarkPlainButtonProps) => {
  return (
    <StyledDarkPlainButton
      onClick={onClick}
      theme={theme}
      className='darkPlainStyledDarkPlainButton'
    >
      {title}
    </StyledDarkPlainButton>
  );
};

export const NeumorphicButton = ({
  icon,
  onClick,
}: {
  icon: JSX.Element | any;
  onClick?: any;
}) => {
  return (
    <div className='neumorphic-container' onClick={onClick}>
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
