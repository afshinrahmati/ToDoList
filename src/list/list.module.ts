import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { TypeOrmModule} from '@nestjs/typeorm';

import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestjs_Todolist')],
  controllers: [ListController],
  providers: [ListService]
})
export class ListModule {}

