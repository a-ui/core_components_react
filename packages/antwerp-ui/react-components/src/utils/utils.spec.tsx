import { classNames, isScrollAtTheEnd } from './dom.utils';
import { renderHTMLLink } from './render.utils';
import { getPosition, getSteps, getValueFromPosition, pagesArray } from './math.utils';
import { invalidIcon } from './file.utils';
import jest from 'jest-mock';

describe('Utils - DOM Utils', () => {
  describe('- classNames', () => {
    it('should return a className string', () => {
      expect(
        classNames({
          main: 5 < 10,
          'is-empty': true,
          test: false
        })
      ).toEqual('main is-empty');
    });
  });
  describe('- isScrollAtTheEnd', () => {
    it('should return true if the element is not scrollable', () => {
      expect(
        isScrollAtTheEnd({
          clientWidth: 20,
          scrollWidth: 20,
          scrollLeft: 0
        } as Element)
      ).toEqual(true);
    });
    it('should return false if the element is not at the end of the scroll', () => {
      expect(
        isScrollAtTheEnd({
          clientWidth: 10,
          scrollWidth: 20,
          scrollLeft: 2
        } as Element)
      ).toEqual(false);
    });
    it('should return true if the element is at the end of the scroll', () => {
      expect(
        isScrollAtTheEnd({
          clientWidth: 20,
          scrollWidth: 30,
          scrollLeft: 10
        } as Element)
      ).toEqual(true);
    });
  });
});

describe('Utils - Render utils', () => {
  describe('- renderLink', () => {
    it('should return an empty string if an empty object is provided', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(renderHTMLLink({})).toEqual('');
    });
    it('should return an empty string if an empty object is provided', () => {
      const link = renderHTMLLink({ label: 'Label', href: '/home' });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props).toEqual({ children: ['Label', null], href: '/home', target: '_self' });
    });

    it('should add an icon', () => {
      const link = renderHTMLLink({ label: 'Label', href: '/home' }, 'arrow-left');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props.children[1].props).toEqual({
        name: 'arrow-left'
      });
    });

    it('should render with onClick', () => {
      const mockOnClick = jest.fn();
      const link = renderHTMLLink({ label: 'Hello', onClick: mockOnClick }, 'arrow-left');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props.onClick).toEqual(expect.any(Function));
    });

    it('should render with onClick, icon and empty label', () => {
      const mockOnClick = jest.fn();
      const link = renderHTMLLink({ label: '', onClick: mockOnClick }, 'arrow-left');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props.onClick).toEqual(expect.any(Function));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props.children[0]).toEqual('');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect((link || {}).props.children[1].props).toEqual({
        name: 'arrow-left'
      });
    });
  });
});

describe('Utils - Math Utils', () => {
  describe('- pagesArray', () => {
    it('should correctly generate an array of pages', () => {
      expect(pagesArray(1, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(2, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(3, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(4, 8)).toEqual([1, 2, 3, 4, 5, 0, 8]);
      expect(pagesArray(5, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(6, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(7, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(8, 8)).toEqual([1, 0, 4, 5, 6, 7, 8]);
      expect(pagesArray(1, 1)).toEqual([1]);
      expect(pagesArray(1, 2)).toEqual([1, 2]);
      expect(pagesArray(1, 3)).toEqual([1, 2, 3]);
      expect(pagesArray(3, 3)).toEqual([1, 2, 3]);
      expect(pagesArray(1, 4)).toEqual([1, 2, 3, 4]);
      expect(pagesArray(1, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(pagesArray(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(pagesArray(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(pagesArray(5, 5)).toEqual([1, 2, 3, 4, 5]);
      expect(pagesArray(5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(pagesArray(5, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(pagesArray(1, 10)).toEqual([1, 2, 3, 4, 5, 0, 10]);
      expect(pagesArray(4, 10)).toEqual([1, 2, 3, 4, 5, 0, 10]);
      expect(pagesArray(5, 10)).toEqual([1, 0, 4, 5, 6, 0, 10]);
      expect(pagesArray(8, 10)).toEqual([1, 0, 6, 7, 8, 9, 10]);
      expect(pagesArray(10, 10)).toEqual([1, 0, 6, 7, 8, 9, 10]);
      expect(pagesArray(7, 11)).toEqual([1, 0, 6, 7, 8, 0, 11]);
    });
  });

  describe('- getPosition', () => {
    it('should correctly calculate the position based on coordinate and direction values', () => {
      expect(getPosition(10, 5)).toEqual(5);
      expect(getPosition(0, 10)).toEqual(-10);
      expect(getPosition(10)).toEqual(10);
    });
  });

  describe('- getValueFromPosition', () => {
    it('should correctly calculate the value based on position, limit, step, max and min values', () => {
      expect(getValueFromPosition(12, 480, 1, 0, 20, 0, 20)).toEqual(1);
      expect(getValueFromPosition(0, 480, 1, 0, 20, 0, 20)).toEqual(0);
      expect(getValueFromPosition(0, 240, 1, 0, 20, 0, 20)).toEqual(0);
      expect(getValueFromPosition(20, 480, 1, 5, 20, 5, 20)).toEqual(6);
      expect(getValueFromPosition(10, 480, 1, 19, 20, 19, 20)).toEqual(19);
      expect(getValueFromPosition(10, 20, 1, 0, 20, 0, 20)).toEqual(10);
      expect(getValueFromPosition(1000, 480, 1, 0, 8, 0, 8)).toEqual(8);
      expect(getValueFromPosition(10, 0, 1, 0, 8, 0, 8)).toEqual(0);
    });
  });

  describe('- getSteps', () => {
    it('should correctly return steps between min and max', () => {
      expect(getSteps(1, 3, 1)).toEqual([1, 2, 3]);
      expect(getSteps(1, 3, 2)).toEqual([1, 3]);
      expect(getSteps(1, 5, -2)).toEqual([5]);
    });
  });
});

describe('Utils - File Utils', () => {
  describe('- invalidIcon', () => {
    function MockSVGGraphicsElement() {
      return true;
    }

    Object.defineProperty(MockSVGGraphicsElement.prototype, 'getBBox', {
      value: jest.fn(() => ({ width: 0, height: 0 }))
    });
    it('returns true if an icon is invalid', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const icon = new (MockSVGGraphicsElement as any)();
      expect(invalidIcon(icon)).toEqual(true);
    });
  });
});
