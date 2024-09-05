import axios from "axios"
import { useState, useCallback, useEffect } from "react"

export default function CreateTeam() {

    const [teamName, setTeamName] = useState()
    const [category, setCategory] = useState()
    const [description, setDescription] = useState()
    const [logo, setLogo] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file); // In ra file đã chọn
        setLogo(file);
        if (file != null) {
            const previewUrl = URL.createObjectURL(file);
            setPreviewImage(previewUrl);
        }
    };

    // Sử dụng useEffect để log giá trị logo sau khi nó thay đổi
    useEffect(() => {
        console.log(logo); // In ra logo mới sau khi được set
    }, [logo]);

    const handleBtnCreateTeam = useCallback(async (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("name", teamName);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("logo", logo); // Sử dụng logo mới nhất
    
        const apiUrl = import.meta.env.VITE_API_URL;
    
        try {
            const response = await axios.post(apiUrl + "teams", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            if (response != null) {
                console.log("Team created successfully");
                console.log(response.data);
            }
        } catch (error) {
            console.error("Error during team creation:", error.response || error.message);
        }
    }, [teamName, description, category, logo]);
    
    return (
        <div className="bg-sky-400 w-1/2 mx-auto h-screen">
            <div className="text-center mb-6 pt-6">
                <h1>Tạo đội của bạn</h1>
            </div>
            <form className="max-w-lg mx-auto">
                    <label
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                        htmlFor="user_avatar"
                    >
                        Logo Đội bóng
                    </label>
                    <input
                        className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-12"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                        name = "logo"
                        onChange={handleFileChange}
                    />
                <div
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300 mb-4"
                    id="user_avatar_help"
                >
                    A profile picture is useful to confirm your are logged into your account
                </div>
                {previewImage && (
                    <div className="mb-4">
                        <img
                            src={previewImage}
                            alt="Team Logo Preview"
                            className="w-32 h-32 object-cover rounded"
                        />
                    </div>
                )}
                <div className="mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Tên đội
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 leading-tight focus:outline-none"
                            id="username"
                            type="text"
                            placeholder="Tên đội hoặc tên của bạn"
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </div>

                </div>
                <div className="typeOfSport mb-4">
                    <p htmlFor="" className="font-bold">Thể loại</p>
                    <div className="inline-block relative w-64">
                        <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e)=>setCategory(e.target.value)}>
                            <option value="null">Môn thể thao</option>
                            <option value="football">Bóng đá</option>
                            <option value="volleyball">Bóng chuyển</option>
                            <option value="badminton">Cầu lông</option>
                            <option value="basketball">Bóng rổ</option>
                            <option value="tennis">Quần vợt</option>
                            <option value="table_tennis">Bóng bàn</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-bold">Mô tả về đội bạn</p>
                    <textarea onChange={(e)=>setDescription(e.target.value)} className="border rounded w-1/2" placeholder="Mức độ: Trung bình, Tiêu chí chơi: rèn luyện sức khỏe,...">

                    </textarea>
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={handleBtnCreateTeam}
                        type="button"
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Tạo đội
                    </button>

                </div>
            </form>
        </div>
    )
}