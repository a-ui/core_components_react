import { Icon } from '@a-ui/react';

export function IconExamples() {
  return (
    <div className="u-margin">
      <h2>Icons</h2>
      <div className="u-margin">
        <Icon name="alarm-bell" />
        <Icon name="alert-diamond" />
        <Icon name="mouse" screenReaderText="Click to connect your mouse" />
        <Icon thin name="ai-mouse" screenReaderText="Click to connect your mouse" />
        <Icon name="nothingtoseehere" />
      </div>
    </div>
  );
}

export default IconExamples;
