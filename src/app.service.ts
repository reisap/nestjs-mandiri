import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  createGreeting(): string {
    return 'create greeting';
  }
}
