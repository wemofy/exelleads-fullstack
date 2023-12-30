import dayjs from 'dayjs';

export function formatTitle(inputString) {
  if (typeof inputString !== 'string' || inputString.length === 0) {
    return inputString;
  }

  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

export const remainingDays = (endDate) => {
  const now = dayjs();
  const end = dayjs(endDate);
  const remainingDays = end.diff(now, 'day');
  return remainingDays >= 0 ? remainingDays : 0;
};
