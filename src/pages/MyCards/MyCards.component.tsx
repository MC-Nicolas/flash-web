import React, { useEffect, useState } from 'react';

import DarkContainer from '../../components/DarkContainer/DarkContainer.component';
import FlexContainer from '../../components/FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../../components/Inputs/Inputs.component';
import PreviewCard from '../../components/PreviewCard/PreviewCard.component';
import Sidebar from '../../components/Sidebar/Sidebar.component';

import {
  extractFlashcards,
  extractFolders,
  extractSubFolders,
} from '../../database/foldersData';
import { useAppSelector } from '../../redux/redux.hooks';

type Props = {};

const MyCards = (props: Props) => {
  const { folders } = useAppSelector((state) => state.folders);
  const [folder, setFolder] = useState<string>(
    folders && extractFolders(folders)[0]
  );
  const [subFolder, setSubFolder] = useState<string>(
    folders && extractSubFolders(folders, folder)[0]
  );

  const [flashcards, setFlashcards] = useState<any>([]);

  useEffect(() => {
    if (folders) {
      setFlashcards(extractFlashcards(folders, folder, subFolder));
    }
  }, [folder, subFolder]);

  useEffect(() => {
    if (folders) {
      setFolder(extractFolders(folders)[0]);
      setSubFolder(extractSubFolders(folders, folder)[0]);
    }
  }, [folders]);

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
              value={folder}
              label='Folder'
              options={folders && extractFolders(folders)}
              onChange={(e: { target: { value: string } }) =>
                setFolder(e.target.value)
              }
            />
            <NeumorphicSelect
              style={{ backgroundColor: 'rgba(0,0,0,0)' }}
              value={subFolder}
              label='Deck'
              options={folders && extractSubFolders(folders, folder)}
              onChange={(e: { target: { value: string } }) =>
                setSubFolder(e.target.value)
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
            {flashcards.map((flashcard: { front: string; back: string }) => (
              <PreviewCard
                key={flashcard.front + flashcard.back}
                cardFrontText={flashcard.front}
                cardBackText={flashcard.back}
              />
            ))}
          </FlexContainer>
        </DarkContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default MyCards;
