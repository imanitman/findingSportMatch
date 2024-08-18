import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import SelectAddress from './SelectAddress';

const UpdateMap = ({ lat, lon }) => {
  const map = useMap();
  map.setView([lat, lon], 16);
  return null;
};

const AddressMap = () => {

  const [lat, setLat] = useState(10.762622);
  const [lon, setLon] = useState(106.660172);

  //Lấy địa chỉ vật lý của người dùng
  navigator.geolocation.watchPosition(success, error);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLat(latitude)
    setLon(longitude)

    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [commune, setCommune] = useState('');

  const handleUpdateMap = () => {
    const fullAddress = `${address}, ${commune}, ${district}, ${province}, Vietnam`;

    axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}`)
      .then(response => {
        const data = response.data;
        if (data.length > 0) {
          console.log(data[0].lat);
          setLat(data[0].lat);

          console.log(data[0].lon);
          setLon(data[0].lon);
        } else {
          alert('Không tìm thấy địa chỉ này');
        }
      })
      .catch(error => {
        console.error("Error fetching location data:", error);
      });
  };

  return (
    <div>

      <MapContainer center={[lat, lon]} zoom={13} style={{ height: '200px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lon]} />
        <UpdateMap lat={lat} lon={lon} />
      </MapContainer>

      <div className='w-full  pt-5'>
        {/* <input
          type="text"
          placeholder="Địa chỉ"
          className='w-screen'
          value={address}
          onChange={(address) => setAddress(address.target.value)}
        /> */}
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            value={address}
            onChange={(address) => setAddress(address.target.value)}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                        dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                        rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Địa Chỉ
          </label>
        </div>

        <SelectAddress
          setProvince={setProvince}
          setDistrict={setDistrict}
          setCommune={setCommune}
        />

        <button onClick={handleUpdateMap} className='flex justify-center w-full'>Cập nhật bản đồ</button>
      </div>
    </div>
  );
};

export default AddressMap;