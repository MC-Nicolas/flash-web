import React, { useState } from 'react';

import DarkContainer from '../DarkContainer/DarkContainer.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';
import NavAnimation from '../NavAnimation/NavAnimation.component';

import What from './WhatNewCard.component';
import How from './HowNewCard.component';
import WhereNewCard from './WhereNewCard.component';
import HowNewCard from './HowNewCard.component';
import WhatNewCard from './WhatNewCard.component';

type Props = {};

const NewFlashcard = (props: Props) => {
  const [folderToAddTo, setFolderToAddTo] = useState('');
  const [deckToAddTo, setDeckToAddTo] = useState('');
  const [activeSection, setActiveSection] = useState('where');
  return (
    <FlexContainer>
      <DarkContainer height='80%'>
        <FlexContainer
          style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '100px' }}
          flexDirection='column'
          height='80%'
          justifyContent='space-evenly'
        >
          <NavAnimation
            activeSection={activeSection.toLowerCase()}
            setActiveSection={setActiveSection}
          />
          {activeSection === 'where' ? (
            <WhereNewCard
              folderToAddTo={folderToAddTo}
              setFolderToAddTo={setFolderToAddTo}
              deck={deckToAddTo}
              setDeckToAddTo={setDeckToAddTo}
            />
          ) : (
            <></>
          )}
          {activeSection === 'how' ? (
            <HowNewCard typeOfCard='Classic' />
          ) : (
            <></>
          )}
          {activeSection === 'what' ? (
            <WhatNewCard typeOfCard='classic' />
          ) : (
            <></>
          )}
        </FlexContainer>
      </DarkContainer>
    </FlexContainer>
  );
};

export default NewFlashcard;
