"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MyBarChart = ({ datasets }) => {
  const labels = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Frequency",
        data: datasets,
        backgroundColor: ["rgba(160, 160, 160, 0.7)"],
        borderColor: ["rgb(160, 160, 160, 0.5)"],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 2,
          topRight: 2,
        },
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: false,
        },
        display: false,
        beginAtZero: true,
        max: 20,
      },
      x: {
        title: {
          display: false,
        },
        display: false,
        beginAtZero: true,
      },
    },
  };
  return (
    <div
      style={{
        width: "150px",
        height: "70px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default MyBarChart;
