import { MapCoordinate } from "./MapCoordinate";

/**
 * Main model.
 * 
 * Represent gym to show to client.
 */
export class Gym {

    /**
     * String html link to image.
     */
    img: string = '';

    /**
     * Aproximate month price in local currency.
     */
    monthPrice: number = 0;

    /**
     * Location on map.
     */
    location: MapCoordinate = new MapCoordinate();

    /**
     * Gym rating 0 - 5.
     * With one decimal
     */
    rating: number = 0;
}