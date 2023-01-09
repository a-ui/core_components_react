import { Avatar } from '@acpaas-ui/react-components';

export function AvatarExamples() {
  return (
    <>
      <h1>Avatars</h1>
      <Avatar image="https://placedog.net/100/100?r" size="large" ariaLabel="Override aria-label" />
      <Avatar rounded image="https://placedog.net/100/100?r" size="small" />
      <Avatar rounded letter="AC" />
      <Avatar letter="ED" />
      <Avatar icon="accounting-bill" />
      <Avatar />
    </>
  );
}

export default AvatarExamples;