import { createBrowserRouter, RouterProvider } from "react-router";

import { Homepage } from "./common/homepage";
import { HomepageTailwind } from "./tailwind/pages/homepage-tailwind";
import { HomepageStyledComponents } from "./styled-components/pages/homepage-styled-components";
import { ErrorPage } from "./common/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/tailwind",
    element: <HomepageTailwind />,
  },
  {
    path: "/styled-components",
    element: <HomepageStyledComponents />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
