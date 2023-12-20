import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { firstValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import * as process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV || '.env'],
      isGlobal: true,
    }),
    UsersModule,
    ProductsModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        const tasks = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const data = await (await firstValueFrom(tasks)).data;
        return data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
