import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { BasicText } from '../Texts/Texts.component.stories';

import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  addSuggestionToDB,
  getSuggestionsFromDB,
  removeSuggestionFromDB,
} from '../../database/dev';

type Props = {};

const DevModal = (props: Props) => {
  const [suggestion, setSuggestion] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleOnSubmitSuggestion = async () => {
    await addSuggestionToDB(suggestion);
  };
  const getSuggestions = async () => {
    const suggestions = await getSuggestionsFromDB();
    setSuggestions(suggestions);
  };

  useEffect(() => {
    getSuggestions();
  }, []);
  return (
    <FlexContainer
      style={{
        zIndex: 800,
        position: 'absolute',
        top: '25%',
        right: '15%',
        backgroundColor: '#222',
        boxShadow: '0px 0px 10px #000',
      }}
      width='60%'
      height='60%'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <FlexContainer
        style={{ backgroundColor: '#222' }}
        height='80%'
        flexDirection='column'
        justifyContent='space-evenly'
      >
        <h1 style={{ color: 'white ', letterSpacing: '2px' }}>
          Dev Suggestions
        </h1>
        <FlexContainer
          height='200px'
          style={{
            backgroundColor: '#222',
            overflowY: 'scroll',
            padding: '50px 0',
          }}
          justifyContent='space-evenly'
          flexDirection='column'
        >
          {suggestions.map((suggestion, index) => {
            return (
              <FlexContainer key={index} style={{ backgroundColor: '#222' }}>
                <BasicText text={suggestion} fontSize='16px' />
                <Button
                  color='error'
                  onClick={() => {
                    removeSuggestionFromDB(suggestion);
                    setSuggestions(suggestions.filter((s) => s !== suggestion));
                  }}
                >
                  <DeleteIcon />
                </Button>
              </FlexContainer>
            );
          })}
        </FlexContainer>
        <textarea
          placeholder='Your suggestion 🐖 '
          value={suggestion}
          onChange={(e: { target: { value: string } }) =>
            setSuggestion(e.target.value)
          }
          style={{ fontSize: '18px', padding: '5px', width: '80%' }}
        />
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          onClick={() => {
            handleOnSubmitSuggestion();
            const newSuggestions: any = [...suggestions, suggestion];
            setSuggestions(newSuggestions);
            setSuggestion('');
          }}
        >
          <p>Send</p>
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default DevModal;
