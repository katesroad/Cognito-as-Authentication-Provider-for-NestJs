import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResInterceptor } from './common/interceptors/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResInterceptor());

  const { port } = app.get(ConfigService).get('app');
  await app.listen(port, () => {
    console.log(`
      =================================================================
            App started at port ${port}
      =================================================================
    `);
  });
}
bootstrap();
