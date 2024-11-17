import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { getErrCode, isQueryFailed } from 'src/core/typeorm-utils';
import { PostgresErrorCodes } from 'src/core/storage';
import { AlreadyExistsError } from '../core/storage';
import { IQuestionsRepository } from './questions.service';

@Injectable()
export class TypeOrmQuestionsRepository implements IQuestionsRepository {
  constructor(
    @InjectRepository(Question) private questionsRepo: Repository<Question>,
  ) {}

  async insert(dto: CreateQuestionDto): Promise<Question> {
    return this.questionsRepo
      .insert(dto)
      .then((res) => {
        const questionData = { ...res.generatedMaps[0], ...dto };
        return this.questionsRepo.create(questionData);
      })
      .catch((err) => {
        if (
          isQueryFailed(err) &&
          getErrCode(err) === PostgresErrorCodes.UNIQUE_VIOLATION
        ) {
          throw new AlreadyExistsError(
            `Question '${dto.title}' already exists`,
          );
        }
        throw err;
      });
  }
}
