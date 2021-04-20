<template>

  <div class="row m-0">
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Bar Chart Example
        </div>
        <div class="card-body">
          <canvas id="customtestsChartpi" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Bar Chart Example
        </div>
        <div class="card-body">
          <canvas id="customtestsChartpi" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
     <div class="col-lg-12">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Bar Chart Example
        </div>
        <div class="card-body">
          <canvas id="customtestsChartpi" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/dist/chart";

export default {
  name: "Dashboard",
  mounted: function () {
    new Chart("customtestsChartpi", {
      type: "bar",
      data: {
        labels: ["Normal", "Hypo", "Hyper"],
        datasets: [
          {
            label: "Female ",
            data: [5, 5 + 7, 5 + 4],
            backgroundColor: ["green", "yellow", "red"],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: "Male ",
            data: [9, 9 + 1, 9 + 8],
            backgroundColor: ["lightgreen", "lightyellow", "darksalmon"],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>
