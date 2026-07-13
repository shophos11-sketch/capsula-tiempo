import { createBrowserRouter } from "react-router";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Catalog,
  },
  {
    path: "/product/:id",
    Component: ProductDetail,
  },
]);
