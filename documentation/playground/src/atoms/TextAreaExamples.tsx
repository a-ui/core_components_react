import { TextArea } from '@a-ui/react';
import { useState } from 'react';

export function TextAreaExamples() {
  const [firstTextArea, setFirstTextArea] = useState('');
  return (
    <div className="u-margin" style={{ width: '420px' }}>
      <h2>Text Areas</h2>
      <div className="u-margin">
        <TextArea
          label="Controlled - onChange"
          id="textarea-0"
          onChange={(e) => setFirstTextArea(e.target.value)}
          value={firstTextArea}
          charCounter
          maxLength={100}
          maxLengthBlocksInput
        />
        <TextArea
          label="Uncontrolled"
          required
          id="textarea-1"
          description="Help text"
          charCounter
          charCountText="Out of %max% characters, a total of %count% were typed, with %left% characters remaining."
          maxLength={200}
        />
        <TextArea label="Controlled - no onChange" id="textarea-2" value="hello" charCounter maxLength={100} />
        <TextArea label="Error" id="textarea-3" description="There is an error" charCounter state="error" />
        <TextArea
          label="Small success"
          id="textarea-4"
          description="Ok!"
          charCounter={false}
          maxLength={20}
          state="success"
          size="small"
        />
      </div>
    </div>
  );
}

export default TextAreaExamples;
