import React from 'react';

import styled from 'styled-components';

import FlexContainer from '../FlexContainer/FlexContainer.component';

type PreviewCardProps = {
  cardFrontText: string;
  cardBackText: string;
};

const PreviewCard = ({ cardFrontText, cardBackText }: PreviewCardProps) => {
  return (
    <FlexContainer height='300px' width='300px' flexDirection='column'>
      <FlexContainer>
        <StyledText>{cardFrontText}</StyledText>
      </FlexContainer>
      <StyledDivider />
      <FlexContainer>
        <StyledText>{cardBackText}</StyledText>
      </FlexContainer>
    </FlexContainer>
  );
};

const StyledDivider = styled.div`
  content: '';
  z-index: 100;
  width: 80%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const StyledText = styled.p`
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
`;

export default PreviewCard;
