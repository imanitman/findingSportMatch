import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Login/Signup.jsx'
import AllMatchs from './Component/DetailSport/Football/allMatch.jsx'
import Football from './Component/DetailSport/Football/Football.jsx'
import RelatedMatchs from './Component/DetailMatch/DetailMatch.jsx'
import MyMatch from './Component/MyMatch/MyMatch.jsx'

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
    element:<Football></Football>
  },
  {
    path:"/football/detail",
    element:<RelatedMatchs></RelatedMatchs>
  },
  {
    path:"/mymatch",
    element:<MyMatch />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
