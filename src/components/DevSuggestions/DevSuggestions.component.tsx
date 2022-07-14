import React from 'react';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

type Props = {
  setDevModalIsActive: any;
};

const DevSuggestions = ({ setDevModalIsActive }: Props) => {
  return (
    <FlexContainer
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      flexDirection='column'
      width='100px'
      height='100px'
    >
      <button
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={setDevModalIsActive}
      >
        <IntegrationInstructionsIcon fontSize='large' color='info' />
      </button>
    </FlexContainer>
  );
};

export default DevSuggestions;
