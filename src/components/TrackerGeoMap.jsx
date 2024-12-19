import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function TrackerGeoMap({data}) {

  const lat = data?.location.lat
  const lng = data?.location.lng
  
  console.log(lat, lng)
  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} className='h-[100vh] z-0'>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
            <Popup>
                Place
            </Popup>
        </Marker>
    </MapContainer>
)
}
