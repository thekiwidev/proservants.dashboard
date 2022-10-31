import React from "react";

import "./dashboardCard.scss";

const DashboardCard = ({ amount, cardTitle, icon }) => {
  return (
    <div className="dashboard-card">
      {/* top content */}
      <div className="top-content">
        <div className="icon-container">{icon}</div>
        <div className="texts">
          <h3>{cardTitle}</h3>
          <p>{amount}</p>
        </div>
      </div>
      {/* bottom content */}
      <div className="bottom-content"></div>
    </div>
  );
};

export default DashboardCard;
