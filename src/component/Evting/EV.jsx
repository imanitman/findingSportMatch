import React from "react";
import EventHead from "./EVHead";
import EVDetail from "./EVDetail";
import EVButton from "./EVbutton";
import EVImg from "./EVImg.jsx";

function EV(){
    return(
        <div className="flex w-screen mt-6">
            <div className="w-1/2">
                <EventHead />
                <div className="flex justify-between">
                    <div className="content-evenly">
                        <EVImg />
                    </div>
                    <div className="content-evenly ">
                        <EVDetail />
                    </div>
                    <div className="content-evenly ">
                        <EVButton />
                    </div>
                </div>
            </div>
            <div className="w-1/2 ml-4 mr-4 border-solid border-l-2">
                <EventHead />
                <div className="flex justify-between">
                    <div className="content-evenly">
                        <EVImg />
                    </div>
                    <div className="content-evenly ">
                        <EVDetail />
                    </div>
                    <div className="content-evenly ">
                        <EVButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EV;