import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "my-react-app/src/Components/Home",
    element: <Home />
  },
  {
    path: "/Login",
    element: <login />
  }
]);

export default router;
