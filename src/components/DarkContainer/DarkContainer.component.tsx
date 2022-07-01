import React from 'react';

import styled from 'styled-components';

const DarkContainer = ({
  children,
  height,
  minHeight,
  style,
  innerStyle,
}: {
  children: JSX.Element | JSX.Element[];
  height: string;
  minHeight?: string;
  style?: {};
  innerStyle?: {};
}) => {
  return (
    <StyledDarkContainer style={{ height, minHeight, ...style }}>
      <StyledDarkContent style={innerStyle}>{children}</StyledDarkContent>
    </StyledDarkContainer>
  );
};

const StyledDarkContainer = styled.div`
  width: 80%;
  height: 600px;
  border: double 2px transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#1d2a3a00, #1d2a3a02),
    linear-gradient(
      160deg,
      rgba(0, 0, 0, 0.45) 45%,
      rgb(199, 199, 199, 0.5) 155%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const StyledDarkContent = styled.div`
  width: 99.8%;
  height: 99.5%;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.25);
  background: linear-gradient(
      94.6deg,
      rgba(30, 32, 33, 0.5) 11.25%,
      rgba(32, 33, 36, 0.5) 90.96%
    ),
    radial-gradient(
      62% 62% at 24% 18%,
      rgba(55, 56, 61, 0.5) 0%,
      rgba(31, 32, 35, 0.5) 100%
    );
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export default DarkContainer;
