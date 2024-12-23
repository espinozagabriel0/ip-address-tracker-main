import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { Icon } from "leaflet"

export default function TrackerGeoMap({data}) {

  const lat = data?.location.lat
  const lng = data?.location.lng

  const mapIcon = new Icon({
    iconUrl: '/img/icon-location.svg',
    iconSize: [30, 40],
    iconAnchor: [lat, lng],
    popupAnchor: [-20, -8]
  })

  const Centerer = ({center}) =>{
    const map = useMap()
    useEffect(() => {
        map.setView(center)
    }, [center, map])
  }

  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} className='h-[100vh] z-0'>
        <Centerer center={[lat, lng]}/>

        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} className={"p-10"}  icon={mapIcon}  >
            <Popup>
              Place
            </Popup>
        </Marker>
    </MapContainer>
)
}
