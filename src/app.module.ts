import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LuckydrawModule } from './luckydraw/luckydraw.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LuckydrawModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
