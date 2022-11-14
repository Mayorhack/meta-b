import React from "react";
import ImageCard from "./ImageCard";
import frame1 from "../assets/Frame1.png";

const Collections = () => {
  return (
    <div className="collections">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
        return <ImageCard src={frame1} />;
      })}
    </div>
  );
};

export default Collections;
