import { Board } from "src/boards/board.entity";
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const AppDataSource = new DataSource({

    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'rtgh1472',
    database: 'board-app',
    entities: [Board],
    synchronize: true,
    logging: true,

} as PostgresConnectionOptions );