/**
 * Map coordinates in decimal degrees (DD).
 * 
 * Decimal degrees example: 41.40338, 2.17403
 * 
 * Lattitude and longitude delimeter is "."
 * 
 * This format works in Google maps.
 */
export class MapCoordinate {
    
    /**
     * First coordinate.
     */
    lattitude: string = '';

    /**
     * Second coordinate.
     */
    longitue: string = '';

    /**
     * Get format ready for using in Google Maps.
     * Latitude coordinates must be before longitude coordinates.
     */
    getMapFormat() {
        return `${this.lattitude} ${this.longitue}`
    }
}