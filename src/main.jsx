import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import All_Craft from './components/All_Craft/All_Craft.jsx';
import Add_Craft from './components/Add_Craft/Add_Craft.jsx';
import List_Craft from './components/List_Craft_Card/List_Craft_Card.jsx';
import Error from './Error/Error.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Login from './components/Login/Login.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import CraftDetails from './components/CraftDetails/CraftDetails.jsx';
import MyCrafts from './components/MyCrafts/MyCrafts.jsx';
import SubCategoryItems from './components/SubCategoryItems/SubCategoryItems.jsx';
import UpdateCraft from './components/UpdateCraft/UpdateCraft.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all",
        element: <All_Craft></All_Craft>,
        loader: () => fetch('https://art-and-craft-server-five.vercel.app/crafts/'),
      },
      {
        path: "/add",
        element: <PrivateRoute><Add_Craft></Add_Craft></PrivateRoute>,
        loader: () => fetch('https://art-and-craft-server-five.vercel.app/subCategory/'),
      },
      {
        path: "/list/email/:email",
        element: <PrivateRoute><MyCrafts></MyCrafts></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-server-five.vercel.app/crafts/email/${params.email}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/:id",
        element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-server-five.vercel.app/crafts/${params.id}`),
      },
      {
        path: "/sub-category/:sub_category",
        element: <SubCategoryItems></SubCategoryItems>,
        loader: ({ params }) => fetch(`https://art-and-craft-server-five.vercel.app/subCategory/${params.sub_category}`),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-server-five.vercel.app/crafts/${params.id}`),
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
