import React, { useState } from "react";
import './team.scss';

function Team({teamData = {}}) {
    const urlImg = "http://localhost:8080/uploads/"
    const teamName = teamData.name
    const teamImg = teamData.logo
    const fileName = teamImg.split('\\').pop();
    console.log(fileName);
    console.log(teamName);
    console.log(urlImg+fileName);
    
    return (
        <div className="team team-home">
            <div className="team-logo">
                <img
                    className="team-logo-img"
                    loading="lazy"
                    src={urlImg+fileName}/>
            </div>
            <div className="xname">
                <h3 className="team-name">{teamName}</h3>
                <div className="xcards"></div>
            </div>
        </div>
    );
}

export default Team;