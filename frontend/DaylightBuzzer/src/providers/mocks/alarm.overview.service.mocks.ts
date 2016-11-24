

import { Alarm } from '../../classes/alarm.class'
import { CustomUUID } from '../../classes/custom.uuid.class';


// use mocks services, since we have no database set up yet!
export class AlarmOverviewServiceMocks {

    constructor() {
        // populate alarms, when service is created
        this.setUpAlarms();
    }

    alarms: Array<Alarm>;


    // create mock values
    setUpAlarms(): void {
        this.alarms = [
            {
                id: 1,
                uuid: new CustomUUID(),
                name: "Mock Alarm 1",
                time: "07:15",
                days: ['Mo', 'Di', 'Sa', 'So'],

                maxVolume: 90,
                lightUpInterval: 30,
                lightIntensity: 50,
                maxLightOpacity: 75,

                active: true
            },
            {
                id: 2,
                uuid: new CustomUUID(),
                name: "Mock Alarm 2",
                time: "07:25",
                days: ['Mo', 'Do', 'Fr'],

                maxVolume: 70,
                lightUpInterval: 10,
                lightIntensity: 75,
                maxLightOpacity: 50,

                active: true
            },
            {
                id: 3,
                uuid: new CustomUUID(),
                name: "Mock Alarm 3",
                time: "07:45",
                days: ['Mo', 'Di', 'Mi', 'Do'],

                maxVolume: 20,
                lightUpInterval: 30,
                lightIntensity: 50,
                maxLightOpacity: 30,

                active: true
            },
            {
                id: 4,
                uuid: new CustomUUID(),
                name: "Mock Alarm 4",
                time: "07:45",
                days: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],

                maxVolume: 20,
                lightUpInterval: 30,
                lightIntensity: 50,
                maxLightOpacity: 30,

                active: false
            }
        ];
    }

    // create
    saveAlarm(alarm: Alarm): void {
        // log - debug only
        // console.log(`${alarm.id} : ${alarm.name} : ${alarm.days} : ${alarm.time}`)
        this.alarms.push(alarm);

        //log - debug only
        // this.alarms.forEach(it => console.log(`${it.id} : ${it.name} : ${it.days} : ${it.time}`))
    }

    // read
    getAlarms(): Array<Alarm> {
        return this.alarms;
    }

    // update
    updateAlarm(alarm: Alarm): void {
        let index: number = 0;
        for (let i = 0; i < this.alarms.length; i++) {
            if (this.alarms[i].id === alarm.id) {
                index = i;
            }
        }
        // override value on index
        this.alarms[index] = alarm;

        // log - debug only
        // this.alarms.forEach(it => console.log(`${it.id} : ${it.name} : ${it.days} : ${it.time}`))
    }

    // delete
    deleteAlarm(alarm: Alarm): void {
        this.alarms = this.alarms.filter(a => a !== alarm);
    }

}
