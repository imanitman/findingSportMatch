import SameDayMatch from "./SameDay"
import SameStadiumMatch from "./SameStadiumMatch"
import Slideshow from "../Page3ImageSlideBar/Slideshow"
import Header from "../Header/Header"
import ContentPlace from "../Page3ImageSlideBar/ContentPlace"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export default function RelatedMatchs(){
    const { id } = useParams(); // Lấy id từ URL
    const [matchDetails, setMatchDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("accessToken");
    const urlApi = import.meta.env.VITE_API_URL
    useEffect(() => {
        const fetchMatchDetails = async () => {
            try {
                const response = await axios.get( urlApi+`matchs/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setMatchDetails(response.data); // Giả sử dữ liệu trả về là chi tiết trận đấu
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMatchDetails();
    }, [id, token]);

    return (
        <>
            <div className="flex gap-20">
                <div className="w-2/5 m-5">
                    <Slideshow></Slideshow>
                </div>
                <div className="w-1/3 pl-5 mt-5">
                    <ContentPlace matchDetail = {matchDetails}/>
                </div>
            </div>
            <hr />
            <div className="flex gap-5 mx-7 pt-3">
                <div>
                    <div className="px-5 border-r-4">
                    <p className="text-xl mb-5 pl-2 text-cyan-400 font-bold">Các trận đấu cùng ngày</p>
                        <SameDayMatch></SameDayMatch>
                    </div>
                </div>
                <div>
                    <div className="px-5">
                    <p className="text-xl mb-5 pl-2 text-cyan-400 font-bold">Các trận đấu cùng sân</p>
                    <SameStadiumMatch></SameStadiumMatch>
                </div>
                </div>
        </div>
        </>
        
        
    )
}