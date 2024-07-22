import React, { useState, useEffect } from "react";
import './live_icon.scss';

function Live_icon() {
    const [visible, setVisible] = useState(true);

    // ẩn hiện dấu chấm
    useEffect(() => {
        const interval = setInterval(() => {
          setVisible((prevVisible) => !prevVisible);
        }, 500); // 500ms toggle interval
    
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="stick live">
            <i className="dot" style={{ visibility: visible ? 'visible' : 'hidden' }}></i>
            Live
        </div>
    )
}

export default Live_icon