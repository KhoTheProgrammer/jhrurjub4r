import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Lab/Login";
import Home from "./Components/Lab/Home";
import SignUp from "./SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Home",
    element: <Home></Home>
  }
]);

export default router;
