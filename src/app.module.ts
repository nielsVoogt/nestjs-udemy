import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
