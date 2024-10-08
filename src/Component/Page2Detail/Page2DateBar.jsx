import React, {useState, useEffect} from "react";
import DateComponent from "./DateComponent";
import getWeekDates from "./DayInWeek";


function renderDateComponent(weekDates, index) {
    var FullDate = weekDates.day + "/" + weekDates.month + "/" + weekDates.year
    return (
      <DateComponent
        key={index}
        DayName = {weekDates.dayName}
        FullDate = {FullDate}
      />
    );
  }

function Page2DateBar(){
    let today = new Date();
    let weekDates = getWeekDates(today);

    const [SelectWeek, SetWeekDate] = useState(weekDates)
    let [ChooseDate, SetDateDate] = useState(today)

      function BtnUpWeek(){
        ChooseDate.setDate(ChooseDate.getDate() + 7);
        let ChoseWeak = getWeekDates(ChooseDate);
        SetWeekDate(ChoseWeak)
      }

      function BtnDownWeek(){
        ChooseDate.setDate(ChooseDate.getDate() - 7);
        let ChoseWeak = getWeekDates(ChooseDate);
        SetWeekDate(ChoseWeak)
      }

    return(
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-800 from-indigo-600
                        flex items-center justify-between w-screen">
          <button onClick={BtnDownWeek} className=""><i className="bi bi-caret-left-fill"></i></button>
          
          {SelectWeek.map(renderDateComponent)}

          <button onClick={BtnUpWeek} className=""><i className="bi bi-caret-right-fill"></i></button>
        </div>
    )
}

export default Page2DateBar