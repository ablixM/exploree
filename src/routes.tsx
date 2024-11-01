import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import SavedPage from "./pages/SavedPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <HomePage />,
      },
      {
        path: "/Search",
        element: <SearchPage />,
      },
      {
        path: "/Applications",
        element: <ApplicationPage />,
      },
      {
        path: "/Saved",
        element: <SavedPage />,
      },
      {
        path: "/Profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
