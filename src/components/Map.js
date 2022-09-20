import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
const Map = () => {
  return (
    <div>
        <MapContainer center={[26.781889, 79.020716]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.781889, 79.020716]}>
              
              
            </Marker>
          </MapContainer>
    </div>
  )
}

export default Map
