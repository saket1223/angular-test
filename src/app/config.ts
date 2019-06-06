import {InjectionToken} from '@angular/core';


export interface AppConfig {
    apiUrl:string;
    courseCacheSize:number;
}


export const APP_CONFIG:AppConfig = {
    apiUrl: '',
    courseCacheSize: 10
}

