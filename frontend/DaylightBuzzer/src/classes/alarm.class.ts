import { CustomUUID } from './custom.uuid.class';


export class Alarm {
    id: number;
    uuid: CustomUUID;

    name: string;
    time: string;

    days: Array<string>;

    // as per cent
    maxVolume: number;
    // as minutes
    lightUpInterval: number;
    // as per cent
    lightIntensity: number;
    // as per cent
    maxLightOpacity: number;

    active: boolean;

    constructor(
        id: number,
        name: string,
        time: string,
        days: Array<string>,
        maxVolume: number,
        lightUpInterval: number,
        lightIntensity: number,
        maxLightOpacity: number
    ) {
        this.id = id;
        this.uuid = new CustomUUID();
        this.name = name;
        this.time = time;
        this.days = days;
        this.maxVolume = maxVolume;
        this.lightUpInterval = lightUpInterval;
        this.lightIntensity = lightIntensity;
        this.maxLightOpacity = maxLightOpacity;
        this.active = true;
    }
}