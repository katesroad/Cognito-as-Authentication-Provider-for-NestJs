import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/common/auth';

@Controller('guard')
export class GuardController {
  @UseGuards(JwtGuard)
  @Get()
  getGuardPath() {
    return 'This is guard path';
  }
}
