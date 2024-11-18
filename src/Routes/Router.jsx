import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand";
import AuthLayout from "../Main/AuthLayout";
import Login from "../Pages/Login";
import Rgaister from "../Pages/Rgaister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../Brand.json')
      },
      {
       path: "/brand",
       element: <Brand></Brand>
      },
      {
           path: "/login",
           element: <Login></Login>,
      },
      
    ]
    
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
       path: "/auth/login",
       element: <Login></Login>,
      },
      {
       path: "/auth/register",
       element: <Rgaister></Rgaister>
      },
          
    ]
  }
  
  
]);

export default router;