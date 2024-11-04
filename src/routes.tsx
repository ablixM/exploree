import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import ApplicationPage from "./pages/ApplicationPage.tsx";
import SavedPage from "./pages/SavedPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import LogInPage from "./pages/LogInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import AdditionalInfosPage from "./pages/AdditionalInfosPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
      {
        path: "/Login",
        element: <LogInPage />,
      },
      {
        path: "/SignUp",
        element: <SignUpPage />,
      },
      {
        path: "/AdditionalInfo",
        element: <AdditionalInfosPage />,
      },
    ],
  },
]);

export default router;
