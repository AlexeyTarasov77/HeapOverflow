import { Link } from "react-router-dom";
import { IQuestion } from "../interfaces";
import { formatDate } from "../utils";
import { Badge } from "./";

export function Question({ questionData }: { questionData: IQuestion }) {
  return (
    <div className="flex gap-3 p-5">
      <div className="flex flex-col">
        <Badge color="blue" size="xs">
          {questionData.answersCount} answers
        </Badge>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl text-blue-500 font-semibold">
          <Link to={`/questions/${questionData.id}`}>{questionData.title}</Link>
        </h3>
        <p className="text-slate-400 truncate">{questionData.body}</p>
        <div className="flex justify-between mt-3 items-center">
          <div className="flex gap-2">
            {questionData.tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img
                src={
                  questionData.author.imageUrl ||
                  `https://robohash.org/${questionData.id}.png?size=50x50`
                }
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="text-sm text-blue-600">
              {questionData.author.username}
            </div>
            <div className="text-slate-500">
              asked {formatDate(questionData.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
