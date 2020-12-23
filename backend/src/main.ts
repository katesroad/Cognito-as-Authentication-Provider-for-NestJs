import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
