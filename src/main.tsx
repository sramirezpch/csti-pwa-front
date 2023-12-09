import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import HomeView from "./views/HomeView.tsx";
import Recharge from './views/RechargeView.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: "/recargas",
    element: <Recharge />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="max-w-lg mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
