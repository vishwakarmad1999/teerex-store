import { createBrowserRouter } from "react-router-dom";
import Home from "@/views/home";
import Cart from "@/views/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
