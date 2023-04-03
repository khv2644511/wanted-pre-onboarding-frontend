import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/HOC/auth/ProtectedRoute";
import GlobalStyle from "./components/style/GlobalStyled";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Todo from "./pages/Todo/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  { index: true, path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/todo",
    element: (
      <ProtectedRoute require={true}>
        <Todo />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
