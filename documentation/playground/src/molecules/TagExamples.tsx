import { Tag } from '@a-ui/react';
import { useState } from 'react';

export function TagExamples() {
  const [active, setActive] = useState(false);

  return (
    <div className="u-margin">
      <h2>Tags</h2>
      <div className="u-margin">
        <Tag label="Static Tag" name="aui-tag-example" />
        <Tag label="Static Tag with Icon" iconLeft="tags" />
        <Tag label="Removable tag" iconLeft="tags" removable />
        <Tag label="Controlled tag - no Onclick" active isToggle iconLeft="tags" />
        <Tag label="Controlled tag - no Onclick" active={false} isToggle iconLeft="tags" />
        <Tag
          label="Controlled tag - with onClick"
          active={active}
          onClick={() => setActive(!active)}
          isToggle
          iconLeft="tags"
        />
        <Tag label="Uncontrolled tag" isToggle iconLeft="tags" />
      </div>
    </div>
  );
}

export default TagExamples;
