import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { MiddlewareModule } from './middleware/middleware.module';
import { GuardModule } from './guard/guard.module';

@Module({
  imports: [MiddlewareModule, GuardModule],
  controllers: [ApiController],
})
export class ApiModule {}
