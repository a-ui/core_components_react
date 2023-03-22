import { Button } from '@a-ui/react';

export function ButtonExamples() {
  return (
    <div className="u-margin">
      <h2>Buttons</h2>
      <div className="u-margin">
        <Button size="large">Click me!</Button>
        <Button addOn={{ type: 'avatar', avatarProps: { image: 'https://placedog.net/100/100?r' } }}>
          Avatar button
        </Button>
        <Button size="small" addOn={{ type: 'spinner' }}>
          Spinner button
        </Button>
        <Button ariaLabel="Click to archive!" addOn={{ type: 'icon', iconProps: { name: 'archive' } }}></Button>
        <Button addOn={{ type: 'icon', align: 'right', iconProps: { name: 'archive' } }}>Icon right</Button>
        <Button addOn={{ type: 'icon', align: 'left', iconProps: { name: 'ai-archive' } }}>Icon Left</Button>
        <Button emphasis="medium">Outline</Button>
        <Button emphasis="low">Transparent</Button>
        <Button theme="danger">Danger</Button>
        <Button theme="neutral" emphasis="medium">
          Neutral outline
        </Button>
        <Button theme="warning" emphasis="medium">
          Warning outline
        </Button>
      </div>
    </div>
  );
}

export default ButtonExamples;
