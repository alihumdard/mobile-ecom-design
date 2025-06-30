import URLS from "../../config/urls.config";
import Category from "../../pages/Category";
import Home from "../../pages/Home";

export const publicRoutes = [
     {
        path: "/",
        element: Home,
    },
        {
        path: URLS.Category,
        element: Category,
    },
]