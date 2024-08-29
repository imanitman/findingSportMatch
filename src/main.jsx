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
import Profile from './Component/Profile/Profile.jsx'
import AddressMap from './Component/MapSystem/AddressMap.jsx'
import FormInput from './Component/MatchesRequestPopUP/FormInput.jsx'
import MatchesRequestPopUP from './Component/MatchesRequestPopUP/MatchesRequestPopUp.jsx'
import MatchesRequest from './Component/MatchesRequestPopUP/MatchesRequest.jsx'

// const routers =  createBrowserRouter([
//   {
//     path:"/",
//     element:<App></App>
//   },
//   {
//     path:"/login",
//     element:<Login></Login>
//   },
//   {
//     path:"/signup",
//     element:<Signup></Signup>
//   },
//   {
//     path:"/football",
//     element:<Football></Football>
//   },
//   {
//     path:"/detail",
//     element:<RelatedMatchs></RelatedMatchs>
//   },
//   {
//     path:"/mymatch",
//     element:<MyMatch />
//   },
//   {
//     path:"/profile",
//     element:<Profile></Profile>
//   },
//   {
//     path:"/create/matchs",
//     element:<MatchesRequestPopUP />
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
