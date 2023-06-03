import { MapCoordinate } from "./MapCoordinate";

/**
 * Main model.
 * 
 * Represent gym to show to client.
 */
export class Gym {

    /**
     * Display title for user.
     */
    title: string;

    /**
     * String html link to image.
     */
    img: string;

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

    constructor(title: string, img: string, monthPrice: number, location: MapCoordinate, rating: number) {
        this.title = title;
        this.img = img;
        this.monthPrice = monthPrice;
        this.location = location;
        this.rating = rating;
    }
}