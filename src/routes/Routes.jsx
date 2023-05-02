import { createBrowserRouter } from "react-router-dom"
import Main from "../Layouts/Main"
import Home from "../pages/Home/Home"
import ChefLayout from "../Layouts/ChefLayout"
import Chefs from "../pages/Chefs"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            
        ]
    },{
        path: 'chef',
        element:<ChefLayout></ChefLayout>,
        children:[
            {
                path: ':id',
                element:<Chefs></Chefs>
            }
        ]
    }
])
export default router