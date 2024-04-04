import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { HealthCheckService } from './services/health.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthCheckService],
})
export class AppModule {}
