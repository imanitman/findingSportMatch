import React, { useState, useEffect } from "react";

const images = [
  "https://fastly.picsum.photos/id/324/536/354.jpg?hmac=rYF5RbgFslqh_7eC0z-R5M0j5GCH02tuJH_GPU0eggM",
  "https://fastly.picsum.photos/id/77/536/354.jpg?hmac=r83MBRIvemU-UJ2sAvzMiQRWHI8F81DOmHIBWZyMhdY",
  "https://fastly.picsum.photos/id/681/536/354.jpg?hmac=eVBluTfRlqplasLzQAoETOYVqeM96mQYaKE-U2uSM3M",
  "https://fastly.picsum.photos/id/702/536/354.jpg?hmac=xEncZcyvHiRYLKwyx2sdFadTwq8G38DCRfwxZFN6uw0",
  "https://fastly.picsum.photos/id/505/536/354.jpg?hmac=zvFVVisk0oG7zcCY4MmROU21E0SnGTOk3g2OA3fCszo"
];

function Slideshow() {
  const [SelectImage, setSelectedImage] = useState(images[0])

  return (
    <div class="grid gap-4">
      <div className="justify-center flex">
        <img class="h-auto max-w-full rounded-lg" src={SelectImage} alt="" />
      </div>
      <div class="grid grid-cols-5 gap-4">
      {images.map((image, index) => (
          <img
            key={index}
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>

  )
};

export default Slideshow;