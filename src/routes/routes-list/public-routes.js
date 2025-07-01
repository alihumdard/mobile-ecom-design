import URLS from "../../config/urls.config";
import Category from "../../pages/Category";
import Home from "../../pages/Home";
import Productdetail from "../../pages/Product-detail";

export const publicRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: URLS.Category,
    element: Category,
  },
  {
    path: URLS.ProductDetail,
    element: Productdetail,
  },
];
