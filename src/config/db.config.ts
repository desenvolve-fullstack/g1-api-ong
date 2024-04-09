import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';


export class DbConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [], 
      synchronize: true,
      logging: true, 
    };
  }
}
