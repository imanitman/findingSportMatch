
import Header from "../Header/Header"
import Team from "../matches/team/team"
import Matches_time from "../matches/matches time/matches_time"
export default function MyMatch(){
    return (
        <div className="container h-screen">
            <Header></Header>
            <div className="mx-auto ml-10 w-5/6 p-8">
            <p className="mb-10 text-3xl text-blue-600 ">Các trận đấu của bạn</p>
            <div className="flex items-center gap-12">
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
            <div className="mt-10 auto text-center ">
                <button className="bg-sky-300">Tạo trận đấu mới</button>
            </div>
            </div>
        </div>
    )
}