import Team from "../matches/team/team"
import Matches_time from "../matches/matches time/matches_time"
export default function SameDayMatch() {
    return (
        <div className="pl-10 mb-5 border-b-2 border-slate-500">
            <div className="w-1/3 flex items-center gap-14"> 
                
                <div className="ml-5">
                    <button className="w-28 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mb-2">Tham gia</button>
                    <button className="w-28 hover:bg-blue-700 py-2 px-4 rounded">Detail</button>
                </div>
            </div>
        </div>
    )
}