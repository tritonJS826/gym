import { GymResponse } from "../service/GymResponse";
import { MapCoordinate } from "./MapCoordinate";

/**
 * Main model.
 *
 * Represent gym to show to client.
 */
export class Gym {
  /**
   * Unique identifier.
   */
  key: string;

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

  constructor(parameters: {
    key: string;
    name: string;
    monthPrice: number;
    location: MapCoordinate;
    rating: number;
    types: string[];
  }) {
    this.key = parameters.key;
    this.name = parameters.name;
    this.monthPrice = parameters.monthPrice;
    this.location = parameters.location;
    this.rating = parameters.rating;
    this.types = parameters.types;
  }

  static deserialize(response: GymResponse) {
    const location = MapCoordinate.deserialize(response.geometry.location);
    const rawGym = {
      key: response.place_id,
      name: response.name,
      monthPrice: response.month_price,
      rating: response.rating,
      location,
      types: response.types,
    };
    return new Gym(rawGym);
  }

  static serialize(gym: Gym) {
    return JSON.stringify(gym);
  }
}
