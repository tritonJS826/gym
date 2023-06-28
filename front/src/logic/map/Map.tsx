'use client'

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import style from "./Map.module.css";
import { userCoordinate } from '../../../pages/index';
import { Gym } from '../../model/Gym';
import { GymService } from '../../service/GymService';
import { MarkerList } from './MarkerList';

/**
 * Map widget with gyms.
 */
export default function Map() {

    const [gyms, setGyms] = useState<Gym[]>([]);

    const gymService = new GymService();

    const loadGyms = async () => {

        const gyms = await gymService.getGymList();
        const deserializedGyms = gymService.deserializeGymList(gyms);
        setGyms(deserializedGyms);
    };

    useEffect(() => {
        loadGyms()
    }, []);

    return (
        <MapContainer className={style.leafletContainer} center={userCoordinate.asArray()} zoom={13} scrollWheelZoom={false} >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <MarkerList markets={gyms} />
        </MapContainer>
    )
} 
