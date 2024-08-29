import React from "react";
import MatchesRequest from "./MatchesRequest";
import AddressMap from "../MapSystem/AddressMap";
import EVButton from "../Evting/EVbutton";
import Header from "../Header/Header";

function MatchesRequestPopUP() {
    const handleCreateMatch = async() =>{
        const res = axios.post("")
    }
    return (
        <div className="container h-screen">
            <Header></Header>
            <div className="mt-3 mx-12"><p className="text-xl">Tạo trận đấu</p></div>
            <div className="flex gap-32 mx-14 mt-6">
                <MatchesRequest />
                <AddressMap />
            </div>
            <div className="flex justify-center ">
                <EVButton onClick={handleCreateMatch}
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