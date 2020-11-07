export const getSimplifiedDate = (date: Date, separator: string): string => {
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  if (day.length === 1) day = '0' + day;
  if (month.length === 1) month = '0' + month;
  const simplifiedDate =
    day + separator + month + separator + date.getFullYear();

  return simplifiedDate;
};

export const areDateEqual = (firstDate: Date, secondDate: Date): boolean => {
  const firstDay = firstDate.getDate();
  const firstMonth = firstDate.getMonth() + 1;
  const firstYear = firstDate.getFullYear();
  const secondDay = secondDate.getDate();
  const secondMonth = secondDate.getMonth() + 1;
  const secondYear = secondDate.getFullYear();

  return (
    firstDay === secondDay &&
    firstMonth === secondMonth &&
    firstYear === secondYear
  );
};
