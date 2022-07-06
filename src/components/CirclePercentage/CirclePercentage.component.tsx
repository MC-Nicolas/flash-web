import React, { useEffect, useState } from 'react';

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
    let counter = percentage > 0 ? setInterval(updateCount, 50) : 0;
  }, [percentage]);

  return (
    <div className='progress-circle'>
      <div className='progress-circle-shadow' />
      <div className='progress-circle-inner'>{totalPercentage}%</div>
    </div>
  );
};

export default CirclePercentage;
