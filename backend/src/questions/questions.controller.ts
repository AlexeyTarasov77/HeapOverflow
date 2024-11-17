import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  QuestionAlreadyExistsError,
  QuestionsService,
} from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}
  @Post()
  async create(@Body() dto: CreateQuestionDto) {
    return this.questionsService
      .create(dto)
      .then((question) => {
        return { question };
      })
      .catch((err) => {
        if (err instanceof QuestionAlreadyExistsError) {
          throw new HttpException(err.message, HttpStatus.CONFLICT);
        }
      });
  }
}
