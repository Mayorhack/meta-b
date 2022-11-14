import React from "react";
import setting from "../assets/setting.svg";
import Collections from "../components/Collections";
const Place = () => {
  return (
    <div className="place">
      <div className="container">
        <div className="place_tablist">
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
          <div className="location">
            location <img src={setting} alt="" />
          </div>
        </div>
        <Collections />
      </div>
    </div>
  );
};

export default Place;
