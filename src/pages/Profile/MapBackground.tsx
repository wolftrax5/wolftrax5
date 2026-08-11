import React, { useMemo, useRef, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { useTheme } from '../../contexts/theme-context';
import { CITIES, City, MAP_GEOGRAPHY_URL } from './data';
import { MapWrapper, MapTooltip } from './styles';

const ATLANTIC_CENTER: [number, number] = [-30, 10];

interface HoverState {
  city: City;
  x: number;
  y: number;
}

export const MapBackground: React.FC = () => {
  const { theme } = useTheme();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<HoverState | null>(null);

  const palette = useMemo(() => {
    const dark = theme === 'dark';
    return {
      land: dark ? 'rgba(103, 232, 19, 0.18)' : 'rgba(29, 191, 94, 0.16)',
      landStroke: dark ? 'rgba(103, 232, 19, 0.55)' : 'rgba(29, 191, 94, 0.6)',
      cityHome: dark ? '#67e813' : '#1dbf5e',
      cityVisited: dark ? '#ffffff' : '#1e1f20',
    };
  }, [theme]);

  const showTooltip = (city: City, e: React.MouseEvent) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHover({
      city,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const hideTooltip = () => setHover(null);

  const labelFor = (city: City) =>
    city.type === 'home'
      ? `${city.name}, ${city.country} · Home`
      : `${city.name}, ${city.country} · Visited`;

  return (
    <MapWrapper ref={wrapperRef}>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{ scale: 320 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup
          center={ATLANTIC_CENTER}
          zoom={1}
          minZoom={0.6}
          maxZoom={6}
        >
          <Geographies geography={MAP_GEOGRAPHY_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey ?? geo.properties?.ADMIN}
                  geography={geo}
                  fill={palette.land}
                  stroke={palette.landStroke}
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
          {CITIES.map((city) => {
            const isHome = city.type === 'home';
            return (
              <Marker
                key={`${city.name}-${city.country}`}
                coordinates={[city.lng, city.lat]}
                onMouseEnter={(e) => showTooltip(city, e)}
                onMouseMove={(e) => showTooltip(city, e)}
                onMouseLeave={hideTooltip}
                style={{
                  default: { cursor: 'pointer' },
                  hover: { cursor: 'pointer' },
                  pressed: { cursor: 'pointer' },
                }}
              >
                {isHome ? (
                  <>
                    <circle r={9} fill={palette.cityHome} fillOpacity={0.25}>
                      <animate
                        attributeName='r'
                        from='6'
                        to='16'
                        dur='1.8s'
                        begin='0s'
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='fill-opacity'
                        from='0.5'
                        to='0'
                        dur='1.8s'
                        begin='0s'
                        repeatCount='indefinite'
                      />
                    </circle>
                    <circle
                      r={4}
                      fill={palette.cityHome}
                      stroke={palette.cityHome}
                      strokeWidth={1.5}
                    />
                  </>
                ) : (
                  <circle
                    r={3}
                    fill={palette.cityVisited}
                    stroke={palette.cityVisited}
                    strokeOpacity={0.7}
                    strokeWidth={0.8}
                  />
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
      {hover && (
        <MapTooltip
          role='tooltip'
          style={{
            transform: `translate(${hover.x + 14}px, ${hover.y + 14}px)`,
          }}
        >
          {labelFor(hover.city)}
        </MapTooltip>
      )}
    </MapWrapper>
  );
};
