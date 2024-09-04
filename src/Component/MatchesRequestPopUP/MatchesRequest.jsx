import React from "react";
import FormInput from "./FormInput";
import SportGenre from "./SportsGenre";
import axios from "axios";
import { useState, useCallback } from "react";

function MatchesRequest() {
    return (
        <div className="w-4/12">
            <SportGenre sendTypeSport={handleTypeOfSport} />

            <FormInput
                type={"text"}
                name={"Name"}
                head={"Tên"}
            />

            <FormInput
                type={"text"}
                name={"Team"}
                head={"Tên Đội"}
            />

            <FormInput
                type={"Date"}
                name={"Date"}
                head={"Ngày thi đấu"}
            />

            <FormInput
                type={"time"}
                name={"Time"}
                head={"Thời gian thi đấu"}
            />

            <FormInput
                type={"tel"}
                name={"phone"}
                head={"Số Điện Thoại"}
            />
        </div>
    )
}

export default MatchesRequest