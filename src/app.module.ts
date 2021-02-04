import { Module } from '@nestjs/common';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';

import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [ListController],
  providers: [ListService], 
})
export class AppModule {}
