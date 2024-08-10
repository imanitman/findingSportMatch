import AllMatchs from "./allMatch";
import Events from "./Events";
import Page2DateBar from "../../Page2Detail/Page2DateBar"
import Header from "../../Header/Header";
export default function Football(){
    return (
        <>
            <Header></Header>
            <div className="mb-5">
                <Page2DateBar></Page2DateBar>
            </div>
            <div className="mt-4 border-slate-500">
                <h3 className="my-3 mx-10 px-2 text-2xl border-l-2">Các Trận Đấu</h3>
                <AllMatchs/>
            </div>
            <h3 className="my-3 mx-10 px-2 text-2xl border-l-2 ">Các sự kiện</h3>
            <Events></Events>
        </>
    )
}