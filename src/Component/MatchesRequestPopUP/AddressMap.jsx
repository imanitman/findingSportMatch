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
      <div className='w-screen'>
        <input
          type="text"
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <SelectAddress
          setProvince = {setProvince}
          setDistrict = {setDistrict}
          setCommune = {setCommune}
        />

        <button onClick={handleUpdateMap}>Cập nhật bản đồ</button>
      </div>

      <MapContainer center={[lat, lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lon]} />
        <UpdateMap lat={lat} lon={lon} />
      </MapContainer>
    </div>
  );
};

export default AddressMap;