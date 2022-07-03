// remove special characters from string
export const removeSpecialCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};
export const formatDateToDDMMYYYY = (date: Date) => {
  return `${addLeading0(date.getDate())}/${addLeading0(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
};

export const addLeading0 = (num: number) => {
  const stringNum = num.toString();
  return `0${stringNum.slice(-2)}`;
};
