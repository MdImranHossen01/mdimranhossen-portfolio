// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your page components
import MusafirTraveller from "./pages/MusafirTraveller.jsx";
import Pathchakro from "./pages/Pathchakro.jsx";
import HomaRoom from "./pages/HomaRoom.jsx";

// Import a new component that will hold your main page sections
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App now acts as a layout with Navbar and Footer
    children: [
      {
        index: true, // This is the default child route for "/"
        element: <HomePage />,
      },
      {
        path: "/project/musafir",
        element: <MusafirTraveller />,
      },
      {
        path: "/project/pathchakro",
        element: <Pathchakro />,
      },
      {
        path: "/project/homa-room",
        element: <HomaRoom />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
