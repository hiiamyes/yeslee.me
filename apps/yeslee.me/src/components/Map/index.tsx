'use client';

import React, { useEffect, useRef, useState, createContext } from 'react';
import Leaflet from 'leaflet';

type Props = {
  center: [number, number];
  zoom?: number;
  children?: React.ReactNode;
  zoomControl?: boolean;
  touchZoom?: boolean;
  scrollWheelZoom?: boolean;
  doubleClickZoom?: boolean;
  boxZoom?: boolean;
  keyboard?: boolean;
  dragging?: boolean;
};

const MapContext = createContext<Leaflet.Map | null>(null);

const Map = (props: Props) => {
  const {
    center,
    zoom = 15,
    children,
    zoomControl = false,
    touchZoom = false,
    scrollWheelZoom = false,
    doubleClickZoom = false,
    boxZoom = false,
    keyboard = false,
    dragging = false,
  } = props;

  const [map, setMap] = useState<Leaflet.Map | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (map) return;
    if (isRendered.current) return;
    const _map = Leaflet.map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
      zoomControl,
      touchZoom,
      scrollWheelZoom,
      doubleClickZoom,
      boxZoom,
      keyboard,
      dragging,
    });

    const mapboxTileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;
    Leaflet.tileLayer(mapboxTileLayerUrl, {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(_map);
    setMap(_map);
    isRendered.current = true;
  }, [map, mapRef, center, zoom, zoomControl, touchZoom, scrollWheelZoom, doubleClickZoom, boxZoom, keyboard, dragging]);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapRef} className="w-full h-full">
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default Map;
export { MapContext };
