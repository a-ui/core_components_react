import { Tag, TagList } from '@a-ui/react';

export function TagListExamples() {
  return (
    <div className="u-margin">
      <h2>Tag Lists</h2>
      <div className="u-margin">
        <TagList>
          <Tag label="Hello 1" />
          <Tag label="Hello 2" />
          <Tag label="Hello 3" />
          <Tag label="Hello 4" />
        </TagList>
        <TagList>
          <Tag label="I am a lonely tag" iconLeft="mouse" isToggle />
        </TagList>
      </div>
    </div>
  );
}

export default TagListExamples;
