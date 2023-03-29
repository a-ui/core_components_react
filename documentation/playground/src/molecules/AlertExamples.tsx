import { Alert, Button } from '@a-ui/react';

export function AlertExamples() {
  const doNothing = () => {
    return true;
  };
  return (
    <div className="u-margin">
      <h2>Alert</h2>
      <div className="u-margin">
        <div className="u-margin-top">
          <Alert title={{ label: 'Modal alert default' }} titleId="title1">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert
            title={{ label: 'Modal alert success' }}
            titleId="title2"
            theme="success"
            confirmButton={{
              id: `title2-aui-alert-confirm`,
              size: 'small',
              theme: 'success',
              onClick: doNothing,
              children: 'OK'
            }}
            cancelButton={{
              id: `title2-aui-alert-cancel`,
              size: 'small',
              theme: 'success',
              emphasis: 'medium',
              onClick: doNothing,
              children: 'Annuleren'
            }}
          >
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert
            title={{ label: 'Modal alert warning' }}
            titleId="title3"
            theme="warning"
            confirmButton={{
              id: `title3-aui-alert-confirm`,
              size: 'small',
              theme: 'warning',
              onClick: doNothing,
              children: 'OK'
            }}
            cancelButton={{
              id: `title3-aui-alert-cancel`,
              size: 'small',
              theme: 'warning',
              emphasis: 'medium',
              onClick: doNothing,
              children: 'Annuleren'
            }}
          >
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert title={{ label: 'Modal alert danger' }} titleId="title4" theme="danger">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            <a href="https://www.google.be">justo sit amet risus</a>. Sed posuere consectetur est at lobortis. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Alert>
        </div>
        <div className="u-margin-top">
          <Alert title={{ label: 'Inline alert' }} inline titleId="title5">
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
