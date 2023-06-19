import { Table as AntTable } from 'antd';
import { useEffect, useState } from 'react';
import { Gym } from '../../model/Gym';
import { GymService } from '../../service/GymService';
import { columns } from './TableColumn';

/**
 * Table widget with gyms
 */
export function Table() {

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
        <AntTable columns={columns} dataSource={gyms} />
    )
} 
