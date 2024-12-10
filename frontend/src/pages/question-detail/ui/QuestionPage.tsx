import { useParams } from "react-router-dom";

export function QuestionPage() {
    const { id } = useParams()
    return (
        <div>Question with id {id}</div>
    )
}