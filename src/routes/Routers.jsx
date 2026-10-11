import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import AllProject from "../components/main/project/AllProject";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/projects",
    Component: AllProject,
  },
]);
