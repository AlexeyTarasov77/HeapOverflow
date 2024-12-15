import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IQuestion } from "../../../shared/api/questions";
import { fetchQuestion } from "../api/main";
import { Badge } from "../../../shared/ui";

export function QuestionPage() {
    const [question, setQuestion] = useState<IQuestion | null>(null)
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()
    useEffect(() => {
        fetchQuestion(Number(id)).then(question => setQuestion(question))
        .catch(err => setError(err.message)) 
    }, [id])
    return (
       <>
           {question && (
            <div className="p-3 flex flex-col">
                <div className="font-bold text-2xl">{question.title}</div>
                <div className="mt-5 flex gap-4 text-lg">
                    <div><span className="text-slate-400">Asked: </span>{question.createdAt.toLocaleString()}</div>
                    <div><span className="text-slate-400">Modified: </span>{question.updatedAt.toLocaleString()}</div>
                </div>
                <div className="border border-slate-400"></div>
                <div className="text-lg">{question.body}</div>
                <div className="mt-5 flex gap-3">
                    {question.tags.map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                    ))}
                </div>
            </div>
           )}
           {error && <p className="text-red-500">{error}</p>}
       </>
    )
}