export interface VariableType {
  type: 'variable' | 'text';
  typeOfVariable: string;
  name: string;
  value: string;
  symbol: string;
}

export interface initialStateType {
  variables: VariableType[] | [];
  typeOfVariables: string[];
  typeOfAdd: string;
  modalIsVisible: boolean;
  operations: {}[];
}
