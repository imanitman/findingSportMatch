import React from "react";
import FormInput from "./FormInput";
import SportGenre from "./SportsGenre";


function MatchesRequest() {
    return (
        <div className="w-4/12">
            <SportGenre />

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