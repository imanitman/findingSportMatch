import EV from "./Component/Evting/EV.jsx";
import Header from "./Component/Header/Header";
import MainPicture from "./Component/MainPicture/MainPicture";
import Matches from "./Component/matches/matches.jsx";
import Page2DateBar from "./Component/Page2Detail/Page2DateBar.jsx";
import Slideshow from "./Component/Page3ImageSlideBar/Slideshow.jsx";
import TeamVS from "./Component/Page3ImageSlideBar/TeamVS.jsx";
import ContentPlace from "./Component/Page3ImageSlideBar/ContentPlace.jsx";
import AddressMap from "./Component/MapSystem/AddressMap.jsx";
import SelectOption from "./Component/MapSystem/SelectOption.jsx";
import SelectAddress from "./Component/MapSystem/SelectAddress.jsx";
import SportGenre from "./Component/MatchesRequestPopUP/SportsGenre.jsx";
import MatchesRequest from "./Component/MatchesRequestPopUP/MatchesRequest.jsx";
import MatchesRequestPopUP from "./Component/MatchesRequestPopUP/MatchesRequestPopUp.jsx";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Component/Layout/index.jsx";
import HomePage from "./Component/HomePage/homepage.jsx";
import Football from "./Component/DetailSport/Football/Football.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Login/Signup.jsx";
import RelatedMatchs from "./Component/DetailMatch/DetailMatch.jsx";
import Profile from "./Component/Profile/Profile.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="football" element={<Football />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="detail" element={<RelatedMatchs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="matchs/create" element={<MatchesRequestPopUP />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App;