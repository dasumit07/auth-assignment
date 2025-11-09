import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Myprofile from "../Pages/Myprofile";
import Loading from "../Pages/Loading";
import ResetPass from "../Pages/ResetPass";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Notfound from "../Pages/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            index: true,
            element: <Home></Home>,
            loader: () => fetch('/populardata.json'),
            hydrateFallbackElement: <Loading></Loading>

        },
        {
            path: "/services",
            element: <Services></Services>,
            loader: () => fetch('/data.json'),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path:"/service/:id",
            element:<PrivateRoute>
               <ServiceDetails></ServiceDetails>
               </PrivateRoute>,
            loader: () => fetch('/data.json'),
            hydrateFallbackElement: <Loading></Loading>
           

        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/myprofile",
          element: <Myprofile></Myprofile>
        },
        {
          path: "/resetpass",
          element: <ResetPass></ResetPass>
        },
        {
          path: "/updateprofile",
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: "*",
          element: <Notfound></Notfound>
        }
    ],
  },
]);