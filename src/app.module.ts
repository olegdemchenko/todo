import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(), TasksModule],
})
export class AppModule {}
