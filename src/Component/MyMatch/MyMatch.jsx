
import Header from "../Header/Header"
import Team from "../matches/team/team"
import Matches_time from "../matches/matches time/matches_time"
export default function MyMatch(){
    return (
        <>
            <Header></Header>
            <div className="">
            <div className="container mx-auto flex gap-10 items-center mt-3 h-screen">
                <div className="flex gap-4">
                    <Team></Team>
                    <Matches_time />
                    <Team />
                </div>
                <div className="ml-10 mb-5">
                        <p className="text-green-600 text-lg font-medium">Sân Hồng Anh</p>
                        <p>Hải Bối, Đông Anh, Hà Nội</p>
                </div>
                <div className="text-blue-400">
                    Trạng thái: Chưa có đối
                </div>
                <div className="flex gap-4">
                    <button className="bg-blue-400">Hủy trận đấu</button>
                    <button className="bg-blue-400">Sửa thông tin</button>
                </div>
            </div>
            <button type="submit">Tạo trận đấu mới </button>
            </div>
        </>
    )
}