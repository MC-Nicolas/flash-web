import React from 'react';

import styled from 'styled-components';

import { NeumorphicButton } from '../Buttons/Buttons.component';
import NewMenu from '../NewMenu/NewMenu.component';

import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import SchoolIcon from '@mui/icons-material/School';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import HomeIcon from '@mui/icons-material/Home';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Sidebar = (props: Props) => {
  const navigate = useNavigate();
  return (
    <StyledSidebar>
      <NewMenu icon={<NeumorphicButton icon={<AddIcon />} />} />
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        flexDirection='column'
        justifyContent='space-evenly'
      >
        <NeumorphicButton icon={<HomeIcon />} onClick={() => navigate('/')} />
        <NeumorphicButton
          icon={<SchoolIcon />}
          onClick={() => navigate('/study')}
        />
        <NeumorphicButton
          icon={<ViewCarouselIcon />}
          onClick={() => navigate('/my-cards')}
        />
        <NeumorphicButton
          icon={<EqualizerIcon />}
          onClick={() => navigate('/performances')}
        />
      </FlexContainer>
      <NeumorphicButton
        icon={<SettingsIcon />}
        onClick={() => navigate('/settings')}
      />
    </StyledSidebar>
  );
};

export const StyledSidebar = styled.div`
  width: 100px;
  height: 96%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  background: rgba(20, 22, 25, 0.44);
  box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(40px);
`;
export default Sidebar;
