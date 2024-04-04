import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthCheckService {
  getHealthCheck() {
    return { statusCode: 200, status: 'ok', message: 'The server is running'}
  }
}