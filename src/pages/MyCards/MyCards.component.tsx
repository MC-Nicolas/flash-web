import React, { useEffect, useState } from 'react';
import ContextMenu from '../../components/ContextMenu/ContextMenu.component';

import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../../components/Inputs/Inputs.component';
import PreviewCard from '../../components/PreviewCard/PreviewCard.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';

import {
  extractFlashcards,
  extractFolders,
  extractSubFolders,
  removeFlashcardFromDB,
} from '../../database/foldersData';
import {
  removeFlashcard,
  setActiveFolder,
  setActiveSubFolder,
  setSubFoldersOptions,
} from '../../redux/foldersFlashcards/foldersFlashcards';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';

type Props = {};

const MyCards = (props: Props) => {
  const dispatch = useAppDispatch();

  const {
    folders,
    activeFolder,
    activeSubFolder,
    subFoldersOptions,
    foldersOptions,
    flashcards,
  } = useAppSelector((state) => state.folders);

  const { email } = useAppSelector((state) => state.user);

  const handleOnEditFlashcard = (index: number) => {};
  const handleOnDeleteFlashcard = async (index: number) => {
    const cardNumber = index + 1;
    dispatch(removeFlashcard(cardNumber));
    await removeFlashcardFromDB(
      email,
      activeFolder,
      activeSubFolder,
      cardNumber
    );
  };

  return (
    <FlexContainer>
      <Sidebar />
      <FlexContainer flexDirection='column'>
        <FlexContainer height='100px' width='100%' justifyContent='center'>
          <h1 style={{ color: 'white', letterSpacing: '2px' }}>My cards</h1>
        </FlexContainer>
        <DarkContainer
          minHeight='500px'
          height='70%'
          innerStyle={{
            overflowY: 'auto',
            padding: '20px 0',
          }}
        >
          <FlexContainer
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            height='100px'
            justifyContent='space-evenly'
          >
            <NeumorphicSelect
              style={{ backgroundColor: 'rgba(0,0,0,0)' }}
              value={activeFolder}
              label='Folder'
              options={foldersOptions}
              onChange={(e: { target: { value: string } }) =>
                dispatch(setActiveFolder(e.target.value))
              }
            />
            <NeumorphicSelect
              style={{ backgroundColor: 'rgba(0,0,0,0)' }}
              value={activeSubFolder}
              label='Deck'
              options={subFoldersOptions}
              onChange={(e: { target: { value: string } }) =>
                dispatch(setActiveSubFolder(e.target.value))
              }
            />
          </FlexContainer>
          <FlexContainer
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
              flexWrap: 'wrap',
            }}
            height='80%'
            justifyContent='space-evenly'
          >
            {flashcards.map(
              (flashcard: { front: string; back: string }, index: number) => (
                <ContextMenu
                  onEditFlashcard={() => handleOnEditFlashcard(index)}
                  onDeleteFlashcard={() => handleOnDeleteFlashcard(index)}
                  key={flashcard.front + flashcard.back}
                  clickableElement={
                    <PreviewCard
                      cardFrontText={flashcard.front}
                      cardBackText={flashcard.back}
                    />
                  }
                />
              )
            )}
          </FlexContainer>
        </DarkContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default MyCards;
