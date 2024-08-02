import AllMatchs from "./allMatch";
import Events from "./Events";

export default function Football(){
    return (
        <>
            <div className="border-t-2 border-slate-500">
                <h3 className="my-3 mx-10 px-2 text-2xl border-l-2">Các Trận Đấu</h3>
                <AllMatchs/>
            </div>
            <h3 className="my-3 mx-10 px-2 text-2xl border-l-2 ">Các sự kiện</h3>
            <Events></Events>
        </>
    )
}