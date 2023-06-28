export type GymResponse = {
  place_id: string;
  name: string;
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  types: string[];

  // add to server data
  month_price: number;
};
