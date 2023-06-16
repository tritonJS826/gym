import "./Map.css";
import { useEffect, useState } from 'react';
import { Gym } from '../model/Gym';
import { GymService } from '../service/GymService';
import { MapContainer, TileLayer } from 'react-leaflet'
import { userCoordinate } from "../App";

/**
 * TODO: Add Open Street Map widget or other map provider
 * 
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
        <div className="map-container">
            <MapContainer center={userCoordinate.asArray()} zoom={13} scrollWheelZoom={false} >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </div>
    )
} 
