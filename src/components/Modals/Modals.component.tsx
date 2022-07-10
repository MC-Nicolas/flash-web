import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalIsVisible } from '../../redux/newFlashcard/newFlashcard';
import DarkContainer from '../DarkContainer/DarkContainer.component';
import FlexContainer from '../FlexContainer/FlexContainer.component';

interface BasicModalProps {
  children?: any;
}

export const BasicModal = ({ children }: BasicModalProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          zIndex: '80',
          position: 'absolute',
          width: '80vw',
          height: '80vh',
          backdropFilter: 'blur(5px)',
        }}
      ></div>
      <DarkContainer
        height='500px'
        style={{
          zIndex: '100',
          position: 'absolute',
          top: '25%',
          borderRadius: '10px',
          width: '600px',
          boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
        }}
      >
        <FlexContainer
          flexDirection='column'
          width='98%'
          height='98%'
          style={{ backgroundColor: '#222' }}
        >
          <FlexContainer
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
            justifyContent='space-evenly'
            height='100px'
          >
            <span></span>
            <h1 style={{ color: 'white', letterSpacing: '2px' }}>Title</h1>
            <button
              style={{
                border: 'none',
                fontSize: '30px',
                color: 'white',
                backgroundColor: '#222',
                cursor: 'pointer',
              }}
              onClick={() => dispatch(setModalIsVisible(false))}
            >
              x
            </button>
          </FlexContainer>
          <FlexContainer
            flexDirection='column'
            style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          >
            {children}
          </FlexContainer>
        </FlexContainer>
      </DarkContainer>
    </>
  );
};
