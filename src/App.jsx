import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Component/Layout/index.jsx";
import HomePage from "./Component/HomePage/homepage.jsx";
import Football from "./Component/DetailSport/Football/Football.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Login/Signup.jsx";
import RelatedMatchs from "./Component/DetailMatch/DetailMatch.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import CreateTeam from "./Component/Team/CreateTeam.jsx";
import MatchesRequestPopUP from "./Component/MatchesRequestPopUP/MatchesRequestPopUp.jsx"
import CreateMatch from './Component/CreateMatch/CreateMatch.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="football" element={<Football />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="matchs/create" element={<MatchesRequestPopUP />} />
          <Route path="create/team" element={<CreateTeam />}></Route>
          <Route path="create/match" element={< CreateMatch/>} />
          <Route path="detail/match/:id" element={<RelatedMatchs/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App;