import Matches_time from "../../matches/matches time/matches_time";
import TeamMatch from "./teamMatchs";

export default function AllMatchs(){
    return(
        <div className="flex ">
            <div className="flex items-center gap-5">
                <TeamMatch />
                <Matches_time></Matches_time>
                <div className="ml-10 mb-5">
                    <p className="text-green-600">Sân Hồng Anh</p>
                    <p>Hải Bối, Đông Anh, Hà Nội</p>
                </div>
            </div>
        </div>
    )
}