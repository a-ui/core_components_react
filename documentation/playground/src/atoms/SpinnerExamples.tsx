import { Spinner } from '@acpaas-ui/react-components';

export function SpinnerExamples() {
  return (
    <div className="u-margin">
      <h2>Spinners</h2>
      <div className="u-margin">
        <Spinner showText />
        <Spinner label="Loading..." showText />
        <Spinner size="large" />
      </div>
    </div>
  );
}

export default SpinnerExamples;
