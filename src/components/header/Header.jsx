import React from "react";
import { logo } from "../../assets";
import { Notification } from "..";

function Header({ page, setPage }) {
  setPage("dashboard");

  return (
    <header className="dashboard-header">
      <img src={logo} alt="logo" className="logo" />
      <h2 className="current-page">{page}</h2>
      <Notification />
    </header>
  );
}

export default Header;
