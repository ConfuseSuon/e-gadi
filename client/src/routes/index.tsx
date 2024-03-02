import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./Dashboard";
import MainRoutes from "./MainRoute";

export default function Routing(): React.ReactElement | null {
  return useRoutes([MainRoutes, DashboardRoutes]);
}
