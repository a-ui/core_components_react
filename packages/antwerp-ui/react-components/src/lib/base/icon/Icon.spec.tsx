/* eslint-disable @typescript-eslint/ban-ts-comment */
import jest from 'jest-mock';
import { __resetIconCache, ensureSvgLoaded, Icon } from './Icon';
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

  it('should return existing svgFetchPromise if already fetching', async () => {
    let resolveFetch!: () => void;
    const fetchMock = jest.fn(
      () =>
        new Promise<{ ok: boolean; text: () => string }>((resolve) => {
          resolveFetch = () => resolve({ ok: true, text: () => '<svg></svg>' });
        })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const promise1 = ensureSvgLoaded();
    const promise2 = ensureSvgLoaded();
    expect(promise1).toBe(promise2);

    resolveFetch();
    await promise1;
  });

  it('should handle fetch failure and reset svgFetchPromise', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({ ok: false, statusText: 'Not Found', text: () => '' })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    await expect(ensureSvgLoaded()).resolves.toBeUndefined();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    await ensureSvgLoaded();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('should set hasError if SVG element is missing after load', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve('<svg></svg>')
      })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const originalAppendChild = document.body.appendChild.bind(document.body);
    jest.spyOn(document.body, 'appendChild').mockImplementation((node) => {
      return node;
    });

    const { baseElement } = render(<Icon name="alarm-bell" />);

    await waitFor(() => {
      expect(baseElement.querySelector('span')).toBeNull();
    });

    document.body.appendChild = originalAppendChild;
  });

  it('should return null and log error when hasError is true', async () => {
    const fetchMock = jest.fn(() => Promise.reject(new Error('Network error')));
    // @ts-ignore
    global.fetch = fetchMock;

    const { baseElement } = render(<Icon name="alarm-bell" />);

    await waitFor(() => {
      expect(baseElement.querySelector('span')).toBeNull();
    });
  });
});
