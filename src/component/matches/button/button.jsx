import React, { useState } from "react";
import './button.scss';

function Button() {
    return (
        <div className="xitem-buttons">
            <div className="ibs-live">
                <a 
                    href="/detail"
                    className="btn btn-sm">
                        Chi tiết
                    </a>
            </div>
            <div className="ibs-bet">
                <a 
                    href="#" 
                    target="_blank" 
                    rel="nofollow" 
                    className="btn btn-sm btn-betnow">
                        Tham gia
                </a>
            </div>
        </div>
    )
}

export default Button;