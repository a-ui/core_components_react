import { fireEvent, render } from '@testing-library/react';
import jest from 'jest-mock';
import { act } from 'react-dom/test-utils';
import { ButtonProps } from '../../atoms/button';
import { Modal } from './Modal';

describe('UI Components - Molecules - Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Modal appRootId="root">
        <p>test</p>
      </Modal>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should set aria-hidden on the app element when open', () => {
    const fakeAppElement = document.createElement('div');
    jest.spyOn(document, 'getElementById').mockImplementation(() => fakeAppElement);
    render(
      <Modal open appRootId="root">
        <p>test</p>
      </Modal>
    );
    expect(fakeAppElement.getAttribute('aria-hidden')).toBe('true');
  });

  it('should open modal on trigger click', () => {
    const { baseElement, getByText } = render(
      <Modal trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    const trigger = getByText('Open');
    fireEvent.click(trigger);
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
  });

  it('should close modal on close click and invoke onClose', async () => {
    const closeMock = jest.fn();
    const { baseElement, getByText } = render(
      <Modal appRootId="root" trigger={<p>Open</p>} onClose={closeMock}>
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    await act(async () => fireEvent.click(baseElement.getElementsByClassName('m-modal__close')[0]));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
    expect(closeMock).toBeCalledTimes(1);
  });

  it('should close modal on confirm click', async () => {
    const mockConfirm = jest.fn();
    const confirmButton: ButtonProps = {
      id: `aui-modal-confirm`,
      size: 'small',
      onClick: mockConfirm,
      children: 'Bevestigen'
    };
    const { baseElement, getByText } = render(
      <Modal confirmButton={confirmButton} trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Bevestigen')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
    expect(mockConfirm).toBeCalledTimes(1);
  });

  it('should close modal on cancel click', async () => {
    const mockCancel = jest.fn();
    const cancelButton: ButtonProps = {
      id: `aui-modal-cancel`,
      size: 'small',
      emphasis: 'medium',
      onClick: mockCancel,
      children: 'Annuleren'
    };
    const { baseElement, getByText } = render(
      <Modal cancelButton={cancelButton} trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Annuleren')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(0);
    expect(mockCancel).toBeCalledTimes(1);
  });

  it('should not show the footer/header', () => {
    const { baseElement } = render(
      <Modal closeButton={false} open appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    expect(baseElement.getElementsByClassName('m-modal__footer').length).toBe(0);
    expect(baseElement.getElementsByClassName('m-modal__header').length).toBe(0);
  });

  it('should show title', () => {
    const { getByText } = render(
      <Modal appRootId="root" open title={{ label: 'Title' }}>
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    expect(getByText('Title')).toBeTruthy();
  });

  it('should be controlled', async () => {
    const cancelButton: ButtonProps = {
      id: `aui-modal-cancel`,
      size: 'small',
      emphasis: 'medium',
      children: 'Annuleren'
    };
    const { baseElement, getByText } = render(
      <Modal cancelButton={cancelButton} open trigger={<p>Open</p>} appRootId="root">
        <p className="modal-content">Modal content</p>
      </Modal>
    );
    await act(async () => fireEvent.click(getByText('Open')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
    await act(async () => fireEvent.click(getByText('Annuleren')));
    expect(baseElement.getElementsByClassName('modal-content').length).toBe(1);
  });
});
