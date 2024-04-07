import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import NewsDetails from "../pages/NewsDetails/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category_id/:_id",
        element: <NewsDetails />,
      },
      // {
      //   path: "/",
      //   element: <Caree />,
      // },
      // {
      //   path: "/",
      //   element: <Home />,
      // },
    ],
  },
]);

export default router;
