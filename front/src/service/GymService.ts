import { Gym } from "../model/Gym";
import gymData from "./GymData.json" assert { type: 'json' };

// TODO: add  month price at upper level

export class GymService {

    async getGymList(): Promise<Gym[]> {

        const parsedGymList = JSON.parse(gymData);
        return parsedGymList.map((response: any) => {
            response.monthPrice = Math.trunc(Math.random() * 100);
            return Gym.deserialize(response);
        })
    }
}