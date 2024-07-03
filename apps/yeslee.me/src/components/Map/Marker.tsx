import { useEffect, useContext, useRef } from 'react';
import Leaflet from 'leaflet';
import { MapContext } from '.';

type Props = {
  position: [number, number];
};

const Marker = (props: Props) => {
  const { position } = props;
  const map = useContext(MapContext);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (!map) return;
    if (isRendered.current) return;
    console.log('marker~~~');
    const marker = Leaflet.marker(position, {
      icon: Leaflet.divIcon({
        iconSize: [20, 20],
        iconAnchor: [10, 20],
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        className: 'marker',
      }),
    });
    marker.addTo(map);
    isRendered.current = true;
  }, [map, position]);

  return null;
};

export default Marker;
