'use client'

import { useState } from 'react'
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'

interface MapMarker {
  id: string
  name: string
  x: number
  y: number
  count: number
  color: string
  status: string
}

const mapMarkers: MapMarker[] = [
  { id: 'delhi', name: 'Delhi', x: 58, y: 35, count: 104, color: 'bg-red-500', status: 'Active' },
  { id: 'mumbai', name: 'Mumbai', x: 42, y: 48, count: 74, color: 'bg-orange-500', status: 'Active' },
  { id: 'bangalore', name: 'Bangalore', x: 52, y: 62, count: 171, color: 'bg-red-500', status: 'Active' },
  { id: 'hyderabad', name: 'Hyderabad', x: 55, y: 55, count: 89, color: 'bg-blue-400', status: 'Active' },
  { id: 'kolkata', name: 'Kolkata', x: 72, y: 40, count: 45, color: 'bg-purple-500', status: 'Active' },
  { id: 'jaipur', name: 'Jaipur', x: 48, y: 32, count: 32, color: 'bg-orange-400', status: 'Active' },
]

const countryLabels = [
  { name: 'China', x: 75, y: 25 },
  { name: 'Pakistan', x: 35, y: 28 },
  { name: 'Afghanistan', x: 28, y: 22 },
  { name: 'Iran', x: 15, y: 32 },
  { name: 'Nepal', x: 60, y: 30 },
  { name: 'Bhutan', x: 68, y: 28 },
  { name: 'Bangladesh', x: 70, y: 38 },
  { name: 'Myanmar', x: 78, y: 42 },
  { name: 'Thailand', x: 82, y: 48 },
  { name: 'Sri Lanka', x: 57, y: 70 },
  { name: 'India', x: 52, y: 45 },
  { name: 'Gulf', x: 5, y: 55 },
  { name: 'Arabian Sea', x: 35, y: 70 },
]

function TrackingMap() {
  const [zoom, setZoom] = useState(1)
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)

  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in' && zoom < 2) setZoom(zoom + 0.2)
    if (direction === 'out' && zoom > 1) setZoom(zoom - 0.2)
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
      {/* Map Container */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-blue-900 via-gray-800 to-blue-950 overflow-hidden">
        {/* Background Map Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>

        {/* Map Contents */}
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center',
          }}
        >
          {/* Country Labels */}
          {countryLabels.map((label) => (
            <div
              key={label.name}
              className="absolute text-gray-500 text-xs md:text-sm font-semibold pointer-events-none"
              style={{
                left: `${label.x}%`,
                top: `${label.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {label.name}
            </div>
          ))}

          {/* Markers */}
          {mapMarkers.map((marker) => (
            <div
              key={marker.id}
              className="absolute cursor-pointer group"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={() => setSelectedMarker(marker)}
            >
              {/* Ripple Effect */}
              <div className={`absolute inset-0 w-8 h-8 md:w-10 md:h-10 ${marker.color} rounded-full opacity-20 animate-pulse`}></div>

              {/* Marker Circle */}
              <div
                className={`relative w-6 h-6 md:w-8 md:h-8 ${marker.color} rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform z-10`}
              >
                <span className="text-white text-xs md:text-sm font-bold">{marker.count}</span>
              </div>

              {/* Marker Label - Show on hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {marker.name}
              </div>
            </div>
          ))}

          {/* Water Bodies */}
          <div className="absolute bottom-12 left-8 text-gray-600 text-xs md:text-sm opacity-60">
            Arabian Sea
          </div>
          <div className="absolute bottom-20 right-12 text-gray-600 text-xs md:text-sm opacity-60">
            Bay of Bengal
          </div>
        </div>

        {/* Controls */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
          <button
            onClick={() => handleZoom('in')}
            className="bg-white hover:bg-gray-100 text-gray-800 w-8 h-8 md:w-10 md:h-10 rounded flex items-center justify-center font-bold transition shadow-lg"
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            disabled={zoom <= 1}
            className="bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 w-8 h-8 md:w-10 md:h-10 rounded flex items-center justify-center font-bold transition shadow-lg"
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Map Type Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          {['Map', 'Satellite', 'Terrain', '3D', 'Traffic', 'More'].map((label, idx) => (
            <button
              key={idx}
              className="bg-orange-500 hover:bg-orange-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm font-semibold transition shadow-lg"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Fullscreen Button */}
        <button
          className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-gray-800 w-8 h-8 md:w-10 md:h-10 rounded flex items-center justify-center transition shadow-lg z-20"
          title="Fullscreen"
        >
          <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* Info Panel */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 md:p-6">
        <h3 className="text-white font-semibold mb-4">Active Tracking Regions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mapMarkers.map((marker) => (
            <div
              key={marker.id}
              onClick={() => setSelectedMarker(marker)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                selectedMarker?.id === marker.id
                  ? 'border-orange-500 bg-orange-500/10'
                  : 'border-gray-700 bg-gray-900/50 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${marker.color}`}></div>
                <h4 className="text-white font-semibold">{marker.name}</h4>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Active Shipments</span>
                <span className="text-orange-500 font-bold">{marker.count}</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-xs">{marker.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrackingMap
