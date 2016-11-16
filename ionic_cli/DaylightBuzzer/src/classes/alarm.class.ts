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
}