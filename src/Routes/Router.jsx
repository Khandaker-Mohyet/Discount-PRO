import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand";
import AuthLayout from "../Main/AuthLayout";
import Login from "../Pages/Login";
import Rgaister from "../Pages/Rgaister";
import Details from "../Components/Details";
import About from "../Pages/About";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";

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
       element: <Brand></Brand>,
       loader: ()=> fetch('../Brand.json')
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ()=> fetch('../Brand.json')
      },
      {
        path: "/myProfile",
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/about",
        element: <About></About>
      }
      
      
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
  },
  {
    path: "*",
    element: <div className="flex flex-col items-center justify-center">
      <div className="text-center text-3xl font-bold">Page Not Found</div>
      <Link to="/"><button className="btn btn-primary text-center">Go Home</button></Link>
    </div>,
  },
  
  
]);

export default router;