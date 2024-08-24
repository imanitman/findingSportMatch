import React, { useState, useEffect } from "react";
import { ProvinceAPI, DistrictAPI, CommuneAPI } from "./APITinhThanh";
import SelectOption from "./SelectOption";




function SelectAddress(props) {
    const [ProvinceData, setProvinceData] = useState([]);
    const [DistrictData, setDistrictData] = useState([]);
    const [CommuneData, setCommuneData] = useState([])

    useEffect(() => {
        async function fetchProvinceData() {
            const ProvinceData = await ProvinceAPI();
            setProvinceData(ProvinceData || []);
        }
        fetchProvinceData();
    }, []);


    async function fetchDistrictData(provinceData) {
        const DistrictData = await DistrictAPI(provinceData)
        setDistrictData(DistrictData || [])
    }

    async function fetchCommuneData(provinceData) {
        const CommuneData = await CommuneAPI(provinceData)
        setCommuneData(CommuneData || [])
    }

    return (
        <div className="sm:flex sm:justify-around">
            <SelectOption
                Name="Tỉnh/Thành"
                Data={ProvinceData}
                FetchNewData={fetchDistrictData}
                AddData = {props.setProvince}
            />

            <SelectOption
                Name="Quận/Huyện"
                Data={DistrictData}
                FetchNewData={fetchCommuneData}
                AddData = {props.setDistrict}
            />

            <SelectOption
                Name="Phường/Xã"
                Data={CommuneData}
                // FetchNewData={fetchCommuneData}
                AddData = {props.setCommune}
            />
        </div>
    )
}

export default SelectAddress