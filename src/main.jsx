import "./index.scss"
import "@fontsource/montserrat"
import "@fontsource-variable/roboto-slab"

import {
  About,
  Administration,
  AdministrationBlog,
  AdministrationProducts,
  Auth,
  Blog,
  Contact,
  Home,
  Products,
} from "./screens/index.jsx"

import PageNotFound from "./screens/not-fount/index.jsx"
import React from "react"
import ReactDOM from "react-dom/client"
import { RootLayout } from "./layout/root.jsx"
import { RoutePrivate } from "./components/index.jsx"
import { RouterProvider } from "react-router"
import { Toaster } from "sonner"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/administration",
        element: (
          <RoutePrivate route={"/auth"}>
            <Administration />
          </RoutePrivate>
        ),
      },
      {
        path: "/administration/products",
        element: (
          <RoutePrivate route={"/auth"}>
            <AdministrationProducts />
          </RoutePrivate>
        ),
      },
      {
        path: "/administration/blog",
        element: (
          <RoutePrivate route={"/auth"}>
            <AdministrationBlog />
          </RoutePrivate>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
)
