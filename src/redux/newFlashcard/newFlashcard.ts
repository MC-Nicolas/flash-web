import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { initialStateType } from './newFlashcard.types';

const initialState: initialStateType = {
  variables: [
    {
      type: 'variable',
      typeOfVariable: 'number',
      name: 'a',
      value: '10',
      symbol: '',
    },
    {
      type: 'variable',
      typeOfVariable: 'number',
      name: 'b',
      value: '20',
      symbol: '',
    },
  ],
  typeOfVariables: ['number', 'random number'],
  typeOfAdd: 'variable',
  modalIsVisible: false,
  operations: [],
};

export const newFlashcard = createSlice({
  name: 'newFlashcard',
  initialState,
  reducers: {
    setModalIsVisible: (state, action) => {
      state.modalIsVisible = action.payload;
    },
    setTypeOfAdd: (state, action) => {
      state.typeOfAdd = action.payload;
    },
    addNewVariable: (state, action) => {
      const varExists = state.variables.find(
        (variable) => variable.name === action.payload.name
      );
      if (varExists) {
        const indexOfVar = state.variables.findIndex(
          (variable) => variable.name === action.payload.name
        );
        state.variables[indexOfVar] = action.payload;
      } else {
        state.variables = [...state.variables, action.payload];
      }
    },
    removeVariable: (state, action) => {
      state.variables = state.variables.filter(
        (variable) => variable.name !== action.payload
      );
    },
    addNewOperation: (state, action) => {
      state.operations = [...state.operations, action.payload];
    },
    changeOperation: (state, action) => {
      if (state.operations.length === 0) {
        state.operations = [action.payload.operation];
      } else {
        state.operations[action.payload.index] = action.payload.operation;
      }
    },
    removeOperation: (state, action) => {
      state.operations = state.operations.filter((operation, i) => {
        return i !== action.payload;
      });
    },
  },
});

export const selectVariables = (state: RootState) =>
  state.newFlashcard.variables;
export const selectTypeOfAdd = (state: RootState) =>
  state.newFlashcard.typeOfAdd;
export const selectModalIsVisible = (state: RootState) =>
  state.newFlashcard.modalIsVisible;
export const selectVariablesByVar = (state: RootState) =>
  state.newFlashcard.variables.filter(
    (variable) => variable.type === 'variable'
  );

export const {
  addNewVariable,
  removeVariable,
  setTypeOfAdd,
  setModalIsVisible,
  addNewOperation,
  changeOperation,
  removeOperation,
} = newFlashcard.actions;

export default newFlashcard.reducer;
