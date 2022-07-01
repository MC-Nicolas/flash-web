import React, { useState } from 'react';

import DarkContainer from '../DarkContainer/DarkContainer.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';

import NavAnimation from '../NavAnimation/NavAnimation.component';

import WhereNewCard from './WhereNewCard.component';
import HowNewCard from './HowNewCard.component';
import WhatNewCard from './WhatNewCard.component';
import { useAppSelector } from '../../redux/redux.hooks';
import {
  createNewFlashcard,
  extractFolders,
  extractSubFolders,
} from '../../database/foldersData';

type Props = {};

const NewFlashcard = (props: Props) => {
  const { folders } = useAppSelector((state) => state.folders);
  const { email } = useAppSelector((state) => state.user);
  const [folderToAddTo, setFolderToAddTo] = useState(
    folders && extractFolders(folders)[0]
  );
  const [deckToAddTo, setDeckToAddTo] = useState(
    folders && extractSubFolders(folders)[0]
  );
  const [activeSection, setActiveSection] = useState('where');
  const [typeOfCard, setTypeOfCard] = useState('classic');

  const [frontCardText, setFrontCardText] = useState('');
  const [backCardText, setBackCardText] = useState('');

  const foldersOptions = extractFolders(folders);
  const decksOptions = extractSubFolders(folders);

  const handleOnCreateNewFlashcard = async () => {
    await createNewFlashcard(
      email,
      folderToAddTo,
      deckToAddTo,
      frontCardText,
      backCardText
    );
  };

  const handleActiveSection = (currentStep: string) => {
    if (currentStep === 'where') {
      setActiveSection('how');
    } else if (currentStep === 'how') {
      setActiveSection('what');
    }
  };

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
              foldersOptions={foldersOptions ?? ['Meterology']}
              decksOptions={decksOptions ?? ['FL']}
              handleNavigationSection={() => handleActiveSection('where')}
            />
          ) : (
            <></>
          )}
          {activeSection === 'how' ? (
            <HowNewCard
              typeOfCard={typeOfCard}
              onChange={(e: { target: { value: string } }) =>
                setTypeOfCard(e.target.value)
              }
              handleNavigationSection={() => handleActiveSection('how')}
            />
          ) : (
            <></>
          )}
          {activeSection === 'what' ? (
            <WhatNewCard
              frontCardText={frontCardText}
              setFrontCardText={setFrontCardText}
              backCardText={backCardText}
              setBackCardText={setBackCardText}
              typeOfCard='classic'
              onClick={handleOnCreateNewFlashcard}
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
