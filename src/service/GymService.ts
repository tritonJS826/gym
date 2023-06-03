import { Gym } from "../model/Gym";
import { gyms } from "./GymData";

export class GymService {

    async getGymList(): Promise<Gym[]> {
        return gyms
    }
}