import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicButton } from '../Buttons/Buttons.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

interface HowNewCardProps {
  typeOfCard: string;
  onChange: any;
  options: string[];
  handleNavigationSection: () => void;
}

const HowNewCard = ({
  typeOfCard,
  onChange,
  options,
  handleNavigationSection,
}: HowNewCardProps) => {
  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      flexDirection='column'
      height='80%'
      justifyContent='space-evenly'
    >
      <NeumorphicSelect
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        label='Type Of Card'
        value={typeOfCard}
        options={options}
        onChange={onChange}
      />
      <NeumorphicButton
        icon={<DoubleArrowIcon />}
        onClick={handleNavigationSection}
      />
    </FlexContainer>
  );
};

export default HowNewCard;
