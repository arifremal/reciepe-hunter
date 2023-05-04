import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import ChefLayout from "../Layouts/ChefLayout";
import Chefs from "../pages/Chefs";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

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
    element: <ChefLayout></ChefLayout>,
    loader: ({ params }) =>
    fetch(`http://localhost:5000/chef/${params._id}`),
    children: [
      {
        path: ":_id",
        element: <Chefs></Chefs>,
       
      },
    ],
  },
]);
export default router;
