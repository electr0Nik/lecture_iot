
import { CustomUUID } from './custom.uuid.class';

export class User {
    name: string;
    password: string;
    userid: number;

    uuid: CustomUUID;

    constructor(name?: string,
        password?: string,
        userid?: number,
        uuid?: CustomUUID) {

        this.name = name || '';
        this.password = password || '';
        this.userid = userid || 0;
        this.uuid = uuid || new CustomUUID();
    }
}