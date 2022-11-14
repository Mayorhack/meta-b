import React from "react";
import ImageCard from "./ImageCard";

const Collections = ({ data }) => {
  return (
    <div className="collections">
      {data.map((item, index) => {
        return <ImageCard src={item.image} key={index} />;
      })}
    </div>
  );
};

export default Collections;
