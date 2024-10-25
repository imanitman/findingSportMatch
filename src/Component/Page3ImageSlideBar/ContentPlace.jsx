import React from "react";

function ContentPlace({matchDetail = {}}) {
    const matchTimes = matchDetail.matchTime
    console.log(matchTimes);
    
    

    return (
        <div className="">
            <div className="flex flex-col items-center absolute gap-5">
                <p className="text-2xl text-blue-500">Thông tin chi tiết</p>
                <h5 className="">Thời Gian:</h5>
                <h5>Sân: Hồng Anh, Đại Mạch, Đông Anh, Hà Nội</h5>
                <h5>Thể Loại:Sân 7</h5>
                <div className="flex justify-around gap-3">
                    <h4>Thông Tin Đội A: Đội Thăng Long (Khu Bê Tông)</h4>
                    <h4>SDT: 0098765432</h4>
                </div>
                <h5>FaceBook: Nam nguyen <a href="">   </a></h5>
                <a href="">
                    <img
                        className="w-20 h-20"
                        src="https://fastly.picsum.photos/id/505/536/354.jpg?hmac=zvFVVisk0oG7zcCY4MmROU21E0SnGTOk3g2OA3fCszo"
                        alt=""
                    />
                </a>
                <div>
                    <button className="adz ajw aro asc awg awm ban bbt biv bpb bpc bpe bpl bg-teal-600" >Tham gia</button>
                </div>

            </div>
            {/* <div className="z-10 place-content-end flex justify-end place-items-end h-72">
                <button className="adz ajw aro asc awg awm ban bbt biv bpb bpc bpe bpl ">
                    THAM GIA
                </button>
            </div> */}
        </div>
    )
}

export default ContentPlace