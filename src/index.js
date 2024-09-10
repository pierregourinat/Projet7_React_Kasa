import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import About from "./routes/About";
import reportWebVitals from "./reportWebVitals";
import LogementDetail from "./routes/LogementDetail";

// Configuration du router
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

reportWebVitals();
