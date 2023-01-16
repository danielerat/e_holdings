<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  data() {
    return {
      chartData: {
        labels: ["Kigali", "Rubavu", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [402, 20, 80, 10],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        // maintainAspectRatio: false,
      },
    };
  },
};
</script>
