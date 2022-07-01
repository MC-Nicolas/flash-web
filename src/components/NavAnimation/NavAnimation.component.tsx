import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import './NavAnimation.component.style.scss';

type NavAnimationProps = {
  activeSection: string;
  setActiveSection: any;
};

const NavAnimation = ({
  activeSection,
  setActiveSection,
}: NavAnimationProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      height='100px'
      justifyContent='space-evenly'
    >
      <div className='progress' />
      <button
        className={`neumorphic-step ${
          activeSection === 'where' ? 'active' : ''
        }`}
        onClick={() => setActiveSection('where')}
      >
        <div
          className={`neumorphic-step-inner ${
            activeSection === 'where' ? 'active' : ''
          }`}
        >
          <p>Where</p>
        </div>
      </button>
      <button
        className={`neumorphic-step ${activeSection === 'how' ? 'active' : ''}`}
        onClick={() => setActiveSection('how')}
      >
        <div
          className={`neumorphic-step-inner ${
            activeSection === 'how' ? 'active' : ''
          }`}
        >
          <p>Type</p>
        </div>
      </button>
      <button
        className={`neumorphic-step ${
          activeSection === 'what' ? 'active' : ''
        }`}
        onClick={() => setActiveSection('what')}
      >
        <div
          className={`neumorphic-step-inner ${
            activeSection === 'what' ? 'active' : ''
          }`}
        >
          <p>Flash</p>
        </div>
      </button>
    </FlexContainer>
  );
};

export default NavAnimation;
