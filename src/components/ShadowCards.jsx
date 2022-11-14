import React from "react";

const ShadowCard = ({ children, className, onclick }) => {
  return (
    <>
      <div className={className} onClick={onclick}>
        {children}
      </div>
    </>
  );
};

export default ShadowCard;
