import React from 'react';

import styled from 'styled-components';
import FlexContainer from '../FlexContainer/FlexContainer.component';

type ProgressBarProps = {
  title: string;
  width: string;
};

const ProgressBar = ({ title, width }: ProgressBarProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'transparent' }}
      flexDirection='column'
      justifyContent='space-evenly'
      height='90px'
    >
      <h3 style={{ color: 'white', letterSpacing: '2px' }}>{title}</h3>
      <StyledProgressBarContainer>
        <StyledProgressBar style={{ width }} />
        <StyledProgressBarShadow style={{ width }} />
      </StyledProgressBarContainer>
    </FlexContainer>
  );
};

const StyledProgressBarContainer = styled.div`
  position: relative;
  background: #202122;
  width: 80%;
  height: 20px;
  box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.4),
    inset 6px 6px 12px rgba(0, 0, 0, 0.25);
  border-radius: 129px;
`;

const StyledProgressBar = styled.div`
  position: relative;
  background: #202122;
  width: 50%;
  height: 20px;
  border-radius: 129px;
  overflow: hidden;
  transition: all 0.5s;
  background: linear-gradient(90deg, #dd2e2e 0%, #00d63c 128.81%);
  border-radius: 129px;
`;
const StyledProgressBarShadow = styled.div`
  position: relative;
  background: #202122;
  width: 50%;
  height: 15px;
  background: linear-gradient(90deg, #dd2e2e 0%, #00d63c 128.81%);
  filter: blur(20px);
  border-radius: 129px;
  transition: all 0.5s;
`;

export default ProgressBar;
