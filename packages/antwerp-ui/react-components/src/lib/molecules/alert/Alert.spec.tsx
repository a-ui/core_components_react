import { Alert } from './Alert';
import jest from 'jest-mock';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonProps } from '../../atoms/button';

describe.only('UI Components - Molecules - Alert', () => {
  const titleId = 'aui-alert-title';
  const title = { label: 'Modal alert default' };
  const confirmButton: ButtonProps = {
    id: `title2-aui-alert-confirm`,
    size: 'small',
    theme: 'success',
    children: 'OK'
  };
  const cancelButton: ButtonProps = {
    id: `title2-aui-alert-cancel`,
    size: 'small',
    theme: 'success',
    emphasis: 'medium',
    children: 'Annuleren'
  };
  it('should render successfully', () => {
    const { baseElement } = render(<Alert titleId={titleId} />);
    expect(baseElement).toBeTruthy();
  });

  it.only('should render a default modal alert with buttons', () => {
    const { baseElement } = render(
      <Alert
        title={title}
        titleId={titleId}
        ariaLabelClose="close icon"
        confirmButton={confirmButton}
        cancelButton={cancelButton}
      >
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__close')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__actions')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__actions')[0].children[0].tagName).toEqual('BUTTON');
    expect(baseElement.getElementsByClassName('m-alert__actions')[0].children[1].tagName).toEqual('BUTTON');
  });

  it('should trigger onClose when modal is closed', () => {
    const onClose = jest.fn();
    const { baseElement } = render(
      <Alert titleId={titleId} title={title} ariaLabelClose="close icon" onClose={onClose}>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    const closeButton = baseElement.getElementsByClassName('m-alert__close')[0];
    fireEvent.click(closeButton);
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__close')[0]).toBeTruthy();
    expect(onClose).toHaveBeenCalled();
  });

  it('should render a success modal', () => {
    const { baseElement } = render(
      <Alert titleId={titleId} title={title} theme="success" ariaLabelClose="close icon">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alertdialog')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert__close')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert--success')[0]).toBeTruthy();
  });

  it('should render an inline modal with correct title if inline property is true ', () => {
    render(
      <Alert titleId={titleId} title={title} inline>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('Modal alert default')).toBeTruthy();
  });

  it('should render a warning inline modal with correct title ', () => {
    const { baseElement } = render(
      <Alert titleId={titleId} title={title} inline theme="warning">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa{' '}
        <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Alert>
    );
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('Modal alert default')).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-alert--warning')[0]).toBeTruthy();
  });

  it('should change headerTag based on title prop', () => {
    const { baseElement, rerender } = render(<Alert titleId={titleId} title={{ label: 'Alert', tag: 'h1' }} />);
    expect(baseElement.querySelector('h5')).toBeFalsy();
    expect(baseElement.querySelector('h1')).toBeTruthy();
    rerender(<Alert titleId={titleId} title={{ label: 'Alert', tag: 'h3' }} inline />);
    expect(baseElement.querySelector('h5')).toBeFalsy();
    expect(baseElement.querySelector('h1')).toBeFalsy();
    expect(baseElement.querySelector('h3')).toBeTruthy();
  });
});
