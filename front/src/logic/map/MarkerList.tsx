import { Marker, Popup } from "react-leaflet";
import { MapCoordinate } from "../../model/MapCoordinate";

interface MarketElement {
    location: MapCoordinate;
    name: string;
    id: string;
}

type MarketListProps = {
    markets: MarketElement[];
}

/**
 * List of markers on the map.
 */
export function MarkerList(props: MarketListProps) {

    const list = props.markets.map(element => {

        return (
            <Marker key={element.id} position={element.location.asArray()}>
                <Popup>
                    {element.name}
                </Popup>
            </Marker>
        )
    })

    return (
        <>
            {list}
        </>
    )
}