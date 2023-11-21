import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CostsPage from "pages/CostsPage";
import AboutPage from "pages/AboutPage";
import UidPage from "pages/UidPage";

import ErrorPage from "router/error";
import LayoutDispatcher from "layouts";

import { rootLoader } from "router/loaders/root";
import { uidLoader } from "router/loaders/uid";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <LayoutDispatcher />,
      loader: rootLoader,
      children: [
        {
          index: true,
          element: <CostsPage />,
        },
        {
          path: "costs",
          element: <CostsPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "uid/:id",
          loader: uidLoader,
          element: <UidPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
