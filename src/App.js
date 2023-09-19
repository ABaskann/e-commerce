import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeLayout from "./components/layouts/HomeLayout";
import Home, { dataLoader } from "./components/pages/Home";
import Electronics from "./components/pages/Electronics";
import Jewelery from "./components/pages/Jewelry";
import MenClothing from "./components/pages/MenClothing";
import WomenClothing from "./components/pages/WomenClothing";
import DetailLayout from "./components/layouts/DetailLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader:dataLoader
        },
        {
          path: "electronics",
          element: <Electronics />,
        },
        {
          path: "jewelry",
          element: <Jewelery />,
          
        },
        {
          path: "men-clothing",
          element: <MenClothing />,
        },
        {
          path: "women-clothing",
          element: <WomenClothing />,
          
        },       
      ],
       
    },
    {
      path:"product/:product_id",
      element:<DetailLayout/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
