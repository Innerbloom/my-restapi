import {DataSource} from 'typeorm';
import {User} from "./entities/User";
import {Logs} from "./entities/Logs";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    port: 3306,
    password: 'password',
    database: 'typeormdb',
    entities: [User, Logs],
    logging: true,
    synchronize: true
})