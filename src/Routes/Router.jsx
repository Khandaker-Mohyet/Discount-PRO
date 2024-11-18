import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand";

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
    ]
  },
  {
    path: "/brand",
    element: <Brand></Brand>
  }
  
]);

export default router;