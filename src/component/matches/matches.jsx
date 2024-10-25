import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Thêm import này
import Team from './team/team.jsx';
import Tournament from "./tournament/tournament.jsx";
import Live_icon from "./live-icon/live_icon.jsx";
import Caster from "./caster/caster.jsx";
import Score from "./score/score.jsx";
import Matches_time from "./matches time/matches_time.jsx";
import Button from "./button/button.jsx";
import './matches.scss';
import axios from 'axios';

function Matches() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate(); // Khai báo useNavigate

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/matchs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        page: 0,
                        size: 9
                    }
                });
                if (Array.isArray(response.data.matches)) {
                    setData(response.data.matches);
                } else {
                    setData([]);
                    console.log("error");
                }
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [token]);

    const handleMatchClick = (id) => {
        navigate(`/detail/match/${id}`); // Chuyển hướng đến trang chi tiết
    };

    return (
        <div className="mt-5 items-center">
            <p className="font-bold text-4xl border-l-4 border-blue-500 pl-4 mb-6">Các trận đấu hấp dẫn</p>
            <div className="flex flex-wrap gap-6 ml-40">
                {data.map((match, index) => (
                    <div
                        key={index}
                        className="Matches w-1/4 bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
                        onClick={() => handleMatchClick(match.id)} // Thêm sự kiện click
                    >
                        <Tournament teamData={match} />
                        <div className="score text-center py-4">
                            {match.team1 && <Team teamData={match.team1} />}
                            <Matches_time time={match.matchTime} date={match.matchDate} stadium={match.stadiumName} />
                            {match.team2 == null ? (
                                <img
                                    src="https://banner2.cleanpng.com/20180816/gpc/dd45b53c0bd513f8516eef60cea58dfa.webp"
                                    className="w-26 h-16 mx-auto"
                                    alt="Placeholder team"
                                />
                            ) : (
                                <Team teamData={match.team2} />
                            )}
                        </div>
                        <div className="foot flex justify-between mt-2">
                            {match.address && <Caster casterData={match} />}
                            <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Matches;
