import React,{ useEffect, useState } from "react";
import Team from './team/team.jsx'
import Tournament from "./tournament/tournament.jsx";
import Live_icon from "./live-icon/live_icon.jsx";
import Caster from "./caster/caster.jsx";
import Score from "./score/score.jsx";
import Matches_time from "./matches time/matches_time.jsx";
import Button from "./button/button.jsx";
import './matches.scss'
import { H1Icon } from "@heroicons/react/24/outline";
import axios from 'axios'
function Matches(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbW4xMDIyMDA0QGdtYWlsLmNvbSIsImV4cCI6MTcyNTM3NTM0OCwiaWF0IjoxNzI0NTExMzQ4LCJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFtbjEwMjIwMDRAZ21haWwuY29tIiwibmFtZSI6Ik5hbSJ9fQ.Oi4aGy5ODGGHbBw6E4PDkQoXilyoIjSj0X6-B8aRhN4";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/matchs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params:{
                        page:0,
                        size:9
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
    }, []);

    return (
        <div className="mt-3 items-center">
            <p className="font-bold text-3xl border-l-4 pl-3 mb-3 ">Các trận đấu hấp dẫn</p>
            <div className="flex flex-wrap gap-5 ml-5">
            {data.map((match, index)=>(
                <div key={index} className="Matches w-1/4 bg-zinc-200 p-3">
                <Tournament />
                <div className="score">
                    <Team teamData={match}/>
                    <Matches_time />
                    <Team teamData={match}/>
                </div>
                <div className="foot">
                    <Caster />
                    <Button />
                </div>
            </div>
            ))}
            </div>
        </div>
    )
}


export default Matches;