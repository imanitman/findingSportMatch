import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './caster.scss';

function Caster(casterData = {}) {
    const address = casterData.address;
    console.log("address" + address);
    
    return (
        <div className="xcommentator">
            <i className="bi bi-geo-alt-fill mr-1">{address}</i>
        </div>
    )
}
export default Caster;