import EV from "../Evting/EV";
import MainPicture from "../MainPicture/MainPicture";
import Matches from "../matches/matches";

export default function HomePage(){
    return (
        <div>
            <MainPicture></MainPicture>
            <Matches />
            <EV />
        </div>
    )
}