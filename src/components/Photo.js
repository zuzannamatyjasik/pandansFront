import { useState, useEffect } from "react";

const Photo = ({ shop }) => {
  const [src, setSrc] = useState({ img: "../img/two.png" });

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  useEffect(() => {
    if (shop) {
      console.log("run");
      var base64Flag = "data:" + shop.photo.data.contentType + ";base64,";
      var imageStr = arrayBufferToBase64(shop.photo.data.data);
      setSrc({
        img: base64Flag + imageStr,
      });
    }
  }, [shop]);
  return <img src={src.img} alt="wefji"></img>;
};

export default Photo;
