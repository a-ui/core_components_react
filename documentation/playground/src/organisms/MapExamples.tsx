import { ButtonProps, Map } from '@a-ui/react';
import React from 'react';

const topRightControls: ButtonProps[] = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'mouse' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    theme: 'danger',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'accounting-bill' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    theme: 'success',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'bookmarks-2' } }
  }
];
const bottomLeftControls: ButtonProps[] = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'car-retro-2' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'cursor-1' } }
  }
];
const bottomRightControls: ButtonProps[] = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'cursor-target-1' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'filter-1' } }
  }
];

export function MapExamples() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isContentOpen, setIsContentOpen] = React.useState(false);
  const topLeftControls: ButtonProps[] = [
    {
      size: 'small',
      title: 'Open',
      ariaLabel: 'map-control',
      onClick: () => setIsContentOpen(!isContentOpen),
      addOn: {
        type: 'icon',
        align: 'center',
        iconProps: { name: isContentOpen ? 'arrow-button-left-1' : 'arrow-button-right-1' }
      }
    },
    {
      size: 'small',
      title: 'Open',
      ariaLabel: 'map-control',
      onClick: () => setIsFullscreen(!isFullscreen),
      addOn: { type: 'icon', align: 'center', iconProps: { name: isFullscreen ? 'shrink-1' : 'expand-1' } }
    }
  ];
  return (
    <div className="u-margin">
      <h2>Map</h2>
      <Map
        fullscreen={isFullscreen}
        contentOpen={isContentOpen}
        topLeftControls={topLeftControls}
        topRightControls={topRightControls}
        bottomLeftControls={bottomLeftControls}
        bottomRightControls={bottomRightControls}
        map={<img style={{ transform: 'scale(2)' }} src="https://placedog.net/1000/1000?r" alt="map" />}
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque, malesuada purus sit
            amet, gravida lectus. Aenean rutrum ipsum nec gravida eleifend. Sed pharetra vel orci nec vulputate. Nulla
            convallis mi nisl, sed finibus urna blandit quis. Sed fermentum mattis urna, sit amet lacinia libero commodo
            in. Duis nec ornare massa, ut iaculis urna. Suspendisse vehicula neque id metus dictum, quis varius elit
            elementum. Proin vitae varius lorem, sed congue lectus. Mauris et elit magna. Aenean sit amet lacus ac magna
            congue rhoncus. Mauris volutpat turpis non ligula pretium hendrerit. Phasellus eget nisi vel massa interdum
            sollicitudin a sit amet metus. Donec dignissim eros sit amet erat pretium, eleifend euismod nunc varius.
            Donec accumsan tincidunt porttitor.
          </p>
        }
      />
    </div>
  );
}

export default MapExamples;
