import React, { useState } from 'react';
import FlexContainer from '../FlexContainer/FlexContainer.component';

type ContextMenuProps = {
  clickableElement: JSX.Element;
};

const ContextMenu = ({ clickableElement }: ContextMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <FlexContainer
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        margin: '20px 0',
        position: 'relative',
      }}
      height='300px'
      width='400px'
    >
      <div
        style={{ margin: '0 20px', cursor: 'pointer' }}
        onClick={() => setIsVisible(!isVisible)}
      >
        {clickableElement}
      </div>
      {isVisible && (
        <FlexContainer
          width='150px'
          height='150px'
          flexDirection='column'
          justifyContent='space-evenly'
          alignItems='center'
          style={{
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)',
            boxShadow:
              'inset 5px 3px 10px 0px rgba(0, 0, 0, 0.5), -3px -3px 6px 0px rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            position: 'absolute',
            top: '0',
            left: '90%',
          }}
        >
          <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
            <p>Edit</p>
          </FlexContainer>
          <FlexContainer style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
            <p>Delete</p>
          </FlexContainer>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default ContextMenu;
