import { LayoutPage } from "../pages/layout";
import { MainPage } from "../pages/main";
import { PostsListPage } from "../pages/posts-list";
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
    ],
  },
  {
    path: "/posts",
    element: <PostsListPage />
  }
];
