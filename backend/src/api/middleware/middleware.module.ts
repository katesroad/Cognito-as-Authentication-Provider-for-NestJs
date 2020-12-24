import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthMiddleware } from 'src/common/middlewares';
import { MiddlewareController } from './middleware.controller';

@Module({
  controllers: [MiddlewareController],
})
export class MiddlewareModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    // Use authentication midddleware
    consumer.apply(AuthMiddleware).forRoutes('api');
  }
}
