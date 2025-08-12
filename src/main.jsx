import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import MusafirTraveller from "./pages/MusafirTraveller";
import Pathchakro from "./pages/Pathchakro";
import HomaRoom from "./pages/HomaRoom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "musafir-traveller", element: <MusafirTraveller /> },
      { path: "pathchakro", element: <Pathchakro /> },
      { path: "homa-room", element: <HomaRoom /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
