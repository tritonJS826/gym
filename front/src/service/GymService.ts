import { Gym } from "../model/Gym";
import { GymResponse } from "./GymResponse";
import gymData from "./GymData.json" assert { type: "json" };

// TODO: add  month price at upper level

export class GymService {
  async getGymList(): Promise<string> {
    return gymData;
  }

  deserializeGymList(jsonGymList: string): Gym[] {
    const parsedGymList = JSON.parse(jsonGymList);
    return parsedGymList.map((response: GymResponse) =>
      Gym.deserialize(response)
    );
  }
}
