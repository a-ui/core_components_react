import { Copyright, Image } from '@a-ui/react';

export function ImageExamples() {
  return (
    <div className="u-margin">
      <h2>Image</h2>
      <div className="u-margin">
        <Image src="https://placedog.net/400/300?r" alt="A random dog" />
        <Image src="https://placedog.net/400/300?r" alt="A random dog">
          <Copyright sign="©" label="With link" link="https://www.google.be" qa="image copyright" />
        </Image>
        <Image src="https://placedog.net/400/300?r" alt="A random dog">
          <Copyright sign="™" label="Without link" qa="image copyright" />
        </Image>
        <Image src="https://placedog.net/400/300?r" alt="A random dog">
          <div>This div should log a warning</div>
        </Image>
      </div>
    </div>
  );
}

export default ImageExamples;
