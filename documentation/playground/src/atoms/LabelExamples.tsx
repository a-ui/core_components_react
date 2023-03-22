import { Label } from '@a-ui/react';

export function LabelExamples() {
  return (
    <div className="u-margin">
      <h2>Labels</h2>
      <div className="u-margin">
        <Label>default</Label>
        <Label type="primary">primary</Label>
        <Label type="success">success</Label>
        <Label type="warning">warning</Label>
        <Label type="danger">danger</Label>
      </div>
    </div>
  );
}

export default LabelExamples;
