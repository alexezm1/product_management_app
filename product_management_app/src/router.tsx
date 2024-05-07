import { createBrowserRouter } from "react-router-dom";
import {
  deleteProductAction,
  editProductAction,
  newProductAction,
  updateAvailabilityAction,
} from "./helpers/actions";
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
        action: updateAvailabilityAction,
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
      {
        path: "products/:id/delete",
        action: deleteProductAction,
      },
    ],
  },
]);
