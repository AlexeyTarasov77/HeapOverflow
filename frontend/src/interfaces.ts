export interface IQuestion {
    id: number;
    title: string;
    body: string;
    author: IQuestionAuthor;
    tags: String[];
    answersCount: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IQuestionAuthor {
    username: string;
    imageUrl: string;
}