import { formatDateToDDMMYYYY } from '../database/DataFormatting';

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

  // console.log(percentageObj);

  if (success && totalAnswers) {
    return Math.floor((success / totalAnswers) * 100);
  } else return 0;
};
