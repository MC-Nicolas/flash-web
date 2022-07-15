import React from 'react';

import styled from 'styled-components';

import FlexContainer from '../FlexContainer/FlexContainer.component';

type PreviewCardProps = {
  cardFrontText: string;
  cardBackText: string | any[];
};

const PreviewCard = ({ cardFrontText, cardBackText }: PreviewCardProps) => {
  return (
    <StyledFlexContainer
      height='300px'
      width='300px'
      flexDirection='column'
      style={{ backgroundColor: 'rgba(0,0,0,0)', margin: '30px 0' }}
    >
      <FlexContainer
        height='98%'
        width='98%'
        flexDirection='column'
        style={{
          borderRadius: '10px',
          boxShadow: 'inset 0px 0px 10px 2px rgba(0, 0, 0, 0.7)',
        }}
      >
        <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
          <StyledText>{cardFrontText}</StyledText>
        </FlexContainer>
        <StyledDivider />

        <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }} flexWrap>
           
          {typeof cardBackText === 'string' && (
            <StyledText>{cardBackText}</StyledText>
          )}
          {typeof cardBackText !== 'string' &&
            cardBackText.length > 0 &&
            cardBackText.map((item: any) => {
              return (
                <StyledText key={item.text} style={{ margin: '5px' }}>
                  {item.text}
                  {item.isCorrect ? ' ✅' : ' ❌'}
                </StyledText>
              );
            })}
        </FlexContainer>
      </FlexContainer>
    </StyledFlexContainer>
  );
};

const StyledFlexContainer = styled(FlexContainer)`
  border: 1.5px solid;
  background: linear-gradient(
    145.84deg,
    rgba(0, 0, 0, 0.45) 13.57%,
    rgba(255, 255, 255, 0.45) 111.02%
  );
  border-radius: 10px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.7);
`;

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
  text-align: center;
`;

export default PreviewCard;
