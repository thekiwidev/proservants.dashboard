import React from "react";
// ----------------------------
// STYLES
import "./Sidebar.scss";

import User from "./User";

// ----------------------------
// ICONS

import { RiRunLine } from "react-icons/ri";

import {
  TbTruckDelivery,
  TbLayout2,
  TbTruckOff,
  TbTicket,
  TbSettings,
} from "react-icons/tb";
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
          <TbLayout2 className="icon" />
          <p>Dashboard</p>
        </div>

        <div className="tab-item">
          <TbTruckDelivery className="icon" />
          <p>Delivery</p>
        </div>
        <div className="tab-item">
          <TbTicket className="icon" />
          <p>Tickets</p>
        </div>
        <div className="tab-item">
          <RiRunLine className="icon" />
          <p>Pick Up</p>
        </div>
        <div className="tab-item">
          <TbTruckOff className="icon" />
          <p>Cancels</p>
        </div>
      </nav>
      {/* Settings Tab */}
      <footer>
        {/* <Tab></Tab> */}
        <div className="tab-item">
          <TbSettings className="icon" />
          <p>Settings</p>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
