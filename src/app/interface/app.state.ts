import { DataState } from "../enum/data.state.enum";

export interface AppState<S>{
    dataState: DataState;
    appData?: S;
    error?: string;
}