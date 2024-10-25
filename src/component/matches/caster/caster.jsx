import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './caster.scss';

function Caster({casterData = {}}) {
    const address = casterData.address
    console.log("address" + casterData);
    
    return (
        <div className="xcommentator flex gap-4">
            <i className="bi bi-geo-alt-fill mr-1"></i>
            <p>{address}</p>
        </div>
    )
}
export default Caster;