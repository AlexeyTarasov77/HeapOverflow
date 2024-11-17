import { Inject, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';
import { AlreadyExistsError } from 'src/core/storage';

class QuestionsServiceError extends Error {}

export class QuestionAlreadyExistsError extends QuestionsServiceError {}

export const IQuestionsRepositoryToken = Symbol('IQuestionsRepository');

export interface IQuestionsRepository {
  insert(dto: CreateQuestionDto): Promise<Question>;
}

@Injectable()
export class QuestionsService {
  constructor(
    @Inject(IQuestionsRepositoryToken)
    private questionsRepo: IQuestionsRepository,
  ) {}
  async create(dto: CreateQuestionDto): Promise<Question> {
    return this.questionsRepo.insert(dto).catch((err) => {
      if (err instanceof AlreadyExistsError) {
        throw new QuestionAlreadyExistsError(err.message);
      }
      throw err;
    });
  }
}
