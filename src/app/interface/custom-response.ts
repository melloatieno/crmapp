import { DataState } from "../enum/data.state.enum";
import { Customer } from "./customer";


export interface CustomResponse {
    dataState: DataState;
    appData: any;
    error(arg0: string, error: any): unknown;
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: {customers?:Customer[], customer?: Customer};
}