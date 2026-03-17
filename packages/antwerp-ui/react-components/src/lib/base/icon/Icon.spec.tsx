/* eslint-disable @typescript-eslint/ban-ts-comment */
import jest from 'jest-mock';
import { __resetIconCache, ensureSvgLoaded, Icon } from './Icon';
import { render, screen, waitFor } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import * as logUtils from '../../../utils/log.utils';

describe('UI Components - Base - Icon', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    __resetIconCache();
    document.body.innerHTML = '';
    global.fetch = originalFetch;
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without name', () => {
    const { baseElement } = render(<Icon name="" />);
    expect(baseElement).toBeTruthy();
  });

  it('should apply the icon-name to the icon class', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement.getElementsByClassName('ai-alarm-bell').length).toBe(1);
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

  it('should apply custom className', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve('<svg><symbol id="ai-alarm-bell"></symbol></svg>')
      })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const { baseElement } = render(<Icon name="alarm-bell" className="my-custom-class" />);
    await waitFor(() => {
      expect(baseElement.querySelector('use[href="#ai-alarm-bell"]')).toBeTruthy();
    });
    expect(baseElement.querySelector('span')?.classList.contains('my-custom-class')).toBe(true);
  });

  it('should apply thin class when thin prop is true', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve('<svg><symbol id="ai-alarm-bell"></symbol></svg>')
      })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const { baseElement } = render(<Icon name="alarm-bell" thin />);
    await waitFor(() => {
      expect(baseElement.querySelector('use[href="#ai-alarm-bell"]')).toBeTruthy();
    });
    expect(baseElement.querySelector('span')?.classList.contains('ai--thin')).toBe(true);
  });

  it('ensureSvgLoaded: logs error and resets cache when fetch rejects', async () => {
    const logErrorSpy = jest.spyOn(logUtils, 'logError').mockImplementation(() => { });
    const fetchReject = jest.fn(() => Promise.reject(new Error('network error')));
    global.fetch = fetchReject;

    const promise = ensureSvgLoaded();
    await promise.catch(() => { });

    expect(logErrorSpy).toHaveBeenCalled();
    logErrorSpy.mockRestore();
  });

  it('ensureSvgLoaded: returns same promise when called concurrently', async () => {
    const fetchMock = jest.fn(
      () =>
        new Promise<{ ok: boolean; text: () => Promise<string> }>((resolve) =>
          setTimeout(
            () => resolve({ ok: true, text: () => Promise.resolve('<svg></svg>') }),
            50
          )
        )
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const p1 = ensureSvgLoaded();
    const p2 = ensureSvgLoaded();

    expect(p2).toBe(p1);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('should render null and log error when SVG fails to load', async () => {
    const logErrorSpy = jest.spyOn(logUtils, 'logError').mockImplementation(() => { });
    const fetchReject = jest.fn(() => Promise.reject(new Error('load failed')));
    global.fetch = fetchReject;

    const { container } = render(<Icon name="alarm-bell" />);

    await waitFor(() => {
      expect(logErrorSpy).toHaveBeenCalledWith('Failed to load icon "alarm-bell".');
    });

    expect(container.querySelector('svg')).toBeNull();
    logErrorSpy.mockRestore();
  });

  it('should log warning and hide svg when icon name does not exist in sprite', async () => {
    const logWarningSpy = jest.spyOn(logUtils, 'logWarning').mockImplementation(() => { });
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve('<svg><symbol id="ai-other-icon"></symbol></svg>')
      })
    );
    // @ts-ignore
    global.fetch = fetchMock;

    const { baseElement } = render(<Icon name="non-existent-icon" />);

    await waitFor(() => {
      expect(logWarningSpy).toHaveBeenCalledWith(
        expect.stringContaining('"non-existent-icon"')
      );
    });
    logWarningSpy.mockRestore();

    await waitFor(() => {
      expect(baseElement.querySelector('use[href="#ai-non-existent-icon"]')).toBeFalsy();
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
