import React from "react";
import DashboardFirstRow from "./DashboardFirstRow";
import DashboardSecondRow from "./DashboardSecondRow";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
const DashboardContent = () => {
  return (
    <div>
      <DashboardFirstRow />
      <DashboardSecondRow />
      <div
        className='thirdRow'
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <PieChart />
        <div style={{ flex: 1, alignSelf: "center" }}>
          <BarChart title={"daily training completions"} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
