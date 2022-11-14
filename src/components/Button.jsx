import React from "react";

const Button = ({ text, styles, icon, onclick }) => {
  return (
    <>
      <button style={styles} onClick={onclick} className="button">
        {icon ? icon : ""}
        {text}
      </button>
    </>
  );
};

export default Button;
