<template>
<div>

            
                <div class="col-4"><canvas id="customtestsChartpi" width="100%" height="50"></canvas>
                </div>
              
</div>
</template>

<script>
import Chart  from "chart.js/dist/chart" 
 
       
export default {
 
  name: "Dashboard",
   mounted:function(){
       var ctx = document.getElementById('customtestsChartpi').getContext('2d');
                     new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: ['Normal', 'Hypo', 'Hyper'],
                            datasets: [{
                                label: 'Female ',
                                data: [5, 5 + 7, 5 + 4],
                                backgroundColor: [
                                    'green',
                                    'yellow',
                                    'red',


                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(255, 99, 132, 1)',

                                ],
                                borderWidth: 1
                            }, {
                                label: 'Male ',
                                data: [9, 9 + 1, 9 + 8],
                                backgroundColor: [
                                    'lightgreen',
                                    'lightyellow',
                                    'darksalmon',

                                ],
                                borderColor: [
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(54, 162, 235, 1)',


                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });


   }
}
</script>
