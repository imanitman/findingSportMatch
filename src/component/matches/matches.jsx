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

function Matches(){
    return (
        <div className="mt-3">
            <p className="font-bold text-3xl border-l-4 pl-3 mb-3 ">Các trận đấu hấp dẫn</p>
            <div className="flex flex-wrap gap-5 ml-5">
            <div className="Matches w-1/4 bg-zinc-800">
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
            <div className="Matches w-1/4 bg-zinc-800">
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
            <div className="Matches w-1/4 bg-zinc-800">
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
            <div className="Matches w-1/4 bg-zinc-800">
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