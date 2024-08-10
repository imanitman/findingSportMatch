import SameDayMatch from "./SameDay"
import SameStadiumMatch from "./SameStadiumMatch"
import Slideshow from "../Page3ImageSlideBar/Slideshow"
import Header from "../Header/Header"
import ContentPlace from "../Page3ImageSlideBar/ContentPlace"
export default function RelatedMatchs(){
    return (
        <>
            <Header></Header>
            <div className="flex gap-20">
                <div className="w-2/5 m-5">
                    <Slideshow></Slideshow>
                </div>
                <div className="w-1/3 pl-5 mt-5">
                    <ContentPlace></ContentPlace>
                </div>
            </div>
            <hr />
            <div className="flex gap-5 mx-7 pt-3">
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
        </>
        
        
    )
}