import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { AppDataSource } from './configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const options = AppDataSource.options as PostgresConnectionOptions; 
        return {
          type: options.type,
          host: options.host, 
          port: options.port,
          username: options.username,
          password: options.password,
          database: options.database,
          entities: options.entities,
          synchronize: options.synchronize,
          logging: options.logging,
        };
      },
    }),
    BoardsModule,
  ],
})
export class AppModule {}
