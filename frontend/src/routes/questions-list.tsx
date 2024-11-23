import { useState } from "react";
import { Button } from "../components/button";
import { KeyboardEvent } from "react";

export function QuestionsList() {
    const [tags, setTags] = useState<String[]>([]);
    const [tagsInputVal, setTagsInputVal] = useState<string>("");
  
    const tagsInputHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case " ":
            if (tagsInputVal.trim() !== "") {
                setTags([...tags, tagsInputVal.trim()]);
                setTagsInputVal("")
            }
            break;
        case "Enter":
            if (tags.length) {
                // TODO: get new questions filtered by tags
                setTags([])
                setTagsInputVal("");
            }
        }
    };
  
    const removeTag = (index: number) => {
      setTags(tags.filter((_, i) => i !== index));
    };    
    const [questions, setQuestions] = useState([])
    return (
        <div className="p-4">
            <div className="flex justify-between mb-3">
                <h2 className="font-bold text-3xl text-black">All questions</h2>
                <div><Button size="lg">Ask question</Button></div>
            </div>
            <div className="ml-auto flex gap-3 items-center">
                <div className="border border-slate-300 rounded-sm flex gap-3 p-1">
                    <FilterButton>Newest</FilterButton>
                    <FilterButton>Most answers</FilterButton>
                    <FilterButton>Unanswered</FilterButton>
                </div>
                <div>
                    <div className="flex flex-wrap items-center gap-2 p-1 border border-gray-300 rounded max-w-xs">
                        {tags.map((tag, index) => (
                            <div key={index} className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded">
                            <span>{tag}</span>
                            <button
                                onClick={() => removeTag(index)}
                                className="text-slate-500 transition-colors hover:text-red-600 focus:outline-none"
                            >
                                &times;
                            </button>
                            </div>
                        ))}
                        <input
                            type="text"
                            value={tagsInputVal}
                            onChange={(e) => setTagsInputVal(e.target.value)}
                            onKeyDown={tagsInputHandleKeyDown}
                            className="flex-grow outline-none px-2 py-1"
                            placeholder="Tags"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function FilterButton({ children }: { children: string }) {
    // TODO: get new filtered questions on click
    return (
        <button className="text-sm text-slate-500 transition-colors p-1 hover:bg-slate-100">
            {children}
        </button>
    )
}