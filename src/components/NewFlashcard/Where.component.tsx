import React from 'react';
import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';

type WhereProps = {
  folderToAddTo: string;
  setFolderToAddTo: any;
  deck: string;
  setDeckToAddTo: any;
};

const Where = ({
  folderToAddTo,
  setFolderToAddTo,
  deck,
  setDeckToAddTo,
}: WhereProps) => {
  return (
    <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
      <NeumorphicSelect
        style={{ backgroundColor: 'rgba(0,0,0,0)' }}
        value={folderToAddTo}
        label='Folder'
        onChange={(e: { target: { value: string } }) =>
          setFolderToAddTo(e.target.value)
        }
      />

      <NeumorphicSelect
        style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '400px' }}
        value={deck}
        label='Deck'
        onChange={(e: { target: { value: string } }) =>
          setDeckToAddTo(e.target.value)
        }
      />
    </FlexContainer>
  );
};

export default Where;
