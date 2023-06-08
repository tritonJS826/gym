import type { ColumnsType } from 'antd/es/table';
import { Gym } from '../model/Gym';
import { Tag } from 'antd';
import { MapCoordinate } from '../model/MapCoordinate';
import { userCoordinate } from '../App';

/**
 * Config for antd Table columns.
 */
export const columns: ColumnsType<Gym> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
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
        render: (location: MapCoordinate) => (
            <>
                {MapCoordinate.getDistanceBetweenLocationsInMeter(location, userCoordinate)}
            </>
        )
    },
    {
        title: 'Tags',
        dataIndex: 'types',
        key: 'types',
        render: (tags: string[]) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )

    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating'

    }
];