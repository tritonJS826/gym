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
    lattitude: number;

    /**
     * Second coordinate.
     */
    longitude: number;

    constructor(params: {lattitude: number, longitude: number}) {
        this.lattitude = params.lattitude;
        this.longitude = params.longitude;
    }

    static deserialize(location: any) {
        const rawMapCoordinate = {lattitude: location.lat, longitude: location.lng}
        return new MapCoordinate(rawMapCoordinate);
    }

    /**
     * Get format ready for using in Google Maps.
     * Latitude coordinates must be before longitude coordinates.
     */
    getMapFormat() {
        return `${this.lattitude} ${this.longitude}`
    }

    asArray(): [number, number] {
      return [this.lattitude, this.longitude];
    }

    static getDistanceBetweenLocationsInMeter(firstCoordinate: MapCoordinate, secondCoordinate: MapCoordinate) {

        function deg2rad(deg: number) {
            return deg * (Math.PI/180)
          }

        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(firstCoordinate.lattitude - secondCoordinate.lattitude);  // deg2rad below
        var dLon = deg2rad(firstCoordinate.longitude - secondCoordinate.longitude); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(firstCoordinate.lattitude)) * Math.cos(deg2rad(secondCoordinate.lattitude)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) * 1000; 
        var d = R * c; // Distance in km
        return Math.trunc(d);
      }
}