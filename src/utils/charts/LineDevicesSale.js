export const chartData = {
  labels: ["January", "Febraury", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My Montly Sales",
      backgroundColor: "#FADB5F",
      borderColor: "#102A43",
      data: [40, 20, 52, 109, 60, 83],
      fill: true,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
