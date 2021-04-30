<template>
<div>
    <h4  class="col-12 bg-white p-2 mx-0">
        Welcome
    <router-link style="text-decoration: none;" class="ink" to="/trainee/profile">
        
         <span class="text-primary">{{user.name}}</span> 
        </router-link>

    </h4>
  <h3 class="px-4 text-primary">
      Soft-Skills Evaluation statistic
  </h3>
 <div class="container col-12 d-inline-flex flex-wrap m-0 mt-3">
    <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Agility
        </div>
        <div class="card-body">
          <canvas id="Agility" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Leadership skill
        </div>
        <div class="card-body d-inline-flex justify-content-center">
          <canvas id="Leadership"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>

     <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Oral Expression
        </div>
        <div class="card-body">
          <canvas id="oral" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>

     <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Team work
        </div>
        <div class="card-body">
          <canvas id="Team" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
     <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Quality of the answers
        </div>
        <div class="card-body">
          <canvas id="Quality" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
     <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Time management
        </div>
        <div class="card-body">
          <canvas id="Time" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
     <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Presentation skills
        </div>
        <div class="card-body">
          <canvas id="Presentation" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
     <div class="col-lg-3">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-chart-bar mr-1"></i>
          Commit with a business ethics
        </div>
        <div class="card-body">
          <canvas id="ethics" width="100%" height="50"></canvas>
        </div>
        <div class="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
    </div>
  
  </div>
  <h3 class="px-4 text-primary">
      Soft-Skills Sessions Schedule
  </h3>
    <div class="text-center section p-3">
         <v-calendar
      class="custom-calendar max-w-full mt-2"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }" class="bg-light">
        <div
          @dblclick="showModal(day.date)"
          class="flex flex-col h-full z-10 overflow-hidden h-100 w-100 d-inline-flex justify-content-center flex-column"
        >
          <span class="day-label text-sm text-gray-900 day-orange">{{
            day.day
          }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs bg-primary leading-tight rounded-sm p-1 mt-0 mb-1 h-100 w-100"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
    </div>
    </div>
</template>


<script>
import moment from "moment";
import { store } from "../../store/store";
import Chart from "chart.js/dist/chart";
export default {
    data() {
        return {
            user:store.state.user,
     
            timeFrom: {},
      timeTo: {},
      title: "",
      eventDate: "",
      description: "",
      rows: "",
      dataIncome: {},
      stateBtn: "Create",

      masks: {
        weekdays: "WWW",
      },
      attributes: [],

     
    };
  },
  methods: {
   
    moment,
    onChange(time, timeString) {
      console.log(time, timeString);
    },
    
  },
  mounted: function () {
    this.attributes = store.state.events.map((i) => ({
      key: i.id,
      customData: {
        title: i.title,
        class: "py-2 text-white rounded",
      },
      dates: new Date(i.date),
    }));

    new Chart("Agility", {
      type: "doughnut",
      data: {
        labels: ["Normal"],
        datasets: [
          {
            label: "Female ",
            data: [9,1],
            backgroundColor: [
              "#ff7900",
              "transparent",
              
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
  
    new Chart("Leadership", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [5,  2],
            backgroundColor: ["#085ebd", "transparent"],

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
    new Chart("oral", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [6,3],
            backgroundColor: ["#0a6e31", "transparent"],

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
    new Chart("Quality", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [10,8],
            backgroundColor: ["#ff8ad4", "transparent"],

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
    new Chart("Team", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [9,5],
            backgroundColor: ["#492191", "transparent"],

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
    new Chart("Presentation", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [3,  2],
            backgroundColor: ["#ffb400", "transparent"],

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
    new Chart("Time", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [5,  4],
            backgroundColor: ["#d9c2f0", "transparent"],

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
    new Chart("ethics", {
      type: "doughnut",
      data: {
        labels: ["25%"],
        datasets: [
          {
           
            data: [6,8],
            backgroundColor: ["#b5e8f7", "transparent"],

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



<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
.day-orange {
  font-size: 20px;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #0f6bc7;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: rgb(56, 19, 19);
    &.weekday-1,
    &.weekday-7 {
      background-color: rgb(56, 19, 19);
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
<style >
.vc-day {
  user-select: none;
  cursor: pointer;
  margin: 4px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.062);
}

.vc-day:hover {
  background-color: rgb(226, 226, 226) !important;
}

.my-modal {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;

  /* height: 500px; */
  background: white;
  border: 1px black solid;
  z-index: 999;
  padding: 20px;

  text-align: left;
  border-radius: 10px;
}

.overlayer {
  position: absolute;
  background: rgba(0, 0, 0, 0.603);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
}
</style>
<style scoped>
.active {
  background: orange !important;
}
.list-item {
  display: inline-block;
  margin-top: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-top: 100px;
}
</style>