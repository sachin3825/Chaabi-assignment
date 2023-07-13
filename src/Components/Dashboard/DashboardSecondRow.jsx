import React from "react";
import BarChart from "./BarChart";
import PolarAreaChart from "./PolarAreaChart";
import "./DashboardSecondRow.css";
const DashboardSecondRow = () => {
  return (
    <div className='dashboard-second-row'>
      <div className='PolarAreaChart'>
        <PolarAreaChart />
      </div>
      <div className='BarChart'>
        <BarChart title={"last 14 days active workers in training"} />
      </div>
    </div>
  );
};

export default DashboardSecondRow;
