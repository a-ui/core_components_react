import { isAfter, isBefore, isSameDay, format, Locale } from 'date-fns';

export function isInRange(date: Date, from?: string, to?: string, list?: string[]): boolean {
  return (
    (to && (isBefore(date, new Date(to)) || isSameDay(date, new Date(to)))) ||
    (from && (isAfter(date, new Date(from)) || isSameDay(date, new Date(from)))) ||
    !!list?.find((u) => isSameDay(date, new Date(u)))
  );
}

export function formatIfValid(date: string, dateFormat: string) {
  try {
    return format(new Date(date), dateFormat);
  } catch (_e) {
    return date;
  }
}

export function formatWithFallback(date: Date, dateFormat: string, locale?: Locale, fallback = '') {
  try {
    return format(date, dateFormat, { locale: locale });
  } catch (_e) {
    return fallback;
  }
}
