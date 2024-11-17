import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  async create(dto: CreateQuestionDto): Promise<Question> {}
}
