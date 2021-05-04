<template>
  <div class="container col-12 d-inline-flex flex-wrap m-0">
    <div class="col-lg-6">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Overall
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
          Male to Female
        </div>
        <div class="card-body d-inline-flex justify-content-center">
          <canvas id="a5"></canvas>
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
          Governorate Distribution
        </div>
        <div class="card-body">
          <canvas id="customtestsChartpi2" width="100%" height="30"></canvas>
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
import { store } from "../../store/store";

export default {
  name: "Dashboard",
  mounted: function () {
    !store.state.user.is_admin ? this.$router.push("/login") : null;

    new Chart("customtestsChartpi", {
      type: "bar",
      data: {
        labels: ["Need Attention", "Poor", "Good", "Very Good", "Excellent"],
        datasets: [
          {
            label: ['Overall' ],
            data: [5, 5 + 7, 5 + 4, 7, 8],
            backgroundColor: [
              "#4bb4e6",
              "#50be87",
              "#ffb4e6",
              "#a885d8",
              "#ffd200",
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
    new Chart("customtestsChartpi2", {
      type: "line",
      data: {
        labels: [
          "Amman",
          "Mafraq",
          "Zarqa",
          "Aqaba",
          "Irbid",
          "Karak",
          "Tafeleh",
          "Maaan",
          "Salt",
          "Jarash",
          "Ajlon",
          "Maadba",
        ],
        datasets: [
          {
            label: "Trainee",
            data: [5, 0, 2, 1, 5, 0, 4, 3, 4, 0, 3, 0, 0],
            backgroundColor: ["orange"],

            borderWidth: 1,
            fill: "start",
            tension: 0.1,
            legend: { display: false },
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
    new Chart("a5", {
      type: "bar",
      data: {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Female > Male ",
            data: [5, 5 + 7],
            backgroundColor: ["#b5e8f7", "#ffe8f7"],

            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
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
