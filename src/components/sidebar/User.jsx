import React from "react";
// ----------------------------
// STYLES
import "./sidebar.scss";

// ----------------------------
// ICONS

import { RiUserSmileLine } from "react-icons/ri";

// ----------------------------
// COMPONENTS

// ----------------------------
// ASSETS

const User = () => {
  return (
    <div className="user-container">
      <div className="user-dp">
        <RiUserSmileLine className="icon" />
      </div>
      <div className="user-info">
        <h3>Hello, {"@thekiwidev"}</h3>
        <p>{"Rider: 220yU4555"}</p>
      </div>
    </div>
  );
};

export default User;
