import React from "react";
// ----------------------------
// STYLES
import "./sidebar.scss";
// import Tab from "./Tab";
import User from "./User";

// ----------------------------
// ICONS

import {
  RiSettings3Line,
  RiLayoutMasonryLine,
  RiCouponLine,
  RiTakeawayLine,
  RiRunLine,
} from "react-icons/ri";
// ----------------------------
// COMPONENTS

// ----------------------------
// ASSETS

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <User />
      {/*Navigation Tabs */}
      <nav className="navbar-tabs">
        <div className="tab-item">
          <RiLayoutMasonryLine className="icon" />
          <p>Dashboard</p>
        </div>

        <div className="tab-item">
          <RiTakeawayLine className="icon" />
          <p>Delivery</p>
        </div>
        <div className="tab-item">
          <RiCouponLine className="icon" />
          <p>Tickets</p>
        </div>
        <div className="tab-item">
          <RiRunLine className="icon" />
          <p>Pick Up</p>
        </div>
      </nav>
      {/* Settings Tab */}
      <footer>
        {/* <Tab></Tab> */}
        <div className="tab-item">
          <RiSettings3Line className="icon" />
          <p>Settings</p>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
