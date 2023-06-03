import type { ColumnsType } from 'antd/es/table';
import { Gym } from '../model/Gym';

/**
 * Config for antd Table columns.
 */
export const columns: ColumnsType<Gym> = [
    {
        title: 'Name',
        dataIndex: 'title',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Img',
        dataIndex: 'img',
        key: 'img',
    },
    {
        title: 'Month price',
        dataIndex: 'monthPrice',
        key: 'monthPrice',
    },
    {
        title: 'Distance',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating'

    }
];