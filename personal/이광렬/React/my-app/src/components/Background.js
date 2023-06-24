import React, { useState } from "react";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import bg5 from "../images/bg5.jpg";
import bg6 from "../images/bg6.jpg";

function Background({ children }) {
  const [backgroundImage, setBackgroundImage] = useState(bg1);
  const imgArr = [bg1, bg2, bg3, bg4, bg5, bg6];
  const changeBackground = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    const newImage = imgArr[randomNumber];
    setBackgroundImage(newImage);
  };

  return (
    <div onClick={changeBackground}>
      <img src={backgroundImage} alt="배경이미지" style={{ height: "100px" }} />
      {children}
    </div>
  );
}

export default Background;
