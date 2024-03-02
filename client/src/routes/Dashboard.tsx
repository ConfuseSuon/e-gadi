import Dashboard from "../container/dashboard";
import NewElectricCar from "../container/dashboard/new-electric-car";
import AddNewElectricCar from "../container/dashboard/new-electric-car/AddNewElectricCar";
import EditNewElectricCar from "../container/dashboard/new-electric-car/EditNewElectricCar";

import DashboardLayout from "../layout/dashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const DashboardRoutes = {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      {" "}
      <DashboardLayout />{" "}
    </ProtectedRoute>
  ),
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/new-electric-car",
      element: <NewElectricCar />,
    },
    {
      path: "/dashboard/new-electric-car/add",
      element: <AddNewElectricCar />,
    },
    {
      path: "/dashboard/new-electric-car/edit",
      element: <EditNewElectricCar />,
    },
  ],
};

export default DashboardRoutes;
