import React from 'react';
import { useAppSelector } from '../../redux/redux.hooks';

import { TextField, withStyles } from '@mui/material';

import { DarkPlainButton } from '../../components/Buttons/Buttons.component';

import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import styled from 'styled-components';

const Login = () => {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <FlexContainer
      flexDirection='column'
      width='50%'
      height='700px'
      justifyContent='space-between'
    >
      <FlexContainer height='40%'>
        <h1>Logo</h1>
      </FlexContainer>
      <FlexContainer
        flexDirection='column'
        height='80%'
        justifyContent='space-evenly'
      >
        <TextField
          sx={{ color: '#fff' }}
          id='standard-basic'
          label='Standard'
          variant='standard'
        />
        <TextField id='standard-basic' label='Standard' variant='standard' />
        <DarkPlainButton theme={theme} title='Login' />
      </FlexContainer>
    </FlexContainer>
  );
};

export default Login;
