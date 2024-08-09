import React from "react";

function DateComponent(props){
    return(
        <div className="text-center  rounded-lg">
            <h5 className="">{props.DayName}</h5>
            <h6 className="">{props.FullDate}</h6>
        </div>
    )
}

export default DateComponent