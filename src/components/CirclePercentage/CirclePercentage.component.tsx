import React from 'react';

import './CirclePercentage.component.style.scss';

type Props = {};

const CirclePercentage = (props: Props) => {
  return (
    <div className='progress-circle'>
      <div className='progress-circle-shadow' />
      <div className='progress-circle-inner'>75%</div>
    </div>
  );
};

export default CirclePercentage;
