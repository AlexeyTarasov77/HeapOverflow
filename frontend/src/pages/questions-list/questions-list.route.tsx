import { RouteObject } from "react-router-dom";
import { QuestionsList } from "./questions-list.ui";

export const questionsListPageRoute: RouteObject = {
  path: "/questions",
  element: <QuestionsList />
};
