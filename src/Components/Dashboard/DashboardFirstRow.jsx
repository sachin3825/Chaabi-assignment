import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./DashboardFirstRow.css";
import { BsGraphDown } from "react-icons/bs";

const DashboardFirstRow = () => {
  const [series] = useState([
    {
      data: [80, 40, 25, 50, 49, 60, 20, 91],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "area",
      height: 100,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    labels: [
      "2021-01-01",
      "2021-02-01",
      "2021-03-01",
      "2021-04-01",
      "2021-05-01",
      "2021-06-01",
      "2021-07-01",
      "2021-08-01",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
  });

  const cardsData = [
    {
      title: "In Training working",
      count: "3,354",
      number: "234",
    },
    {
      title: "Video watch-time (hrs)",
      count: "2,433",
      number: "435",
    },
    {
      title: "% Workers Passing Quiz",
      count: "95%",
      number: "24%",
    },
    {
      title: "Avg. Days Token",
      count: "6",
      number: "3",
    },
  ];

  return (
    <div className='cards-container'>
      {cardsData.map((item, index) => (
        <div className='card' key={index}>
          <h3>{item.title}</h3>
          <div className='inner-card'>
            <div className='card-content'>
              <div className='count'>{item.count}</div>
              <div className='small-count'>
                <div className='coloured'>
                  <BsGraphDown />
                  <p>20%</p>
                </div>
                <div>{item.number}</div>
              </div>
            </div>
            <div className='chart-container'>
              <Chart
                options={options}
                series={series}
                type='area'
                height={150}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardFirstRow;
