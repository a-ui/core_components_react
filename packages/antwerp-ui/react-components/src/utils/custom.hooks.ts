/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { isScrollAtTheEnd } from './dom.utils';

export function useHorizontalScroll(): [React.RefObject<any>, React.UIEventHandler, boolean, boolean] {
  const [isScrollStart, setIsScrollStart] = React.useState(true);
  const [isScrollEnd, setIsScrollEnd] = React.useState(true);
  const scrollDivRef = React.useRef(null);

  const setScrollPoints = (target: Element) => {
    setIsScrollStart(target.scrollLeft <= 0);
    setIsScrollEnd(isScrollAtTheEnd(target));
  };

  React.useEffect(() => {
    const target = scrollDivRef.current;
    if (target) {
      setScrollPoints(target);
    }
  }, [scrollDivRef]);

  React.useEffect(() => {
    function handleResize() {
      scrollDivRef.current && setScrollPoints(scrollDivRef.current);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e: React.UIEvent<Element>) => {
    const target = e.target as Element;
    setScrollPoints(target);
  };

  return [scrollDivRef, handleScroll, isScrollStart, isScrollEnd];
}

export function useOutsideClick(onOutsideClick: (event: EventTarget | null) => void) {
  const elementRef: React.RefObject<any> = React.useRef(null);

  const handleClick = (event: MouseEvent) => {
    if (!elementRef?.current?.contains(event?.target)) {
      onOutsideClick(event?.target);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  return { elementRef };
}
