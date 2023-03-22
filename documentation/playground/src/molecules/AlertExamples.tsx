import { Alert } from '@acpaas-ui/react-components';

export function AlertExamples() {
  const doNothing = () => {
    return true;
  };
  return (
    <div className="u-margin">
      <h2>Alert</h2>
      <div className="u-margin">
        <div className="u-margin-top">
          <Alert title="Modal alert default" titleId="title1" modal>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert
            title="Modal alert success"
            titleId="title2"
            modal
            theme="success"
            onConfirm={doNothing}
            onCancel={doNothing}
          >
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert
            title="Modal alert warning"
            titleId="title3"
            modal
            theme="warning"
            confirmLabel="Ok"
            cancelLabel="Annuleren"
            onConfirm={doNothing}
            onCancel={doNothing}
          >
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert title="Modal alert danger" titleId="title4" modal theme="danger">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert title="Inline alert" titleId="title5">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
      </div>
    </div>
  );
}

export default AlertExamples;
