import { Controller, Get } from "@nestjs/common";
import { HealthCheckService } from "../services/health.service";

@Controller('healthcheck')
export class HealthController {
  constructor(private readonly helthCheckService: HealthCheckService){}
  
  @Get()
  getHealthCheck() {
    return this.helthCheckService.getHealthCheck()
  }
}
