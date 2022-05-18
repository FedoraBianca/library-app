import moment from 'moment';

export const objectDeepCopy = (object: any): any => JSON.parse(JSON.stringify(object));

export const calculatePenalty = (dueDate: string, price: number): string => {
  const delayDays = moment.utc().diff(moment.utc(dueDate), 'days');
  const penalty = delayDays > 0 ? Number((price / 100) * delayDays).toFixed(2) : 0;

  return `${penalty} $`;
}