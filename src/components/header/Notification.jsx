import React from "react";

// STYLES
import "./header.scss";

// --------------------
// ICONS

import { IoIosNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <div className="notification-bell">
      <IoIosNotificationsOutline />
    </div>
  );
};

export default Notification;
