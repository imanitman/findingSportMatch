import Button from "../../matches/button/button"
export default function Events(){
    return (
        <>
            <div className="flex px-10 gap-5 items-center justify-between mb-5">
                <div className="flex gap-5 items-center">
                <img className="rounded-md h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYTPBBtmvina9RjmU31DC1WrascnnwPXzaQ&s" alt="" />
                <p className="text-xl text-green-600">Giải bóng đá U20-Hà Nội</p>
                <div>
                    <div className="flex gap-2">
                        <p className="text-slate-400">Diễn ra từ:</p>
                        <p>22/07/2024 - 5/8/2024</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-slate-400">Địa điểm:</p>
                        <p>Sân Hồng Anh - Hải Bối, Đông Anh, Hà Nội</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-slate-400">Số lượng:</p>
                        <p>30 đội</p>
                    </div>
                </div>
                </div>
                <div>
                    <Button />
                </div>
            </div>
            <div className="flex px-10 gap-5 items-center justify-between">
                <div className="flex gap-5 items-center">
                <img className="rounded-md h-32" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYTPBBtmvina9RjmU31DC1WrascnnwPXzaQ&s" alt="" />
                <p className="text-xl text-green-600">Giải bóng đá U20-Hà Nội</p>
                <div>
                    <div className="flex gap-2">
                        <p className="text-slate-400">Diễn ra từ:</p>
                        <p>22/07/2024 - 5/8/2024</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-slate-400">Địa điểm:</p>
                        <p>Sân Hồng Anh - Hải Bối, Đông Anh, Hà Nội</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-slate-400">Số lượng:</p>
                        <p>30 đội</p>
                    </div>
                </div>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </>
    )
}