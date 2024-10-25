import React, { useState } from "react";
import './button.scss';

function Button() {
    return (
        <div className="btn bg-sky-500 rounded p-2">
            <div className="ibs-bet">
                <a 
                    href="" 
                    target="_blank" 
                    rel="nofollow" 
                    className="btn btn-sm btn-betnow text-white">
                        Join
                </a>
            </div>
        </div>
    )
}

export default Button;