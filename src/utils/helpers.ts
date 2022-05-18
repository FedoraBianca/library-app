import moment from 'moment';

export const objectDeepCopy = (object: any): any => JSON.parse(JSON.stringify(object));

export const calculatePenalty = (dueDate: string, price: number): number => {
  const delayDays = moment.utc().diff(moment.utc(dueDate), 'days');
  return delayDays > 0 ? +Number((price / 100) * delayDays).toFixed(2) : 0;
}