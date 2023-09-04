import { Gender } from "../enum/gender.enum";

export interface SalesRep {
    id: number;
    name: string;
    gender: Gender;
    phoneNumber: string;
}