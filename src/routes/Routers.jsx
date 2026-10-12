import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import AllProject from "../components/main/project/AllProject";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        Component: Root,
      },
      {
        path: "/projects",
        Component: AllProject,
      },
    ],
  },
]);
