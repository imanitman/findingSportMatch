import React from "react";
import './matches_time.scss';

function Matches_time( {date, time} ) {
    // Tách chuỗi ngày để định dạng lại

    return(
        <div className="xinfo">
            <div className="status">{time}</div>
            <div className="detail">{date}</div>
        </div>
    );
}

export default Matches_time;
