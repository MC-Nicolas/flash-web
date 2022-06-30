import * as React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FolderIcon from '@mui/icons-material/Folder';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicButton } from '../Buttons/Buttons.component';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <NeumorphicButton icon={<FolderIcon />} />, name: 'Folder' },
  { icon: <NeumorphicButton icon={<LocalLibraryIcon />} />, name: 'Deck' },
  { icon: <NeumorphicButton icon={<ViewCarouselIcon />} />, name: 'Flashcard' },
];

const NewMenu = ({ icon }: { icon: JSX.Element }) => {
  const navigate = useNavigate();

  const handleNavigation = (actionName: string) => {
    if (actionName.toLowerCase() === 'folder') {
      navigate('/create/folder');
    } else if (actionName.toLowerCase() === 'deck') {
      navigate('/create/deck');
    } else if (actionName.toLowerCase() === 'flashcard') {
      navigate('/create/flashcard');
    }
  };
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      alignItems='flex-start'
    >
      <SpeedDial
        ariaLabel='SpeedDial playground example'
        icon={icon}
        direction='down'
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => handleNavigation(action.name)}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </FlexContainer>
  );
};

export default NewMenu;
