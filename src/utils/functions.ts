export const capitalizeFirstLetter = (str: string | undefined) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const calculatePercentage = (num: number, total: number) => {
  if (num > total) return 100;
  return (num / total) * 100;
};
