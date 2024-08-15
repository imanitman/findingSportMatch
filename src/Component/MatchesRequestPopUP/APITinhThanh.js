import axios from "axios";


async function ProvinceAPI() {
    try {
        const response = await axios.get("https://api.mysupership.vn/v1/partner/areas/province");
        const data = response.data;
        const ProvinceData = data.results
        // console.log(ProvinceData);
        

        if (ProvinceData.length > 0) {
            console.log("Đã OK");
            return ProvinceData;
        } else {
            console.log("Không ok");
        }
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return undefined;
    }
}



async function DistrictAPI(ProvinceData) {
    try {
        const response = await axios.get(`https://api.mysupership.vn/v1/partner/areas/district?province=${ProvinceData}`)
        const data = response.data;
        console.log(data);
        const DistrictData = data.results
        console.log(DistrictData);

        if (DistrictData.length > 0) {
            console.log("Đã OK");
            return DistrictData;
        } else {
            console.log("Không ok");
        }
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return undefined;
    }
}

async function CommuneAPI(DistrictData) {
    try {
        const response = await axios.get(`https://api.mysupership.vn/v1/partner/areas/commune?district=${DistrictData}`)
        const data = response.data;
        console.log(data);
        const WardData = data.results
        console.log(WardData);

        if (WardData.length > 0) {
            console.log("Đã OK");
            return WardData;
        } else {
            console.log("Không ok");
        }
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        return undefined;
    }
}

export { ProvinceAPI, DistrictAPI, CommuneAPI }