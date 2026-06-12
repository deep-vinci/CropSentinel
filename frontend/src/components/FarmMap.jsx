import React from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCropSentinel } from '../state/DemoContext';

// Vidarbha region approximate coordinates
const MAP_CENTER = [20.82, 77.75];

// A mock 2-acre farm perimeter polygon
const farmPerimeter = [
  [20.8205, 77.7495],
  [20.8205, 77.7505],
  [20.8195, 77.7505],
  [20.8195, 77.7495],
];

// A sub-sector that highlights red when stressed
const stressZone = [
  [20.8200, 77.7495],
  [20.8200, 77.7505],
  [20.8195, 77.7505],
  [20.8195, 77.7495],
];

export default function FarmMap() {
  const { state } = useCropSentinel();

  return (
    <div className="w-full h-full min-h-[200px] bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 relative z-0">
      <MapContainer 
        center={MAP_CENTER} 
        zoom={16} 
        scrollWheelZoom={false}
        className="w-full h-full"
        zoomControl={false}
      >
        {/* CartoDB Dark Matter tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Base Farm Perimeter (Always visible) */}
        <Polygon 
          positions={farmPerimeter} 
          pathOptions={{ color: '#34d399', fillColor: '#34d399', fillOpacity: 0.1, weight: 2 }} 
        />

        {/* Dynamic Stress Layer (Only visible during crisis) */}
        {state.isCrisisActive && (
          <Polygon 
            positions={stressZone} 
            pathOptions={{ color: '#f97316', fillColor: '#ef4444', fillOpacity: 0.4, weight: 0 }} 
          />
        )}
      </MapContainer>

      {/* Floating UI Overlays */}
      <div className="absolute top-2 left-2 z-[400] flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2 bg-black/70 px-2 py-1 rounded border border-zinc-800/80 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          <span className="text-[10px] font-mono text-zinc-200">Sector A: Optimal</span>
        </div>
        <div className={`flex items-center gap-2 bg-black/70 px-2 py-1 rounded border backdrop-blur-md transition-colors duration-500 ${state.isCrisisActive ? 'border-red-900/50' : 'border-zinc-800/80'}`}>
          <div className={`w-1.5 h-1.5 rounded-full transition-colors ${state.isCrisisActive ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
          <span className="text-[10px] font-mono text-zinc-200">Sector B: {state.isCrisisActive ? 'Stress Alpha' : 'Optimal'}</span>
        </div>
      </div>
      
      <div className="absolute bottom-2 right-2 z-[400] bg-black/70 px-2 py-0.5 rounded text-[9px] font-mono border border-zinc-800/80 text-zinc-400 pointer-events-none">
        20.82° N, 77.75° E
      </div>
    </div>
  );
}
