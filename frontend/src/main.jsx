import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Welcome from "./pages/Welcome/Welcome";
import OtherStars from "./pages/otherstars/OtherStars";
import DescriptionPlus from "./components/DescriptionPlus/DescriptionPlus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/descriptionplus/:id",
    element: <DescriptionPlus />,
  },
  {
    path: "/otherstars",
    element: <OtherStars />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
