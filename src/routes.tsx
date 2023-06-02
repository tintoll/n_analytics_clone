import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts";
import Login from "./pages/Login";
import NotFound from "./pages/Error/NotFound";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "report",
        element: <Report />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
