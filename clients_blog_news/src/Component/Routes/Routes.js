import { createBrowserRouter } from "react-router-dom";
import Layout from '../Layout/Layout';
import Catagoirys from '../Catagoirys/Catagoirys';
import Home from "../Home/Home";
import Single_items from "../Catagoirys/Catgory_items/Single_items/Single_items";
import Ragister from "../Ragister/Ragister";
import Login from "../Login/Login";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
 export const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        
        {
          path: '/catgori/:id',
          element: <Catagoirys/>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/catgori/${params.id}`);
         
          },
        },
        {
          path:'/news/:ID',
          element:<PrivateRoutes><Single_items></Single_items></PrivateRoutes>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:5000/news/${params.ID}`);
         
          },
        },
        {
          path:'ragister',
          element:<Ragister/>
        },
        {
          path:'login',
          element:<Login/>
        },
      ]
    },
    // {
    //   path:'/login',
    //   element:<Login/>,
    // }
  ])