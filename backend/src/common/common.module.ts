import { Module } from '@nestjs/common';
import { AuthModule } from './auth';

@Module({
  imports: [AuthModule],
})
export class CommonModule {}
