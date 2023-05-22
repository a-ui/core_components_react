import { isAfter, isBefore, isSameDay } from 'date-fns';
import * as locales from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { DEFAULT_LOCALE } from '../constants/settings';

export function isInRange(date: Date, from?: string, to?: string, list?: string[]): boolean {
  return (
    (to && (isBefore(date, new Date(to)) || isSameDay(date, new Date(to)))) ||
    (from && (isAfter(date, new Date(from)) || isSameDay(date, new Date(from)))) ||
    !!list?.find((u) => isSameDay(date, new Date(u)))
  );
}

export function useLocale(locale: string = DEFAULT_LOCALE) {
  type localeType = keyof typeof locales;

  const [localeState, setLocaleState] = useState({
    locale: locales[locale.replace('-', '') as localeType] || locales[DEFAULT_LOCALE]
  });

  useEffect(() => {
    setLocaleState({ locale: locales[locale.replace('-', '') as localeType] || locales[DEFAULT_LOCALE] });
  }, [locale]);

  return localeState;
}
