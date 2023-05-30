import { MapProps } from './Map.types';
import { classNames } from '../../../utils/dom.utils';
import { Button, ButtonProps } from '../../atoms/button';
// TODO: include map in css and remove this import
import './main.css';

export function Map({
  sidebar,
  sidebarOpen,
  map,
  topLeftControls,
  topRightControls,
  bottomLeftControls,
  bottomRightControls,
  fullscreen,
  qa
}: MapProps) {
  const renderControls = (controls: ButtonProps[], location: string) => {
    return (
      <div className={`o-map__controls o-map__controls--${location}`}>
        {controls.map((buttonProps, index) => {
          return <Button key={`map-control-${buttonProps.id || index}`} size="small" {...buttonProps} />;
        })}
      </div>
    );
  };

  const classes = classNames({
    'o-map': true,
    'o-map--full-screen': !!fullscreen
  });
  return (
    <div className={classes} data-qa={qa}>
      {sidebar && (
        <div
          className={classNames({
            'o-map__content': true,
            'o-map__content--open': !!sidebarOpen
          })}
        >
          {sidebar}
        </div>
      )}
      <div className="o-map__wrapper">
        <div id="map" className="o-map__map">
          {map}
        </div>
        {!!topLeftControls && renderControls(topLeftControls, 'top-left')}
        {!!topRightControls && renderControls(topRightControls, 'top-right')}
        {!!bottomRightControls && renderControls(bottomRightControls, 'bottom-right')}
        {!!bottomLeftControls && renderControls(bottomLeftControls, 'bottom-left')}
      </div>
    </div>
  );
}

export default Map;
