import React, { useEffect, useState } from 'react';

import DarkContainer from '../DarkContainer/DarkContainer.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';

import NavAnimation from '../NavAnimation/NavAnimation.component';

import WhereNewCard from './WhereNewCard.component';
import HowNewCard from './HowNewCard.component';
import WhatNewCard from './WhatNewCard.component';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import {
  createNewFlashcard,
  extractFolders,
  extractSubFolders,
} from '../../database/foldersData';
import { setActiveSubFolder } from '../../redux/create/create';
import {
  selectTypeOfFlashcard,
  setTypeOfFlashcard,
} from '../../redux/newFlashcard/newFlashcard';

type Props = {};

const NewFlashcard = (props: Props) => {
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.activeFolder
  );
  const dispatch = useAppDispatch();
  const typeOfFlashcard = useAppSelector(selectTypeOfFlashcard);

  const { folders } = useAppSelector((state) => state.folders);
  const { email } = useAppSelector((state) => state.user);

  const [activeSection, setActiveSection] = useState('where');

  const [frontCardText, setFrontCardText] = useState('');
  const [backCardText, setBackCardText] = useState('');

  const handleOnCreateNewFlashcard = async () => {
    await createNewFlashcard(
      email,
      activeFolder,
      activeSubFolder,
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
              handleNavigationSection={() => handleActiveSection('where')}
            />
          ) : (
            <></>
          )}
          {activeSection === 'how' ? (
            <HowNewCard
              typeOfCard={typeOfFlashcard}
              options={['classic', 'QCM', 'Smartcard', 'Timed']}
              onChange={(e: { target: { value: string } }) =>
                dispatch(setTypeOfFlashcard(e.target.value))
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
              typeOfCard={typeOfFlashcard}
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
