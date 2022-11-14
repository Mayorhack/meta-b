import React, { useState } from "react";
import setting from "../assets/setting.svg";
import Collections from "../components/Collections";
import { placeData } from "../data/data";
const Place = () => {
  const [openState, setOpenState] = useState({
    status: false,
    value: "Resturant",
  });
  return (
    <div className="place">
      <div className="container">
        <div className="place_tablist">
          <div className="desktop_tablist">
            <p>Resturant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
          </div>
          <div
            className="mobile_tablist"
            onClick={() =>
              setOpenState((prev) => {
                return {
                  ...prev,
                  status: !openState.status,
                };
              })
            }
          >
            <p onClick={() => setOpenState()}>{openState.value}</p>
            <span> &#9660;</span>
            <div
              className={
                openState.status
                  ? "mobile_tablist_modal mobile_tablist_modal_active"
                  : "mobile_tablist_modal"
              }
            >
              {[
                "Resturant",
                "Cottage",
                "Castle",
                "fantast city",
                "beach",
                " Carbins",
                "  Off-grid",
                "  Farm",
              ].map((item) => (
                <p
                  key={item}
                  onClick={() =>
                    setOpenState((prev) => {
                      return { ...prev, value: item };
                    })
                  }
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="location">
            location <img src={setting} alt="" />
          </div>
        </div>
        <Collections data={placeData} />
      </div>
    </div>
  );
};

export default Place;
