import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./components/pages/Home";
import Electronics from "./components/pages/Electronics";
import Jewelery from "./components/pages/Jewelry";
import MenClothing from "./components/pages/MenClothing";
import WomenClothing from "./components/pages/WomenClothing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/electronics",
          element: <Electronics />,
        },
        {
          path: "/jewelry",
          element: <Jewelery />,
        },
        {
          path: "/men-clothing",
          element: <MenClothing />,
        },
        {
          path: "/women-clothing",
          element: <WomenClothing />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
