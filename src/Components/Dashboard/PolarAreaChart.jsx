import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [series] = useState([40, 30, 10, 20]); // Update the percentages based on the progress
  const [options] = useState({
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#000"],
    },
    fill: {
      opacity: 2,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
    labels: ["Chapter A", "Chapter B", "Chapter C", "Haven’t started yet"], // Add labels for the chapters
  });

  return (
    <div id='chart'>
      <h2
        style={{
          padding: "10px 20px",
          fontWeight: "lighter",
        }}
      >
        Chapter wise status
      </h2>
      <ReactApexChart
        options={options}
        series={series}
        type='polarArea'
        width={"100%"}
        height={235}
      />
    </div>
  );
};

export default ApexChart;
