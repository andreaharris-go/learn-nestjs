import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LuckydrawController } from './luckydraw.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LuckydrawEntity } from './luckydraw.entity';
import { LuckydrawService } from './luckydraw.service';

@Module({
  imports: [TypeOrmModule.forFeature([LuckydrawEntity])],
  providers: [LuckydrawService],
  controllers: [
    LuckydrawController
  ]
})
export class LuckydrawModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        {path: 'luckydraws', method: RequestMethod.GET},
        {path: 'luckydraws', method: RequestMethod.POST});
  }
}
