import { Suspense } from "react";
import Home from "../container/salesground/home";
import NewCars from "../container/salesground/new-cars";
import UsedCars from "../container/salesground/used-cars";
import AppLayout from "../layout";

const MainRoutes = {
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: "",
      element: (
        <Suspense fallback="Loading...">
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/salesground/new-cars",
      element: (
        <Suspense fallback="Loading...">
          <NewCars />
        </Suspense>
      ),
    },
    {
      path: "/salesground/used-cars",
      element: (
        <Suspense fallback="Loading...">
          <UsedCars />
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
