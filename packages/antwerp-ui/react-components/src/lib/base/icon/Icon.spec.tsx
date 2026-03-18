/* eslint-disable @typescript-eslint/ban-ts-comment */
import jest from 'jest-mock';
import { __resetIconCache, Icon } from './Icon';
import { render, screen, waitFor } from '@testing-library/react';
import { JSDOM } from 'jsdom';

describe('UI Components - Base - Icon', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    __resetIconCache();
    document.body.innerHTML = '';
    global.fetch = originalFetch;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement.querySelector('use[href="#ai-alarm-bell"]')).toBeTruthy();
  });

  it('should render without name', () => {
    const { baseElement } = render(<Icon name="" />);
    expect(baseElement).toBeTruthy();
  });

  it('should apply the icon-name to the icon class', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement.querySelector('use[href="#ai-alarm-bell"]')).toBeTruthy();
  });

  it('should render an svg icon', async () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);

    await waitFor(() => {
      expect(baseElement.querySelector('use[href="#ai-alarm-bell"]')).toBeTruthy()
    });
  });

  it('should be able to use the long name as well', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve('<svg><symbol id="ai-alarm-bell"></symbol></svg>')
      })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const { baseElement } = render(<Icon name="ai-alarm-bell" />);
    expect(baseElement.getElementsByClassName('ai-alarm-bell').length).toBe(1);
    await waitFor(() => {
      expect(baseElement.querySelector('use[href="#ai-alarm-bell"]')).toBeTruthy();
    });
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<Icon name="ai-alarm-bell" qa="id-1234" />);
    expect(baseElement.querySelector('span')?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should render with given descriptive text', () => {
    render(<Icon name="alarm-bell" screenReaderText="Click here" />);
    expect(screen.getByText('Click here'));
  });

  it('should fetch the icons', async () => {
    const dom = new JSDOM();
    const fetchMock = jest.fn(() =>
      Promise.resolve({ text: () => 'fake-fetch', ok: true })
    );

    global.document = dom.window.document;
    // @ts-ignore
    global.fetch = fetchMock;

    render(<Icon name="alarm-bell" screenReaderText="Click here" />);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });

  /* Test seems outdated, TODO: ASK NT about this test
  it('should return the svg, even if fetch is not defined', async () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    // @ts-ignore
    global.fetch = null;
    const { baseElement } = render(<Icon name="alarm-bell" screenReaderText="Click here" />);
    await waitFor(() => {
      expect(baseElement.querySelector('svg')).toBeFalsy();
    });
  });
  */
});
