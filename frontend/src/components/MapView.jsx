import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

function MapView({ earthquakes }) {
  const getMagnitudeColor = (magnitude) => {
    if (magnitude >= 6) return '#d32f2f' // Red - Major
    if (magnitude >= 5) return '#ff6f00' // Orange - Moderate
    if (magnitude >= 4) return '#ffa000' // Amber
    if (magnitude >= 3) return '#fdd835' // Yellow
    if (magnitude >= 2) return '#9ccc65' // Light green
    return '#66bb6a' // Green - Minor
  }

  const getMagnitudeSize = (magnitude) => {
    if (magnitude >= 6) return 20
    if (magnitude >= 5) return 15
    if (magnitude >= 4) return 12
    if (magnitude >= 3) return 10
    if (magnitude >= 2) return 8
    return 6
  }

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <div className="flex-1 relative">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {earthquakes.map((earthquake) => {
          const [lng, lat, depth] = earthquake.geometry.coordinates
          const { mag, place, time, tsunami } = earthquake.properties

          return (
            <CircleMarker
              key={earthquake.id}
              center={[lat, lng]}
              radius={getMagnitudeSize(mag)}
              fillColor={getMagnitudeColor(mag)}
              color="#fff"
              weight={1}
              opacity={1}
              fillOpacity={0.7}
            >
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-base mb-2 text-gray-800">{place}</h3>
                  <div className="space-y-1">
                    <p><span className="font-semibold">Magnitude:</span> {mag}</p>
                    <p><span className="font-semibold">Depth:</span> {depth.toFixed(2)} km</p>
                    <p><span className="font-semibold">Time:</span> {formatDate(time)}</p>
                    <p><span className="font-semibold">Coordinates:</span> {lat.toFixed(4)}, {lng.toFixed(4)}</p>
                    {tsunami === 1 && (
                      <p className="text-red-600 font-semibold">Tsunami Warning</p>
                    )}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default MapView
