import React from "react";
import Team from '../matches/team/team.jsx'

function TeamVS(){
    return(
        <div className="flex justify-around w-screen">
            <Team/>
            <i className="pt-5">----</i>
            <Team/>
        </div>
    )
}

export default TeamVS