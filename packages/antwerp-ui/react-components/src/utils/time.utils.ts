import { isAfter, isBefore, isSameDay } from 'date-fns';

export function isInRange(date: Date, from?: string, to?: string, list?: string[]): boolean {
  return (
    (to && (isBefore(date, new Date(to)) || isSameDay(date, new Date(to)))) ||
    (from && (isAfter(date, new Date(from)) || isSameDay(date, new Date(from)))) ||
    !!list?.find((u) => isSameDay(date, new Date(u)))
  );
}
