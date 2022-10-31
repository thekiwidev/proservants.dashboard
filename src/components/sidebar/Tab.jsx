import React from "react";

const Tab = ({ title, icon }) => {
  return (
    <div className="tab-item">
      <icon />
      <p>{title}</p>
    </div>
  );
};

export default Tab;
