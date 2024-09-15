import { useCallback, useState } from "react";
import axios from "axios";

export default function CreateMatch() {
  const [category, setCategory] = useState();
  const [flag, setFlag] = useState(false);
  const [team, setTeam] = useState([]);
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [address, setAddress] = useState("");

  const handleCreateMatch = useCallback(async (e) => {
    e.preventDefault();
    if (!category || category === "null") {
      console.log("Category not selected");
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("accessToken");

    try {
      // Step 1: Fetch the team based on the selected category
      const response = await axios.get(`${apiUrl}teams/create/${category}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response != null) {
        setTeam(response.data);
        setFlag(true);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  }, [category]);

  const handleSubmitMatch = async (e) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("accessToken");

    // Step 2: Gather form data to submit
    const matchData = {
      team, // assuming team has an id
      matchDate,
      matchTime,
      stadiumName,
      address,
    };

    try {
      await axios.post(`${apiUrl}matchs`, matchData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Match created successfully");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  return (
    <div className="text-center">
      <div className="text-center mb-4">
        <h1>Tạo trận đấu</h1>
      </div>
      <div className="typeOfSport text-center">
        <p className="font-bold text-xl mb-4">Chọn Thể loại</p>
        <div className="inline-block relative w-64">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="null">Môn thể thao</option>
            <option value="football">Bóng đá</option>
            <option value="volleyball">Bóng chuyền</option>
            <option value="badminton">Cầu lông</option>
            <option value="basketball">Bóng rổ</option>
            <option value="tennis">Quần vợt</option>
            <option value="table_tennis">Bóng bàn</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <button className="bg-sky-400 ml-4" onClick={handleCreateMatch}>
          Tiếp
        </button>
      </div>
      <div className="flex justify-center items-center min-h-full mt-6">
        {flag && (
          <form className="w-full max-w-lg" onSubmit={handleSubmitMatch}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Your team
                </label>
                <p className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight">
                  {team.name}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Tên sân
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={stadiumName}
                  onChange={(e) => setStadiumName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Địa chỉ
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Ngày diễn ra
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="date"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Giờ diễn ra
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="time"
                  value={matchTime}
                  onChange={(e) => setMatchTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Tạo trận đấu
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
