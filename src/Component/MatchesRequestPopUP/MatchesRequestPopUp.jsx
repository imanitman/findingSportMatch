import React from "react";
import MatchesRequest from "./MatchesRequest";
import AddressMap from "../MapSystem/AddressMap";
import EVButton from "../Evting/EVbutton";

function MatchesRequestPopUP() {
    return (
        <div>
            <div className="flex justify-between w-screen">
                <MatchesRequest />
                <AddressMap />
            </div>
            <div className="flex justify-center">
                <EVButton
                    name="Tạo trận đấu"
                />

                {/* <EVButton
                    name="Cập nhật bản đồ"
                /> */}
            </div>
        </div>
    )
}

export default MatchesRequestPopUP