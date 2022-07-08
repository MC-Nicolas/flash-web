export const mathOperators = ['+', '-', '*', '/'];

export const randomNum = (low: number, high: number) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

export const handleCalculation: any = {
  '+': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) + parseInt(secondOperand),
  '-': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) - parseInt(secondOperand),
  '*': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) * parseInt(secondOperand),
  '/': (firstOperand: string, secondOperand: string) =>
    parseInt(firstOperand) / parseInt(secondOperand),
};
