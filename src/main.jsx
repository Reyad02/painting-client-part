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
import List_Craft from './components/List_Craft/List_Craft.jsx';
import Error from './Error/Error.jsx';

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
      },
      {
        path: "/add",
        element: <Add_Craft></Add_Craft>,
      },
      {
        path: "/list",
        element: <List_Craft></List_Craft>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
