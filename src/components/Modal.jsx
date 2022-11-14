import React from "react";

const Modal = ({ children, onclick }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onclick}>
        <div className="modal-container">{children}</div>
      </div>
    </>
  );
};

export default Modal;
