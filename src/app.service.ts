import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}
  getHello(): string {
    const apikey = this.config.get('API_KEY');
    const dbName = this.config.get('DATABASE_NAME');
    return 'Hello World!: apikey: ' + apikey + ' Database:' + dbName;
  }
}
