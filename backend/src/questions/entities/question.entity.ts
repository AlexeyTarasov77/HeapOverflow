import { Content } from 'src/core/entities/content.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Answer } from './answer.entity';

@Entity()
export class Question extends Content {
  @Column({ unique: true })
  title: string;

  @ManyToOne(() => User, (user: User) => user.questions)
  author: User;

  @Column('text', { array: true })
  tags: string[];

  // eslint-disable-next-line prettier/prettier
  @OneToMany(() => Answer, (answer: Answer) => answer.bestForQuestion, { nullable: true })
  bestAnswer: Answer;

  @OneToMany(() => Answer, (answer: Answer) => answer.question)
  answers: Answer[];
}
