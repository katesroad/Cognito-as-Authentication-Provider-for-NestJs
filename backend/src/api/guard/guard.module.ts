import { Module } from '@nestjs/common';
import { GuardController } from './guard.controller';

@Module({
  controllers: [GuardController],
})
export class GuardModule {}
