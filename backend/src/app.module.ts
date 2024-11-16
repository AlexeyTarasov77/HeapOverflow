import { Module } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './config';

@Module({
  imports: [
    QuestionsModule,
    ConfigModule.forRoot({
      load: [configLoader(process.env.CONFIG_PATH)],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
