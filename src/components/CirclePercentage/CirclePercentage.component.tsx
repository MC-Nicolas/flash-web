import React, { useEffect, useState } from 'react';
import { extractPercentageFromImportantFoldersSuccess } from '../../database/foldersData';
import { useAppSelector } from '../../redux/redux.hooks';
import { RootState } from '../../redux/store';

import './CirclePercentage.component.style.scss';

const CirclePercentage = () => {
  const { importantFolders } = useAppSelector(
    (state: RootState) => state.folders
  );
  const [totalPercentage, setTotalPercentage] = useState(0);

  useEffect(() => {
    const percentage =
      extractPercentageFromImportantFoldersSuccess(importantFolders);

    let count = 0;

    const updateCount = () => {
      setTotalPercentage(count + 1);
      count++;

      if (count >= percentage) {
        clearInterval(counter);
      }
    };
    let counter = setInterval(updateCount, 50);
  }, [importantFolders]);

  return (
    <div className='progress-circle'>
      <div className='progress-circle-shadow' />
      <div className='progress-circle-inner'>{totalPercentage}%</div>
    </div>
  );
};

export default CirclePercentage;
