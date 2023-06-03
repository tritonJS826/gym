import { Gym } from "../model/Gym";
import { MapCoordinate } from "../model/MapCoordinate";

/**
 * Stub gyms.
 */
export const gyms = [
    new Gym('top gym', '1', 100, new MapCoordinate('55', '44'), 5),
    new Gym('2 gym', '2', 50, new MapCoordinate('56', '44'), 4),
    new Gym('3 gym', '3', 70, new MapCoordinate('57', '44'), 3.2),
    new Gym('gy4 m', '4', 47.45, new MapCoordinate('58', '44'), 3.9),
    new Gym('best gymn', '5', 93.23, new MapCoordinate('59', '44'), 4.2),
]