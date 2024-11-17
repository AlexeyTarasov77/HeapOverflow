export class CreateQuestionDto {
  readonly title: string;
  readonly body: string;
  readonly authorId: number;
  readonly tags: string[];
}
