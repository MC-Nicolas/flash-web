import React from 'react';

import styled from 'styled-components';

import FlexContainer from '../FlexContainer/FlexContainer.component';

const Flashcard = ({
  text,
  onChange,
  style,
}: {
  text: string;
  onChange: any;
  style?: {};
}) => {
  return (
    <StyledFlexContainer style={{ ...style }}>
      <textarea
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '18px',
          width: '90%',
          padding: ' 15px 10px',
          height: '90%',
        }}
        onChange={onChange}
        value={text}
      />
    </StyledFlexContainer>
  );
};

const StyledFlexContainer = styled(FlexContainer)`
  background: radial-gradient(
    62% 62% at 24% 18%,
    rgba(84, 86, 89, 0.5) 0%,
    rgba(35, 38, 41, 0.5) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.5),
    -6px -6px 9px 0px rgba(255, 255, 255, 0.05);
  width: 40%;
  height: 400px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
`;

export default Flashcard;
