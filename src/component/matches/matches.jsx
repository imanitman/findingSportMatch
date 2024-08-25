import React,{ useState } from "react";
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
    
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbW4xMDIyMDA0QGdtYWlsLmNvbSIsImV4cCI6MTcyNTM3NTM0OCwiaWF0IjoxNzI0NTExMzQ4LCJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImFtbjEwMjIwMDRAZ21haWwuY29tIiwibmFtZSI6Ik5hbSJ9fQ.Oi4aGy5ODGGHbBw6E4PDkQoXilyoIjSj0X6-B8aRhN4"
    let matches = axios.get("http://localhost:8080/matchs?page=0&size=3",
            {headers:{
                'Authorization':`Bearer ${token}`
            }}
        )
        matches.then(response => {
            console.log(response.data);
          }).catch(error => {
            console.error(error);
          });
    return (
        <div className="mt-3">
            <p className="font-bold text-3xl border-l-4 pl-3 mb-3 ">Các trận đấu hấp dẫn</p>
            <div className="flex flex-wrap gap-5 ml-5">
            <div className="Matches w-auto bg-zinc-200 p-6">
                <Tournament />
                <div className="score">
                    <Team />
                    <Matches_time />
                    <Team />
                </div>
                <div className="foot">
                    <Caster />
                    <Button />
                </div>
            </div>
            <div className="Matches w-auto bg-zinc-200 p-6">
                <Tournament />
                <div className="score">
                    <Team />
                    <Matches_time />
                    <Team />
                </div>
                <div className="foot">
                    <Caster />
                    <Button />
                </div>
            </div>
            <div className="Matches w-auto bg-zinc-200 p-6">
                <Tournament />
                <div className="score">
                    <Team />
                    <Matches_time />
                    <Team />
                </div>
                <div className="foot">
                    <Caster />
                    <Button />
                </div>
            </div>
            <div className="Matches w-auto bg-zinc-200 p-6">
                <Tournament />
                <div className="score">
                    <Team />
                    <Matches_time />
                    <Team />
                </div>
                <div className="foot">
                    <Caster />
                    <Button />
                </div>
            </div>
            </div>
        </div>
    )
}


export default Matches;