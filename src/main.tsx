import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Layout from "./pages/Dashboard/layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Dashboard/Orders";
import NotFoundPage from "./pages/Dashboard/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "dashboard/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
