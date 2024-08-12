import Matches_time from "../../matches/matches time/matches_time";
import TeamMatch from "./teamMatchs";
import Button from "../../matches/button/button";
export default function AllMatchs(){
    return(
        <div className="border-b-2 border-slate-500">
            <div className="w-screen flex items-center justify-between px-10 mb-10 ">
                <div className="flex items-center gap-7">
                    <TeamMatch />
                    <Matches_time></Matches_time>
                    <div className="ml-10 mb-5">
                        <p className="text-green-600 text-lg font-medium">Sân Hồng Anh</p>
                        <p>Hải Bối, Đông Anh, Hà Nội</p>
                    </div>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
            <div className="w-screen flex items-center justify-between px-10 mb-10 ">
                <div className="flex items-center gap-7">
                    <TeamMatch />
                    <Matches_time></Matches_time>
                    <div className="ml-10 mb-5">
                        <p className="text-green-600 text-lg font-medium">Sân Hồng Anh</p>
                        <p>Hải Bối, Đông Anh, Hà Nội</p>
                    </div>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
            <div className="w-screen flex items-center justify-between px-10 mb-10 ">
                <div className="flex items-center gap-7">
                    <TeamMatch />
                    <Matches_time></Matches_time>
                    <div className="ml-10 mb-5">
                        <p className="text-green-600 text-lg font-medium">Sân Hồng Anh</p>
                        <p>Hải Bối, Đông Anh, Hà Nội</p>
                    </div>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}