import React, { useEffect, useState } from "react";
import './tournament.scss';

function Tournament({teamData = {}}) {
    const type = teamData.type;
    const [category, setCategory] = useState();

    useEffect(() => {
        switch (type) {
            case "football":
                setCategory("Bóng đá");
                break;
            case "basketball": // sửa chính tả từ "baseketball" thành "basketball"
                setCategory("Bóng rổ");
                break;
            case "badminton":
                setCategory("Cầu lông");
                break;
            default:
                setCategory("Không xác định");
                break;
        }
    }, [type])
    return (
        <div className="header">
        <div className="tournament font-bold">{category}</div>
        </div>
    )
}

export default Tournament;