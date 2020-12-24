import { Controller, Get } from '@nestjs/common';

@Controller('middleware')
export class MiddlewareController {
  @Get()
  getMiddlware() {
    return 'This middleware path';
  }
}
