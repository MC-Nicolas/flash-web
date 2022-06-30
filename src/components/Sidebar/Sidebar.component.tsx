import React from 'react';

import styled from 'styled-components';

import { NeumorphicButton } from '../Buttons/Buttons.component';

import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import NewMenu from '../NewMenu/NewMenu.component';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <StyledSidebar>
      <NewMenu icon={<NeumorphicButton icon={<AddIcon />} />} />
      <NeumorphicButton icon={<SettingsIcon />} />
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
