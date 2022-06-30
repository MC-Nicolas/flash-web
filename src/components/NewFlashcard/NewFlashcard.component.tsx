import React, { useState } from 'react';
import DarkContainer from '../DarkContainer/DarkContainer.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';
import NavAnimation from '../NavAnimation/NavAnimation.component';

import Where from './Where.component';
import What from './What.component';
import How from './How.component';

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
            <Where
              folderToAddTo={folderToAddTo}
              setFolderToAddTo={setFolderToAddTo}
              deck={deckToAddTo}
              setDeckToAddTo={setDeckToAddTo}
            />
          ) : (
            <></>
          )}
          {activeSection === 'how' ? (
            <Where
              folderToAddTo={folderToAddTo}
              setFolderToAddTo={setFolderToAddTo}
              deck={deckToAddTo}
              setDeckToAddTo={setDeckToAddTo}
            />
          ) : (
            <></>
          )}
          {activeSection === 'what' ? (
            <Where
              folderToAddTo={folderToAddTo}
              setFolderToAddTo={setFolderToAddTo}
              deck={deckToAddTo}
              setDeckToAddTo={setDeckToAddTo}
            />
          ) : (
            <></>
          )}
        </FlexContainer>
      </DarkContainer>
    </FlexContainer>
  );
};

export default NewFlashcard;
