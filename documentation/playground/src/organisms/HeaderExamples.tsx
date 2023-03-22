import { Header } from '@a-ui/react';

export function HeaderExamples() {
  return (
    <div className="u-margin" style={{ marginBottom: '100px' }}>
      <h2>Header</h2>
      <Header buttons={[{ id: 'hello', label: 'Hello' }]} />
    </div>
  );
}

export default HeaderExamples;
