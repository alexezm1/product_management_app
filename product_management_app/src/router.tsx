import { createBrowserRouter } from "react-router-dom";
import { newProductAction } from "./actions";
import MainLayout from "./layouts/MainLayout";
import NewProduct from "./pages/NewProduct";
import Products from "./pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
    ],
  },
]);
