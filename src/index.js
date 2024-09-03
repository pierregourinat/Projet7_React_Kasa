import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import About from "./routes/About";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogementDetail from "./routes/LogementDetail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/logement/:id",
      element: <LogementDetail />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  {
    basename: "/",
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
