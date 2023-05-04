import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import ChefLayout from "../Layouts/ChefLayout";
import Chefs from "../pages/Chefs";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Errorpage from "../ErrorPage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     
    ],
  },
  {
    path:'blog',
    element:<Blog></Blog>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/registration',
    element:<Register></Register>
  },
  {
    path: "chef/:_id",
    element: <ProtectedRoute><ChefLayout></ChefLayout></ProtectedRoute>,
    loader: ({ params }) =>
    fetch(`https://next-chef-server-arifremal.vercel.app/chef/${params._id}`),
    children: [
      {
        path: ":_id",
        element: <Chefs></Chefs>,
       
      },
    ],
  },
]);
export default router;
