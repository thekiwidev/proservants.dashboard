import React from "react";
import { logo } from "../../assets";
import { Notification } from "..";

function Header() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>Header</h1>
      <Notification />
    </div>
  );
}

export default Header;
