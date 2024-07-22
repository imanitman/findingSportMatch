import React, { useState } from "react";
import './team.scss';

function Team(props) {
    return (
        <div className="team team-home">
            <div className="team-logo">
                <img 
                    className="team-logo-img" 
                    loading="lazy"
                    src="https://img.thesports.com/football/team/ad010af729c420626d1865ad744168d3.png"/>
            </div>
            <div className="xname">
                <h3 className="team-name">FC Seoul</h3>
                <div className="xcards"></div>
            </div>
        </div>
    );
}

export default Team;