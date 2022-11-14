import React from "react";
import star from "../assets/Stars.png";

const ImageCard = ({ src }) => {
  return (
    <div className="card_image">
      <div className="image">
        <img src={src} alt="" />
      </div>
      <div className="grid_details">
        <p>Desert king</p>
        <span>1MBT per night</span>
        <p>2345km away</p>
        <p className="end">available for 2weeks stay</p>
        <img src={star} alt="" />
      </div>
    </div>
  );
};

export default ImageCard;
