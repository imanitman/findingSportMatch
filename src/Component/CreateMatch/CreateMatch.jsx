import { useCallback, useState } from "react"
import axios from "axios";
export default function CreateMatch(){
    const [category,setCategory] = useState()
    const handleCreateMatch = useCallback(async (e) => {
        e.preventDefault();
        if (!category || category === "null") {
            console.log("Category not selected");
            return;
        }
        const apiUrl =  import.meta.env.VITE_API_URL;
        try {
            const response = await axios.get(apiUrl + "teams/" + category)
            if (response != null) {
                console.log("Request successful");
            }
        } catch (error) {
            console.log("error: " + error);
        }
    }, [category]);
    
    return (
        <>
            <div className="text-center mb-4">
                <h1>Tạo trận đấu</h1>
            </div>
            <div className="typeOfSport text-center">
                        <p htmlFor="" className="font-bold text-xl mb-4">Chọn Thể loại</p>
                        <div className="inline-block relative w-64">
                            <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e)=>setCategory(e.target.value)}>
                                <option value="null">Môn thể thao</option>
                                <option value="football">Bóng đá</option>
                                <option value="volleyball">Bóng chuyển</option>
                                <option value="badminton">Cầu lông</option>
                                <option value="basketball">Bóng rổ</option>
                                <option value="tennis">Quần vợt</option>
                                <option value="table_tennis">Bóng bàn</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        <button className="bg-sky-400 ml-4"
                        onClick={handleCreateMatch} >Tiếp</button>
            </div>
            
        </>
    )
}