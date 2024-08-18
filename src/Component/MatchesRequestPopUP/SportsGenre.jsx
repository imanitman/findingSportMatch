import React from "react";

const Sport = ["Bóng đá", "Bóng Chuyền", "Bóng rổ", "Cầu lông", "Quần Vợt", "Bóng bàn", "Bi-a"]

function SportGenre() {

    function RenderOption(Sport, index) {
        return (
            <option
                key={index}
                value={Sport}>
                    {Sport}
            </option>
        )
    }

    return (
        <div>
            <form className="min-w-24 pb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white flex justify-center">
                    Lựa chọn môn thể thao
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Bộ Môn</option>
                    {Sport.map(RenderOption)}
                </select>
            </form>
        </div>
    )
}

export default SportGenre