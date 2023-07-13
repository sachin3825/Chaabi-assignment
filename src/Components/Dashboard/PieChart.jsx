import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const series = [44, 15];
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#008000", "#FF0000"], // Green and red colors for Passed and Failed
    labels: ["Passed", "Failed"], // Labels for Passed and Failed
    responsive: [
      {
        breakpoint: 180,
        options: {
          chart: {
            width: 500,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div
      id='chart'
      style={{
        width: "400px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "10px",
        // height: "430px",
      }}
    >
      <h2 style={{ margin: "10px", fontWeight: "lighter" }}>Quiz Passing %</h2>
      <ReactApexChart options={options} series={series} type='donut' />
    </div>
  );
};

export default PieChart;
