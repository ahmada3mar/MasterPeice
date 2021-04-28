<template>
  <div class="text-center section">
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
    <div class="p-2 bg-white my-4">
      <b-row class="mb-3">
        <b-col md="3">
          <b-form-input
            v-model="filter"
            type="search"
            id="filterInput"
            placeholder="Type to Search"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table
            striped
            hover
            :items="posts"
            :filter="filter"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
          <template #cell(date)="data">
              {{ new Date(data.item.date).toDateString()  }}
            </template>
          <template #cell(from)="data">
              {{ data.item.timeFrom.HH + " : "  +  data.item.timeFrom.mm }}
            </template>
         
          <template #cell(to)="data">
              {{ data.item.timeTo.HH + " : "  +  data.item.timeTo.mm }}
            </template>
            <template v-slot:cell(actions)="data">
              <b-button variant="warning mx-1" @click="deleteItem(data.item.id)"
                >View</b-button
              >
              <b-button variant="danger mx-1" @click="deleteItem(data.item.id)"
                >Delete</b-button
              >
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </div>
    <div v-if="show" v-on:click="show = false" class="overlayer" />
    <transition name="list">
      <div v-if="show" class="my-modal">
        <div class="col">
          <h4>Add Events</h4>
          <label class="mt-2" for="name">Title</label>
          <input
            id="name"
            name="title"
            v-model="title"
            type="text"
            class="form-control"
          />
          <label class="mt-2" for="email">Description</label>
          <textarea
            id="description"
            name="description"
            v-model="description"
            class="form-control"
          ></textarea>
        </div>

        <div class="row col-12 px-0 mx-0">
          <div class="col-6">
            <label class="mt-2 w-100">From</label>
            <vue-timepicker v-model="timeFrom"></vue-timepicker>
          </div>

          <div class="col-6">
            <label class="mt-2 w-100">To</label>
            <vue-timepicker v-model="timeTo"></vue-timepicker>
          </div>
        </div>
        <div
          @click="addEvent"
          class="btn btn-primary col-12 mt-5 d-flex justify-content-center"
        >
          Create
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import {store} from '../../store/store'
export default {
  data() {
  

    return {
      show: false,
      timeFrom: {},
      timeTo: {},
      title: "",
      eventDate: "",
      description: "",
      rows: "",
      dataIncome: {},

      masks: {
        weekdays: "WWW",
      },
      attributes: [
        
      ],

      perPage: 10,
      currentPage: 1,
      filter: "",
      fields: ["id", "title","description", "date" , "from" , "to" ,"actions"],
      posts: [],
    };
  },
  methods: {
    addEvent() {
      var data = {
        title: this.title,
        description: this.description,
        date: this.eventDate,
        timeFrom: this.timeFrom,
        timeTo: this.timeTo,
      };
      axios.post("http://localhost:8000/addevent", data).then(
        (res) =>
          {this.dataIncome = {
            key: res.data.id,
            customData: {
              title: this.title,
              class: "bg-red-600 text-white",
            },
            dates: this.eventDate,
          };
          this.attributes.push(this.dataIncome);
          this.show=false ;
          store.state.events.push(res.data)
        
    }
      );


    },
    showModal(i) {
      this.show = true;
      this.eventDate = i;
    },
    moment,
    onChange(time, timeString) {
      console.log(time, timeString);
    },
    sss() {
      console.log(this.yourData);
    },
  },
   mounted:function(){
    this.attributes = store.state.events.map(i=> ({
      key: i.id,
            customData: {
              title: i.title,
              class: "bg-red-600 text-white",
            },
            dates:  i.date,
            
    }));
    this.posts = store.state.events ;
  }
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