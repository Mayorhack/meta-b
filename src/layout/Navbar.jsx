import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Modal from "../components/Modal";
import image66 from "../assets/image66.png";
import image69 from "../assets/image69.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClick = function () {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <div className="navigation">
        <div className="inner_navigation container" data-visible={openMenu}>
          <div className="navigation-logo">
            <Logo />
          </div>
          <nav>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active_link" : "")}
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/place"}
              className={({ isActive }) => (isActive ? "active_link" : "")}
              onClick={() => setOpenMenu(false)}
            >
              Place to stay
            </NavLink>
            <NavLink
              to={""}
              className={({ isActive }) => (isActive ? "" : "inactive")}
            >
              NFTs
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "" : "inactive")}
            >
              Community
            </NavLink>
          </nav>
          <Button
            text={"Connect Wallet"}
            onclick={() => {
              setOpenMenu(false);
              setOpenModal(true);
            }}
          />
        </div>
        <div
          className={openMenu ? "menu menu-open" : "menu"}
          onClick={handleClick}
        >
          <div className="first"></div>
          <div className="middle"></div>
          <div className="last"></div>
        </div>
        <div className="mobile-navigation-logo">
          <Logo />
        </div>
      </div>
      {openModal ? (
        <Modal
          onclick={() => setOpenModal(false)}
          children={
            <div className="wallet_modal">
              <div className="heading">
                <h6>Connect Wallet</h6>
                <p onClick={() => setOpenModal(false)} className={"close"}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
              </div>
              <div className="line"></div>
              <div className="body">
                <p>Choose your preferred wallet:</p>
                <div className="pick">
                  <img src={image66} alt="" />
                  <p>Metamask</p>
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
                      fill="#959DA6"
                    />
                  </svg>
                </div>
                <div className="pick">
                  <img src={image69} alt="" />
                  <p>WalletConnect</p>
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
                      fill="#959DA6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          }
        />
      ) : null}
    </>
  );
};

export default Navbar;
