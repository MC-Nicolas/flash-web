import React, { useEffect, useState } from 'react';

import FlexContainer from '../../components/FlexContainer/FlexContainer.component';

import { Button } from '@mui/material';
import { BorderBottomInput } from '../../components/Inputs/Inputs.component';
import { BasicText } from '../../components/Texts/Texts.component.stories';
import { loginOrSignup } from '../../database/users';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { setUserEmail } from '../../redux/user/UserSlice';

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isUserAuthenticated } = useAppSelector((state) => state.user);
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLoginOrSignup = () => {
    const isSuccess = loginOrSignup(
      isLogin,
      loginForm.email,
      loginForm.password
    );
    if (isSuccess) {
      dispatch(setUserEmail(loginForm.email));
      navigate('/');
    }
  };

  useEffect(() => {
    if (isUserAuthenticated) {
      navigate('/dashboard');
    }
  }, [isUserAuthenticated]);

  return (
    <FlexContainer
      flexDirection='column'
      width='380px'
      height='500px'
      justifyContent='space-evenly'
      style={{
        backgroundColor: '#222',
        borderRadius: '10px',
        boxShadow:
          '5px 3px 10px 0px rgba(0, 0, 0, 0.5), -3px -3px 6px 0px rgba(255, 255, 255, 0.05)',
      }}
    >
      <BasicText text={`${isLogin ? 'Login' : 'Sign Up'}`} fontSize='28px' />
      <BorderBottomInput
        text={loginForm.email}
        placeholder='Email'
        onChange={(e: { target: { value: string } }) =>
          setLoginForm({ ...loginForm, email: e.target.value })
        }
      />
      <BorderBottomInput
        text={loginForm.password}
        placeholder='Password'
        onChange={(e: { target: { value: string } }) =>
          setLoginForm({ ...loginForm, password: e.target.value })
        }
      />

      <Button variant='contained' onClick={handleLoginOrSignup}>
        {isLogin ? 'LOGIN' : 'SIGN UP'}
      </Button>
      <FlexContainer height='40px' style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <p style={{ color: 'lightgrey' }}>
          {isLogin
            ? "Don't have an account yet ?"
            : 'Have an account already ?'}
        </p>
        <Button color='success' onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'SIGN UP' : 'LOGIN'}
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Login;
