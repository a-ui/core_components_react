import { ButtonProps, Map } from '@a-ui/react';
import React from 'react';

const topRightControls: ButtonProps[] = [
  {
    title: 'Mouse',
    ariaLabel: 'map-control',
    theme: 'success',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'mouse' } }
  },
  {
    title: 'Bookmark',
    ariaLabel: 'map-control',
    theme: 'warning',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'bookmarks-2' } }
  }
];
const bottomLeftControls: ButtonProps[] = [
  {
    title: 'Car',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'car-retro-2' } }
  }
];
const bottomRightControls: ButtonProps[] = [
  {
    title: 'Cursor 2',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'cursor-target-1' } }
  }
];

export function MapExamples() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [open, setIsOpen] = React.useState(false);
  const topLeftControls: ButtonProps[] = [
    {
      title: 'Sidebar',
      ariaLabel: 'map-control',
      onClick: () => setIsOpen(!open),
      addOn: {
        type: 'icon',
        align: 'center',
        iconProps: { name: open ? 'arrow-button-left-1' : 'arrow-button-right-1' }
      }
    },
    {
      title: 'Fullscreen',
      ariaLabel: 'map-control',
      onClick: () => setIsFullscreen(!isFullscreen),
      addOn: { type: 'icon', align: 'center', iconProps: { name: isFullscreen ? 'shrink-1' : 'expand-1' } }
    }
  ];
  return (
    <div className="u-margin">
      <h2>Map</h2>
      <div style={{ width: '800px' }}>
        <Map
          fullscreen={isFullscreen}
          sidebarOpen={open}
          topLeftControls={topLeftControls}
          topRightControls={topRightControls}
          bottomLeftControls={bottomLeftControls}
          bottomRightControls={bottomRightControls}
          map={<img width="100%" height="100%" src="https://placedog.net/800/400?r" alt="map" />}
          sidebar={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque, malesuada purus sit
              amet, gravida lectus. Aenean rutrum ipsum nec gravida eleifend. Sed pharetra vel orci nec vulputate. Nulla
              convallis mi nisl, sed finibus urna blandit quis. Sed fermentum mattis urna, sit amet lacinia libero
              commodo in. Duis nec ornare massa, ut iaculis urna. Suspendisse vehicula neque id metus dictum, quis
              varius elit elementum. Proin vitae varius lorem, sed congue lectus. Mauris et elit magna. Aenean sit amet
              lacus ac magna congue rhoncus. Mauris volutpat turpis non ligula pretium hendrerit. Phasellus eget nisi
              vel massa interdum sollicitudin a sit amet metus. Donec dignissim eros sit amet erat pretium, eleifend
              euismod nunc varius. Donec accumsan tincidunt porttitor.
            </p>
          }
        />
      </div>
    </div>
  );
}

export default MapExamples;
