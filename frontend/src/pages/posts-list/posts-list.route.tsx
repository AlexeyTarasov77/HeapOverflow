import { RouteObject } from "react-router-dom";
import { PostsList } from "./posts-list.ui";


export const postsListRoute: RouteObject = {
    path: "/posts",
    element: <PostsList />
}