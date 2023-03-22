import { Avatar } from '@acpaas-ui/react-components';

export function AvatarExamples() {
  return (
    <div className="u-margin">
      <h2>Avatars</h2>
      <div className="u-margin">
        <Avatar
          image="https://placedog.net/100/100?r"
          size="large"
          ariaLabel="Override aria-label"
          imageAlt="Dog avatar"
        />
        <Avatar rounded image="https://placedog.net/100/100?r" size="small" />
        <Avatar rounded letter="NT" />
        <Avatar letter="EDITOR" />
        <Avatar icon="accounting-bill" ariaLabel="geld" />
        <Avatar />
      </div>
    </div>
  );
}

export default AvatarExamples;
