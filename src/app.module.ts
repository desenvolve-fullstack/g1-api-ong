import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthController } from './controllers/health.controller';

import { DbConfigService } from './config/db.config';
import { HealthCheckService } from './services/health.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.development.env']
    }),
    TypeOrmModule.forRootAsync({
    useClass: DbConfigService,
    inject: [DbConfigService]
  })
],
  controllers: [HealthController],
  providers: [HealthCheckService],
})
export class AppModule {}
