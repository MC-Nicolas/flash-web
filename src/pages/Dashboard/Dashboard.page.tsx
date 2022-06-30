import React from 'react';
import CirclePercentage from '../../components/CirclePercentage/CirclePercentage.component';

import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import ProgressBar from '../../components/ProgressBar/ProgressBar.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import StarsContainer from '../../components/StarsContainer/StarsContainer.component';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <FlexContainer justifyContent='space-between'>
      <Sidebar />
      <FlexContainer flexDirection='column' justifyContent='space-between'>
        <FlexContainer height='100px' width='100%' justifyContent='center'>
          <h1 style={{ color: 'white', letterSpacing: '2px' }}>Daily Goals</h1>
        </FlexContainer>

        <FlexContainer flexDirection='column' justifyContent='space-between'>
          <DarkContainer height='30%' minHeight='200px'>
            <FlexContainer
              style={{ backgroundColor: 'rgba(0,0,0,0)', margin: '10px 0' }}
              justifyContent='space-evenly'
            >
              <StarsContainer />
              <CirclePercentage />
            </FlexContainer>
          </DarkContainer>
          <DarkContainer height='65%' minHeight='400px'>
            <ProgressBar width='80%' title='Navigation' />
            <ProgressBar width='20%' title='Meteorology' />
            <ProgressBar width='45%' title='Mechanics & Systems' />
            <ProgressBar width='90%' title='Procedures' />
          </DarkContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Dashboard;
