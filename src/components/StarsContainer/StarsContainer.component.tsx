import React from 'react';

import styled from 'styled-components';

import FlexContainer from '../FlexContainer/FlexContainer.component';

import starIcon from '../../assets/icons/star.png';

type Props = {};

const StarsContainer = (props: Props) => {
  return (
    <FlexContainer
      width='250px'
      height='150px'
      flexDirection='column'
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
    >
      <StyledTitle>4.7</StyledTitle>
      <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <img src={starIcon} alt='star' />
        <img src={starIcon} alt='star' />
        <img src={starIcon} alt='star' />
        <img src={starIcon} alt='star' />
        <img src={starIcon} alt='star' />
      </FlexContainer>
    </FlexContainer>
  );
};

const StyledTitle = styled.h1`
  color: white;
  letter-spacing: 5px;
  font-size: 96px;
  font-family: 'Raleway', sans-serif;
`;

export default StarsContainer;
