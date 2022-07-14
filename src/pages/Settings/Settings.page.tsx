import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';
import { auth } from '../../database/users';
import { useAppDispatch } from '../../redux/redux.hooks';
import {
  setUserEmail,
  setIsUserAuthenticated,
} from '../../redux/user/UserSlice';

type Props = {};

const Settings = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOnSignOut = () => {
    signOut(auth);
    dispatch(setUserEmail(''));
    dispatch(setIsUserAuthenticated(false));
    navigate('/login');
  };
  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer>
        <Button color='error' onClick={handleOnSignOut}>
          LOGOUT
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Settings;
