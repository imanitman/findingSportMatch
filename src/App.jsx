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

function App() {
  return (
    <div >
      <Header></Header>
      <MainPicture></MainPicture>
      <div className="text-center">
      <Matches></Matches>
      <div className="flex">
        <div className="w-1/12"></div>
        <div className="w-10/12"><EV></EV></div>
        <div className="w-1/12"></div>

      </div>

      </div>
    </div>
  )
}
export default App;