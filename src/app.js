import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));
// const {resId}=useParams();
const routerConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<RouterProvider router={routerConfiguration} />);
