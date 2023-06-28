'use client'

import { Table as AntTable } from 'antd';
import { columns } from './TableColumn';
import { Gym } from '../../model/Gym';

/**
 * Table widget with gyms
 */
export function Table({ gyms }: { gyms: any }) {

    return (
        <AntTable pagination={{ pageSize: 6 }} columns={columns} dataSource={gyms} />
    )
} 
