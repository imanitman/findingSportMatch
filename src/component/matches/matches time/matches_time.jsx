import React from "react";
import './matches_time.scss';

function Matches_time( {time,date,stadium} ) {
    // Tách chuỗi ngày để định dạng lại
    const [year, month, day] = date.split("-")
    const newDate = day + "/" + month

    return(
        <div className="grid">
            <div className="xinfo">
                <div className="detail">{newDate}</div>
                <div className="status">{time}</div>
            </div>
            <div className="stadium p-2 mt-4 font-bold">{stadium}</div>
         </div>
    );
}

export default Matches_time;
