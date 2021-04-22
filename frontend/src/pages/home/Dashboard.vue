<template>
  <div class="container d-inline-flex flex-wrap m-0">
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
        <div  class="card-body d-inline-flex justify-content-center">
          <canvas id="a5"  ></canvas>
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

export default {
  name: "Dashboard",
  mounted: function () {
    new Chart("customtestsChartpi", {
      type: "bar",
      data: {
        labels: ["Normal", "Hypo", "Hyper", 'test'],
        datasets: [
          {
            label: "Female ",
            data: [5, 5 + 7, 5 + 4 , 7],
            backgroundColor: ["orange", "#4bb4e6", "#ffb4e6" , '#a885d8'],
           
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
        labels: ["Normal", "Hypo", "Hyper", 'test',"Normal", "Hypo", "Hyper", 'test'],
        datasets: [
          {
            label: "Female ",
            data: [5, 5 + 7, 5 + 4 , 7,5, 5 + 7, 5 + 4 , 7],
            backgroundColor: ["orange"],
           
            borderWidth: 1,
            fill:'start'
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
        labels: ["Normal", "Hypo"],
        datasets: [
          {
            label: "Female ",
            data: [5, 5 + 7],
            backgroundColor: ["orange"],
           
            borderWidth: 1,
          
          },
         
        ],
      },
      options: {
         indexAxis: 'y',
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
