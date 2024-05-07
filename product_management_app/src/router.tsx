import { createBrowserRouter } from "react-router-dom";
import { editProductAction, newProductAction } from "./helpers/actions";
import { editProductLoader, productLoader } from "./helpers/loaders";
import MainLayout from "./layouts/MainLayout";
import EditProduct from "./pages/EditProduct";
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
        loader: productLoader,
      },
      {
        path: "products/new",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "products/:id/edit",
        element: <EditProduct />,
        action: editProductAction,
        loader: editProductLoader,
      },
    ],
  },
]);
