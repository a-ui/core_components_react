/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, waitFor } from '@testing-library/react';
import jest from 'jest-mock';

import { Upload } from './Upload';

describe('UI Components - Molecules - Upload', () => {
  const mockFile = new File(['(⌐□_□)'], 'glasses.png', { type: 'image/png' });
  const mockFileTwo = new File(['(⌐□_□)'], 'glasses2.png', { type: 'image/png' });
  const mockFileCSV = new File(['(⌐□_□)'], 'glasses2.csv', { type: 'text/csv' });

  it('should render successfully', () => {
    const { baseElement } = render(<Upload id="test-upload" onChange={() => {}} />);
    expect(baseElement).toBeTruthy();
  });

  it('should handle multiple upload change', async () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(<Upload id="test-upload" onChange={onChangeMock} files={[mockFile]} />);
    await waitFor(() => {
      fireEvent.change(baseElement.getElementsByTagName('input')[0], { target: { files: [mockFile, mockFileTwo] } });
    });
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock).toBeCalledWith(
      [mockFile, mockFileTwo],
      [
        { validFormat: true, validSize: true },
        { validFormat: true, validSize: true }
      ]
    );
  });

  it('should handle multiple upload change with DOM issues', async () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(<Upload id="test-upload" multiple onChange={onChangeMock} files={[]} />);
    await waitFor(() => {
      fireEvent.change(baseElement.getElementsByTagName('input')[0], {});
      fireEvent.change(baseElement.getElementsByTagName('input')[0], { target: {} });
      fireEvent.change(baseElement.getElementsByTagName('input')[0], { target: { files: false } });
    });
    expect(onChangeMock).toBeCalledTimes(3);
    expect(onChangeMock).toBeCalledWith([], []);
  });

  it('should handle single upload change', async () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(<Upload id="test-upload" onChange={onChangeMock} multiple={false} files={[]} />);
    await waitFor(() => {
      fireEvent.change(baseElement.getElementsByTagName('input')[0], { target: { files: [mockFile, mockFileTwo] } });
    });
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock).toBeCalledWith([mockFile], [{ validFormat: true, validSize: true }]);
  });

  it('should handle single upload change with DOM issues', async () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(<Upload id="test-upload" onChange={onChangeMock} multiple={false} files={[]} />);
    await waitFor(() => {
      fireEvent.change(baseElement.getElementsByTagName('input')[0], {});
      fireEvent.change(baseElement.getElementsByTagName('input')[0], { target: {} });
      fireEvent.change(baseElement.getElementsByTagName('input')[0], { target: { files: false } });
    });
    expect(onChangeMock).toBeCalledTimes(3);
  });

  it('should check if uploaded files have valid format', () => {
    const onChangeMock = jest.fn();
    const { rerender, baseElement, getByText } = render(
      <Upload id="test-upload" onChange={onChangeMock} onDelete={() => {}} files={[mockFile, mockFileCSV]} />
    );
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(0);
    expect(baseElement.getElementsByClassName('a-button--danger').length).toBe(0);
    rerender(
      <Upload id="test-upload" onChange={onChangeMock} onDelete={() => {}} acceptedFormat="image/png" files={[mockFile, mockFileCSV]} />
    );
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(1);
    expect(getByText('Dit bestandsformaat is niet toegestaan.')).toBeTruthy();
    rerender(
      <Upload id="test-upload" onChange={onChangeMock} onDelete={() => {}} acceptedFormat="image/*" files={[mockFile, mockFileCSV]} />
    );
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(1);
    expect(baseElement.getElementsByClassName('a-button--danger').length).toBe(1);
    expect(getByText('Dit bestandsformaat is niet toegestaan.')).toBeTruthy();
    rerender(<Upload id="test-upload" onChange={onChangeMock} onDelete={() => {}} acceptedFormat="image/*" files={[mockFile]} />);
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(0);
  });

  it('should check if uploaded files have several valid formats', () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(
      <Upload
        id="test-upload"
        acceptedFormat="image/png,.csv"
        onChange={onChangeMock}
        files={[mockFile, mockFileCSV]}
      />
    );
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(0);
  });

  it('should flag all files if acceptedFormat is empty', () => {
    const onChangeMock = jest.fn();
    const { baseElement } = render(
      <Upload id="test-upload" acceptedFormat="''" onChange={onChangeMock} files={[mockFile, mockFileCSV]} />
    );
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(2);
  });

  it('should check if uploaded files have valid size', () => {
    const onChangeMock = jest.fn();
    const { rerender, baseElement } = render(
      <Upload id="test-upload" onChange={onChangeMock} files={[mockFile, mockFileCSV]} />
    );
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(0);
    rerender(<Upload id="test-upload" onChange={onChangeMock} maxSize={-1} files={[mockFile, mockFileCSV]} />);
    expect(baseElement.getElementsByClassName('m-upload__error').length).toBe(2);
  });

  it('should render delete buttons if on delete is provided', () => {
    const { baseElement, rerender } = render(<Upload id="test-upload" onChange={() => {}} files={[mockFile]} />);
    expect(baseElement.getElementsByClassName('m-upload__delete').length).toBe(0);
    rerender(<Upload id="test-upload" onChange={() => {}} onDelete={() => {}} files={[mockFile]} />);
    expect(baseElement.getElementsByClassName('m-upload__delete').length).toBe(1);
  });

  it('should handle delete correctly', async () => {
    const onDeleteMock = jest.fn();
    const { baseElement } = render(
      <Upload id="test-upload" onChange={() => {}} files={[mockFile, mockFileCSV]} onDelete={onDeleteMock} />
    );
    await waitFor(() => {
      const delBtn = baseElement.getElementsByClassName('m-upload__delete')[0].firstChild;
      if (delBtn) {
        fireEvent.click(delBtn);
      }
    });
    expect(onDeleteMock).toBeCalledTimes(1);
    expect(onDeleteMock).toBeCalledWith([mockFileCSV]);
  });
});
