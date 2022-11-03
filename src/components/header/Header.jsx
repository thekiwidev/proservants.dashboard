import React from "react";
import { logo } from "../../assets";
import { Notification } from "..";
import { TbAlignLeft } from "react-icons/tb";
// TbAlignLeft
import "./Header.scss";

function Header({ page, handleMenuCLick }) {
  return (
    <header className="dashboard-header">
      <div className="menu-icon">
        <TbAlignLeft onClick={handleMenuCLick} />
      </div>
      <img src={logo} alt="logo" className="logo" />
      <h2 className="current-page">{page}</h2>
      <Notification />
    </header>
  );
}

export default Header;
