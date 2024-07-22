import React,{ useState } from "react";
import Team from './team/team.jsx'
import Tournament from "./tournament/tournament.jsx";
import Live_icon from "./live-icon/live_icon.jsx";
import Caster from "./caster/caster.jsx";
import Score from "./score/score.jsx";
import Matches_time from "./matches time/matches_time.jsx";
import Button from "./button/button.jsx";
import './matches.scss'

function Matches(){
    return (
        <div className="Matches">
            {/* <div className="live_icon">
                <Live_icon />
            </div> */}
            <Tournament />
            <div className="score">
                <Team />
                <Matches_time />
                <Team />
            </div>
            <div className="foot">
                <Caster />
                <Button />
            </div>
        </div>
    )
}

export default Matches;