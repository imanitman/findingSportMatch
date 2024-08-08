import EV from "./Component/Evting/EV.jsx";
import Header from "./Component/Header/Header";
import MainPicture from "./Component/MainPicture/MainPicture";
import Matches from "./Component/matches/matches.jsx";

function App() {
  return (
    <div className="max-w-full">
      <Header></Header>
      <MainPicture></MainPicture>
      <Matches></Matches>
      <EV></EV>
    </div>
  )
}
export default App;