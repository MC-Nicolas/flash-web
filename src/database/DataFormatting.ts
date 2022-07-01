// remove special characters from string
export const removeSpecialCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};
