import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import {
  QuestionAlreadyExistsError,
  QuestionsService,
} from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FindAllQuestionsDto } from './dto/find-all-questions.dto';
import { UserNotFoundError } from 'src/users/users.service';

@Controller('/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}
  @Post()
  async create(@Body() dto: CreateQuestionDto) {
    console.log(dto);
    return this.questionsService
      .create(dto)
      .then((question) => {
        return { question };
      })
      .catch((err) => {
        const fail = (code: number) => {
          throw new HttpException(err.message, code);
        };
        switch (true) {
          case err instanceof QuestionAlreadyExistsError:
            fail(HttpStatus.CONFLICT);
          case err instanceof UserNotFoundError:
            fail(HttpStatus.BAD_REQUEST);
        }
        throw err;
      });
  }

  @Get()
  async findAll(@Query() dto: FindAllQuestionsDto) {
    return this.questionsService.findAll(dto);
  }
}
