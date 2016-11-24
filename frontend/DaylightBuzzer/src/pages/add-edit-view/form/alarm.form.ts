

export class AlarmForm {

    id: number;

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

    constructor(id?: number,
        name?: string,
        time?: string,
        days?: Array<string>,
        maxVolume?: number,
        lightUpInterval?: number,
        lightIntensity?: number,
        maxLightOpacity?: number) {
        let currentDate: Date = new Date();
        this.id = id || 0;
        this.name = name || '';
        this.time = time || ('0' + currentDate.getHours()).slice(-2) + ':' + ('0' + currentDate.getMinutes()).slice(-2);
        this.days = days || this.getDateAsStringFromInt(currentDate.getDay());
        this.maxVolume = maxVolume;
        this.lightUpInterval = lightUpInterval;
        this.lightIntensity = lightIntensity;
        this.maxLightOpacity = maxLightOpacity;

    }

    private getDateAsStringFromInt(day: number): Array<string> {
        let days: Array<string> = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
        let returnValue: Array<string> = [];
        returnValue.push(days[day]);
        return returnValue;
    }

}