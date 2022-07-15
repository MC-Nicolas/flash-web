import { formatDateToDDMMYYYY } from '../database/DataFormatting';
import { randomNum } from './smartcard';

export interface ImportantFolderType {
  successPercentages: { date: string; totalAnswers: number; success: number }[];
  title: string;
}

export const extractTodayFromImportantFolderSuccessPercentages = (
  folder: ImportantFolderType
) => {
  const today = formatDateToDDMMYYYY(new Date());
  let res: any;

  if (folder.successPercentages) {
    const results = folder.successPercentages.find((successPercentage) => {
      if (successPercentage.date === today) {
        res = successPercentage.totalAnswers;
        return res;
      }
    });
    if (!results) {
      res = 0;
    }
  }

  return res;
};

export const formatPercentage = (percentageObj: {
  totalAnswers: number;
  date: string;
  success: number;
}) => {
  const { totalAnswers, date, success } = percentageObj;

  if (success && totalAnswers) {
    return Math.floor((success / totalAnswers) * 100);
  } else return 0;
};

interface VariableType {
  type: string;
  typeOfVariable: string;
  value: string | { min: string; max: string };
  name: string;
}

export const formatVariables = (variables: VariableType[]): VariableType[] => {
  const formattedVariables: any[] = [];
  variables.forEach((variable) => {
    if (typeof variable.value === 'string') {
      formattedVariables.push(variable);
    } else {
      const { min, max } = variable.value;
      formattedVariables.push({
        ...variable,
        value: randomNum(parseFloat(min), parseFloat(max)),
      });
    }
  });
  return formattedVariables;
};

export const returnNumberFromInitialRangeToTargerRange = (
  number: number,
  initialRange: [number, number],
  targetRange: [number, number]
) => {
  const [initialMin, initialMax] = initialRange;
  const [targetMin, targetMax] = targetRange;

  const initialRangeSize = initialMax - initialMin;
  const targetRangeSize = targetMax - targetMin;

  const percentage = (number - initialMin) / initialRangeSize;

  return targetMin + targetRangeSize * percentage;
};
