import { useEffect, useState } from 'react';
import { Gym } from '../model/Gym';
import { GymService } from '../service/GymService';

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
        <>
        
        </>
    )
} 
