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
    <>
      <Header></Header>
      <MainPicture></MainPicture>
      <Matches></Matches>
      <EV></EV>
      {/* <Slideshow /> */}
      {/* <TeamVS/> */}
      {/* <ContentPlace /> */}
      {/* <SelectMap /> */}
      {/* <AddressMap /> */}
      {/* <SelectOption /> */}
      {/* <SelectAddress /> */}
      {/* <SportGenre /> */}
      {/* <MatchesRequest /> */}
      {/* <MatchesRequestPopUP /> */}
    </>
  )
}
export default App;