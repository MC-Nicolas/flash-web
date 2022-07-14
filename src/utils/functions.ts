export const capitalizeFirstLetter = (str: string | undefined) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const calculatePercentage = (num: number, total: number) => {
  if (num > total) return 100;
  return (num / total) * 100;
};

export const checkIsSuccessOnQCMAnswers = (
  QCMAnswers: { text: string; isCorrect: boolean }[],
  QCMSolutions: { text: string; isCorrect: boolean }[]
) => {
  if (QCMAnswers.length !== QCMSolutions.length) return false;
  for (let i = 0; i < QCMAnswers.length; i++) {
    if (
      QCMAnswers[i].text !== QCMSolutions[i].text ||
      QCMAnswers[i].isCorrect !== QCMSolutions[i].isCorrect
    ) {
      return false;
    }
  }
  return true;
};
