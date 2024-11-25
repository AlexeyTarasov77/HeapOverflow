import { Layout } from "../pages/layout";
import { mainPageRoute } from "../pages/main";
import { questionsListPageRoute } from "../pages/questions-list";



export const routes = [
    {
      element: <Layout />,
      children: [mainPageRoute, questionsListPageRoute]
    },
  ]