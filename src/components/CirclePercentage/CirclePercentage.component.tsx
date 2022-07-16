import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { returnNumberFromInitialRangeToTargerRange } from '../../utils/dataFormatting';

import './CirclePercentage.component.style.scss';

const CirclePercentage = ({ percentage }: { percentage: number }) => {
  const [totalPercentage, setTotalPercentage] = useState(0);

  useEffect(() => {
    let count = 0;

    const updateCount = () => {
      setTotalPercentage(count + 1);
      count++;

      if (count >= percentage) {
        clearInterval(counter);
      }
    };
    let counter = percentage > 0 ? setInterval(updateCount, 25) : 0;
  }, [percentage]);

  return (
    <StyledProgressCircle
      deg={returnNumberFromInitialRangeToTargerRange(
        totalPercentage,
        [0, 100],
        [0, 360]
      )}
    >
      <StyledProgressShadow
        deg={returnNumberFromInitialRangeToTargerRange(
          totalPercentage,
          [0, 100],
          [0, 360]
        )}
      />
      <div className='progress-circle-inner'>{totalPercentage}%</div>
    </StyledProgressCircle>
  );
};

const StyledProgressCircle = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background: radial-gradient(transparent 50%, transparent 51%),
    conic-gradient(
      transparent 0deg ${(props: { deg: number }) => props.deg}deg,
      rgb(33, 33, 33) ${(props: { deg: number }) => props.deg}deg 360deg
    ),
    conic-gradient(
      rgba(255, 47, 47, 1) 0deg,
      orange 180deg,
      rgba(7, 255, 32, 1)
    );
  border-radius: 50%;
  width: 200px;
  height: 200px;
  transition: all 500ms ease-in;
`;

const StyledProgressShadow = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  background: radial-gradient(transparent 50%, transparent 51%),
    conic-gradient(
      transparent 0deg ${(props: { deg: number }) => props.deg}deg,
      rgb(33, 33, 33) ${(props: { deg: number }) => props.deg}deg 360deg
    ),
    conic-gradient(rgba(255, 47, 47, 1) 0deg, orange 180deg, #00d63c);
  border-radius: 50%;
  width: 200px;
  height: 200px;

  transition: all 500ms ease-in;
  filter: blur(20px);
`;

export default CirclePercentage;
