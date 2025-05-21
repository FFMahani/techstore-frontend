import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

export default function App() {
  return useRoutes(routes);
}
