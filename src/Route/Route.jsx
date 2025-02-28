import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ServiceList from "../Pages/ServiceList";
import Ausbildung from "../Pages/Ausbildung";
import Recruiters from "../Pages/Recruiters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <ServiceList></ServiceList>,
      },
      {
        path: "/ausbildung",
        element: <Ausbildung></Ausbildung>,
      },
      {
        path: "/recruiter",
        element: <Recruiters></Recruiters>,
      },
    ],
  },
]);
