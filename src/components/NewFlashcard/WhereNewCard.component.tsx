import React from 'react';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { NeumorphicButton } from '../Buttons/Buttons.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';

type WhereProps = {
  folderToAddTo: string;
  setFolderToAddTo: any;
  deck: string;
  setDeckToAddTo: any;
};

const WhereNewCard = ({
  folderToAddTo,
  setFolderToAddTo,
  deck,
  setDeckToAddTo,
}: WhereProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      justifyContent='space-evenly'
      flexDirection='column'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '400px' }}
        justifyContent='space-evenly'
      >
        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          value={folderToAddTo}
          label='Folder'
          onChange={(e: { target: { value: string } }) =>
            setFolderToAddTo(e.target.value)
          }
        />

        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '400px' }}
          value={deck}
          label='Deck'
          onChange={(e: { target: { value: string } }) =>
            setDeckToAddTo(e.target.value)
          }
        />
      </FlexContainer>
      <NeumorphicButton icon={<DoubleArrowIcon />} />
    </FlexContainer>
  );
};

export default WhereNewCard;
