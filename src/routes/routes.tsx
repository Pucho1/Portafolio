import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        lazy: async () => {
          const { default: Home } = await import("../pages/Home");
          return { Component: Home };
        },
      },
      // {
      //   path: "/product/:id",
      //   lazy: async () => {
      //     const { default: ProductDetail } = await import("../pages/ProductDetail");
      //     return { Component: ProductDetail };
      //   },
      // },
      // {
      //   path: "/user",
      //   lazy: async () => {
      //     const { default: UserPage } = await import("../pages/UserPage/UserPage");
      //     return { Component: UserPage };
      //   },
      // },
      // {
      //   path: "/cart",
      //   lazy: async () => {
      //     const { default: ShopCart } = await import("../pages/ShopCar/ShopCart");
      //     return { Component: ShopCart };
      //   },
      // },
      {
        path: "/",
        loader: () => redirect("/home"),
      },
      {
        path: "*",
        loader: () => redirect("/home"),
      },
    ],
  },
  
]);
