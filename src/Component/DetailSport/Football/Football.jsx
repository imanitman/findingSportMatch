import AllMatchs from "./allMatch";
import Events from "./Events";
import Page2DateBar from "../../Page2Detail/Page2DateBar"
import axios from 'axios'
import { useEffect, useState } from "react";
export default function Football(){
    const token = localStorage.getItem("accessToken");
    const apiUrl = import.meta.env.VITE_API_URL;
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  // Thêm loading state
    const [error, setError] = useState(null);  // Thêm error state

    useEffect(() => {
        const fetchData = async () => {
            if (!token) {
                console.error("Token is missing. Please login again.");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`${apiUrl}matchs/sport/football`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        page: 0,
                        size: 6,
                    },
                });
                
                
                if (Array.isArray(response.data.matches)) {
                    setData(response.data.matches);
                    console.log(response);
                    
                } else {
                    setData([]);
                    console.log(response);
                    
                    console.log("No matches found.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.response && error.response.status === 401) {
                    console.error("Unauthorized: Invalid or expired token");
                    // Handle token refresh or logout user
                }
                setError(error);
            } finally {
                setLoading(false);  // Đặt loading thành false sau khi kết thúc yêu cầu
            }
        };

        fetchData();
    }, [token, apiUrl]); // Thêm token và apiUrl vào dependency array

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }
    return (
        <>
            <div className="mb-5">
                <Page2DateBar></Page2DateBar>
            </div>
            <div className="flex">
            <div className="w-1/12"></div>
                <div className="mt-4 border-slate-500 w-10/12">
                    <h3 className="my-3 mx-10 px-2 text-2xl border-l-2">Các Trận Đấu</h3>
                    <AllMatchs data = {data}/>
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