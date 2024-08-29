import AllMatchs from "./allMatch";
import Events from "./Events";
import Page2DateBar from "../../Page2Detail/Page2DateBar"
export default function Football(){
    return (
        <>
            <div className="mb-5">
                <Page2DateBar></Page2DateBar>
            </div>
            <div className="flex">
            <div className="w-1/12"></div>
                <div className="mt-4 border-slate-500 w-10/12">
                    <h3 className="my-3 mx-10 px-2 text-2xl border-l-2">Các Trận Đấu</h3>
                    <AllMatchs/>
                </div>
                <div className="w-1/12"></div>
            </div>
            <h3 className="my-3 m-full px-2 text-2xl border-l-2 border-r-2  text-center">Các sự kiện</h3>
            <div>
            <div className="w-1/12"></div>
            <div className="w-10/12">
            <Events></Events>
            </div>
            <div className="w-1/12"></div>
            </div>
        </>
    )
}