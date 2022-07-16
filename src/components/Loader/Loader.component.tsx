import React from 'react';
import { useAppSelector } from '../../redux/redux.hooks';
import FlexContainer from '../FlexContainer/FlexContainer.component';

import './Loader.component.styles.scss';

const Loader = () => {
  const { isLoading } = useAppSelector((state) => state.loader);
  return (
    <FlexContainer
      style={{
        position: 'absolute',
        zIndex: isLoading ? 1000 : -10,
        opacity: isLoading ? 1 : 0,
        transition: 'all .3s ease-in-out',
      }}
      height='100vh'
      width='100vw'
    >
      <span className='loader' />
    </FlexContainer>
  );
};

export default Loader;
