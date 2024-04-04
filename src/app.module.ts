import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { HealthController } from './controllers/health.controller';
import { AppService } from './services/app.service';
import { HealthCheckService } from './services/health.service';

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthCheckService],
})
export class AppModule {}
