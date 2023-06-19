import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "./Map.css";
import { userCoordinate } from '../../App';
import { Gym } from '../../model/Gym';
import { GymService } from '../../service/GymService';
import { MarkerList } from './MarkerList';

/**
 * Map widget with gyms.
 */
export function Map() {

    const [gyms, setGyms] = useState<Gym[]>([]);

    const gymService = new GymService();

    const loadGyms = async () => {

        const gyms = await gymService.getGymList();
        setGyms(gyms);
    };

    useEffect(() => {
        loadGyms()
    }, []);

    return (
        <MapContainer center={userCoordinate.asArray()} zoom={13} scrollWheelZoom={false} >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MarkerList markets={gyms}/>
        </MapContainer>
    )
} 
