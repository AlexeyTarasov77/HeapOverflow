import { LayoutPage } from "../pages/layout";
import { MainPage } from "../pages/main";
import { QuestionPage } from "../pages/question-detail";
import { QuestionsListPage } from "../pages/questions-list";

export const routes = [
  {
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/questions",
        element: <QuestionsListPage />
      },
      {
        path: "/questions/:id",
        element: <QuestionPage />
      }
    ],
  },
];
