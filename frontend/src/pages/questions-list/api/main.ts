import { SERVER_URL } from "../../../app/constants";
import { IQuestion } from "../../../shared/api/questions";

export async function fetchQuestionsList(queryParams: { sort?: string, tags?: string[] }): Promise<IQuestion[]> {
    const params = new URLSearchParams();
    if (queryParams.sort) {
      params.append("sort", queryParams.sort);
    }
    if (queryParams.tags) {
      queryParams.tags.forEach(tag => params.append("tags", String(tag)));
    }
    const url = new URL(`${SERVER_URL}/questions`);
    url.search = params.toString();
    return fetch(url)
      .then(resp => resp.json())
      .then((questions: IQuestion[]) => {
        questions.forEach(q => {
            q.createdAt = new Date(q.createdAt)
            q.updatedAt = new Date(q.updatedAt)
        })
        return questions
      }).catch((err) => {
        console.error(err)
        throw err;
      })
}