import React from "react";
import Chart from "react-apexcharts";

const options = {
  labels: ["Income", "Expense"],
  colors: ["rgb(100, 201, 100);", "rgb(244, 133, 133);"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["rgb(100, 201, 100);", "rgb(244, 133, 133);"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

const TransactionChartSummerty = ({ income = 100, expense = 100 }) => {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
};

export default TransactionChartSummerty;
