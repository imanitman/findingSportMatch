import Matches_time from "../../matches/matches time/matches_time";
import TeamMatch from "./teamMatchs";
import Button from "../../matches/button/button";
export default function AllMatchs({data = {}}){
    const allMatches = data;
    console.log(data);
    

    return (
      <div>
        {allMatches && allMatches.length > 0 ? (
          allMatches.map((match, index) => (
            <div key={index} className="border-b-2 border-slate-500">
              <div className="w-full flex items-center justify-between px-6 mb-10">
                <div className="flex items-center gap-7">
                  {/* Render thông tin đội và thời gian trận đấu */}
                  <TeamMatch team={match.team} />
                  <Matches_time time={match.matchTime} date={match.matchDate} className = "w-1/5" />
                  <div className="ml-10 mb-5">
                    <p className="text-green-600 text-lg font-medium">{match.stadiumName}</p>
                    <p>{match.address}</p>
                  </div>
                </div>
                <div>
                  {/* Button tùy chỉnh */}
                  <Button matchId={match.id} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No matches available.</p>
        )}
      </div>
    );
}