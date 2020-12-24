import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserAgent } from 'amazon-cognito-identity-js';
import { JwtGuard } from 'src/common/auth';

@Controller('api')
export class ApiController {
  @UseGuards(JwtGuard)
  @Get()
  sayHelloWorld() {
    return 'Hello, World';
  }
}
