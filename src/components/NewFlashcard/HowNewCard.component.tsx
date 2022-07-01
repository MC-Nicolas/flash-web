import React from 'react';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';

interface HowNewCardProps {
  typeOfCard: string;
}

const typeOfCardsOptions = [
  { value: 'classic', label: 'Classic' },
  { value: 'qcm', label: 'QCM' },
];

const HowNewCard = ({ typeOfCard }: HowNewCardProps) => {
  return (
    <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
      <NeumorphicSelect
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        label='Type Of Card'
        value={typeOfCard}
        onChange={() => console.log('tedst')}
      />
    </FlexContainer>
  );
};

export default HowNewCard;
