import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './Component/Login.jsx'

const routers =  createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
