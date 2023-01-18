export const chartData = {
  labels: ["October", "November", "December"],
  datasets: [
    {
      label: "Phone",
      backgroundColor: "#F0B429",
      data: [4, 14, 35],
    },
    {
      label: "Computer",
      backgroundColor: "#627D98",
      data: [4, 22, 12],
    },
    {
      label: "Other",
      backgroundColor: "#014D40",
      data: [7, 32, 1],
    },
  ],
};

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
