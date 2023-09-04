import { Category } from "../enum/category.enum";
import { Challenges } from "../enum/challenges.enum";
import { Chama } from "../enum/chama.enum";
import { CustomerStatus } from "../enum/customerstatus.enum";
import { Freezer } from "../enum/freezer.enum";
import { Gender } from "../enum/gender.enum";

export interface Customer {
    name: string;
    contactPerson: string;
    phoneNumber: string;
    gender: Gender;
    chama: Chama;
    challenges: Challenges;
    category: Category;
    supplier: string;
    products: string;
    weight: number;
    freezer: Freezer;
    status: CustomerStatus;
} 