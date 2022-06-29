import React from 'react';

import { StyledDarkPlainButton } from './Buttons.component.styles';

import SettingsIcon from '@mui/icons-material/Settings';

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

export const NeumorphicButton = () => {
  return (
    <div className='neumorphic-container'>
      <div className='neumorphic-1'>
        <div className='neumorphic-2'>
          <div className='neumorphic-3' />
          <p className='neumorphic-content'>
            <SettingsIcon />
          </p>
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
