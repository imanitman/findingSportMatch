import React, { useState } from "react";
import './team.scss';

function Team(props) {
    return (
        <div className="team team-home">
            <div className="team-logo">
                <img 
                    className="team-logo-img" 
                    loading="lazy"
                    src="https://img.thesports.com/football/team/024fe33eb47d62a23b549ecd97af6762.png"/>
            </div>
            <div className="xname">
                <h3 className="team-name">Juventus</h3>
                <div className="xcards"></div>
            </div>
        </div>
    );
}

export default Team;