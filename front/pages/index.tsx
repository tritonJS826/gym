import { Table } from "../src/logic/table/Table";
import { MapCoordinate } from "../src/model/MapCoordinate";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { GymService } from "../src/service/GymService";
import dynamic from "next/dynamic"

const Map = dynamic(() => import("../src/logic/map/Map"), { ssr: false })

const gymService = new GymService();

// tbilisi central coordinate
export const userCoordinate = new MapCoordinate({ lattitude: 41.72122247728544, longitude: 44.7989609445935 })

export const getStaticProps: GetStaticProps<{
    gymsJson: string
}> = async () => {

    const gymsJson = await gymService.getGymList();

    return {
        props: { gymsJson: gymsJson }
    }
}

export default function App({ gymsJson }: InferGetStaticPropsType<typeof getStaticProps>) {

    const gymList = gymService.deserializeGymList(gymsJson);

    return (
        <div className="container">
            <Table gyms={gymList} />
            {/* <Map /> */}
        </div>
    );
}