import React from "react";

function ContentPlace(props) {
    return (
        <div className="">
            <div className="flex flex-col items-center w-screen absolute">
                <h5 className="">Thời Gian:</h5>
                <h5>Sân:</h5>
                <h5>Thể Loại:</h5>
                <div className="flex justify-around w-screen">
                    <h4>Thông Tin Đội A:</h4>
                    <h4>SDT:</h4>
                </div>
                <h5>FaceBook: <a href="">   </a></h5>
                <a href="">
                    <img
                        className="w-20 h-20"
                        src="https://fastly.picsum.photos/id/505/536/354.jpg?hmac=zvFVVisk0oG7zcCY4MmROU21E0SnGTOk3g2OA3fCszo"
                        alt=""
                    />
                </a>
            </div>
            <div className="z-10 place-content-end w-screen flex justify-end place-items-end h-48">
                <button className="adz ajw aro asc awg awm ban bbt biv bpb bpc bpe bpl ">
                    THAM GIA
                </button>
            </div>
        </div>
    )
}

export default ContentPlace