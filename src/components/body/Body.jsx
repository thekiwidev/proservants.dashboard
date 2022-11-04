import React from "react";
import DashboardCard from "../deliverycard/DashboardCard";

import "./Body.scss";

import { TbTruckDelivery, TbTruckReturn, TbFreeRights } from "react-icons/tb";

const Body = () => {
  return (
    <div className="body-contents">
      <div className="cards">
        <DashboardCard
          cardTitle="Completed Delivery"
          amount="38"
          icon={<TbTruckDelivery className="icon completed-delivery-icon" />}
          className="completed-delivery"
        />
        <DashboardCard
          cardTitle="Pending Delivery"
          amount="15"
          icon={<TbTruckReturn className="icon pending-delivery-icon" />}
          className="pending-delivery"
        />
        <DashboardCard
          cardTitle="Total Earnings"
          amount="$149.67"
          icon={<TbFreeRights className="icon total-earnings-icon" />}
          className="total-earnings"
        />
      </div>
      <div className="history"></div>
      <div className="tickets"></div>
      <div className="cancels"></div>
    </div>
  );
};

export default Body;
