import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './components/MainLayout/Layout.jsx';
import Home from './components/Pages/Home.jsx';
import Register from './components/Pages/Register/Register.jsx';
import Login from './components/Pages/Login/Login.jsx';
import HeroLogin from './components/Pages/HeroLogin/HeroLogin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: ([
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/heroregister",
        element:<HeroLogin></HeroLogin>
      }
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
