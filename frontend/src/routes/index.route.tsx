import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { LayoutComponent } from "../components";
import HomePage from "../pages/Home.page.tsx";
import { LoginPage, RegisterPage } from "../pages";
import { useCheckSession } from "@/hooks/useAuth.ts";
import useAuthStore from "@/store/useAuthStore.ts";
import { useEffect } from "react";
import { LoadingComponent } from "@/components";
import { DashboardPage } from "@/pages";
import TaskPage from "@/pages/Tasks.page.tsx";

const IndexRoute = () => {
  const { login, user, logout, token } = useAuthStore();

  const { data, isLoading, error } = useCheckSession();

  useEffect(() => {
    if (data) {
      login(data.data.user, token as string);
    } else {
      logout();
    }
    if (error) {
      logout();
    }
  }, [data, error, token, login, logout]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      children: [
        {
          path: "/",
          element: user ? <HomePage /> : <Navigate to={"/login"} />,
          children: [
            {
              index: true,
              element: user ? <DashboardPage /> : <Navigate to={"/login"} />,
            },
            {
              path: "tasks",
              element: user ? <TaskPage /> : <Navigate to={"/login"} />,
            },
          ],
        },
        {
          path: "login",
          element: user ? <Navigate to={"/"} /> : <LoginPage />,
        },
        {
          path: "register",
          element: user ? <Navigate to={"/"} /> : <RegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default IndexRoute;
