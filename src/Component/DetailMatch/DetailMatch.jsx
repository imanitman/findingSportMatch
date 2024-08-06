import SameDayMatch from "./SameDay"
import SameStadiumMatch from "./SameStadiumMatch"
export default function RelatedMatchs(){
    return (
        <div className="flex gap-5 mx-7">
            <div>
                <div className="px-5 border-r-4">
                <p className="text-xl mb-5 pl-2 text-cyan-400 font-bold">Các trận đấu cùng ngày</p>
                    <SameDayMatch></SameDayMatch>
                    <SameDayMatch></SameDayMatch>
                    <SameDayMatch></SameDayMatch>
                </div>
            </div>
            <div>
                <div className="px-5">
                <p className="text-xl mb-5 pl-2 text-cyan-400 font-bold">Các trận đấu cùng sân</p>
                <SameStadiumMatch></SameStadiumMatch>
                <SameStadiumMatch></SameStadiumMatch>
                <SameStadiumMatch></SameStadiumMatch>
            </div>
            </div>
           
            
        </div>
        
    )
}