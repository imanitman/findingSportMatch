import React, {useState, useEffect} from "react";
import { ProvinceAPI, DistrictAPI, CommuneAPI } from "./APITinhThanh";

function SelectOption(props) {

    // props.FetchNewData()

    function handleChange(EventSelected) {
        const Value = JSON.parse(EventSelected.target.value)
        const selectedCodeValue = Value.Code;
        const selectedNameValue = Value.Name;
        console.log(selectedCodeValue);
        console.log(selectedNameValue);
        
        props.FetchNewData(selectedCodeValue);  
        props.AddData(selectedNameValue)
    }

    function RenderOption(Data, index){
        return (
            <option 
            key={index}
            value={JSON.stringify({ Code: Data.code, Name: Data.name })}>
                {Data.name}
        </option>
        )
    }

    return (
        <form className="max-w-3xl min-w-52">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white flex justify-center">
                Lựa chọn {props.Name}
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}     >
                <option selected>{props.Name}</option>
                {props.Data.map(RenderOption)}
                {/* <option value={props.Code}>{props.Name}</option> */}
            </select>
        </form>

    )
}

export default SelectOption