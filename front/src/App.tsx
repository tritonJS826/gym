import "./App.css";
import { Table } from "./logic/table/Table";
import { Map } from "./logic/map/Map";
import { MapCoordinate } from "./model/MapCoordinate";

// tbilisi central coordinate
export const userCoordinate = new MapCoordinate({ lattitude: 41.72122247728544, longitude: 44.7989609445935 })

export function App() {

    return (
        <>
            {/* <Table/> */}
            <Map />
        </>
    );
}