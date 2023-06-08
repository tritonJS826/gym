import { MapCoordinate } from "./MapCoordinate";

/**
 * Main model.
 * 
 * Represent gym to show to client.
 */
export class Gym {

    /**
     * Name of gym.
     */
    name: string;

    /**
     * Aproximate month price in local currency.
     */
    monthPrice: number;

    /**
     * Location on map.
     */
    location: MapCoordinate;

    /**
     * Gym rating 0 - 5.
     * With one decimal
     */
    rating: number;

    /**
     * Types of google map entity.
     */
    types: string[];

    constructor(parameters: {name: string, monthPrice: number, location: MapCoordinate, rating: number, types: string[]}) {
        this.name = parameters.name;
        this.monthPrice = parameters.monthPrice;
        this.location = parameters.location;
        this.rating = parameters.rating;
        this.types = parameters.types;
    }

    static deserialize(response: any) {
        const location = MapCoordinate.deserialize(response.geometry.location);
        const rawGym = {name: response.name, monthPrice: response.monthPrice, rating: response.rating, location, types: response.types};
        return new Gym(rawGym);
    }
}