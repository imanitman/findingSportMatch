import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './Component/Login.jsx'
import Signup from './Component/Signup.jsx'
import AllMatchs from './Component/DetailSport/Football/allMatch.jsx'

const routers =  createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/signup",
    element:<Signup></Signup>
  },
  {
    path:"/football",
    element:<AllMatchs></AllMatchs>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
