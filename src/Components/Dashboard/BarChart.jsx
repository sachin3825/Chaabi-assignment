import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ title }) => {
  const series = [
    {
      data: [280, 350, 220, 410, 330, 270, 390, 300],
    },
  ];

  const options = {
    chart: {
      height: 20,
      type: "bar",
    },
    colors: ["#008FFB"],
    plotOptions: {
      bar: {
        columnWidth: "25%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "2023-07-01",
        "2023-07-02",
        "2023-07-03",
        "2023-07-04",
        "2023-07-05",
        "2023-07-06",
        "2023-07-07",
        "2023-07-08",
      ],
      labels: {
        style: {
          colors: ["#008FFB"],
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 500,
    },
  };

  return (
    <div
      id='chart'
      style={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h2
        style={{
          padding: "10px 20px",
          fontWeight: "lighter",
        }}
      >
        {title}
      </h2>
      <ReactApexChart
        options={options}
        series={series}
        type='bar'
        height={238}
        width={"100%"}
      />
    </div>
  );
};

export default BarChart;
