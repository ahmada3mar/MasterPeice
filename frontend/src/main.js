import Vue from "vue";
import App from "./App";
import router from "./router";
import Router from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import { TablePlugin } from "bootstrap-vue";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
// import CKEditor  from "@ckeditor/ckeditor5-build-classic"


Vue.component("v-calendar", Calendar);
Vue.component("v-date-picker", DatePicker);
Vue.component("vue-timepicker", VueTimepicker);
import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use( CKEditor );
// Vue.component("ckeditor", CKEditor.component);


Vue.use(Router);



// main.js

// Register components in your 'main.js'

Vue.use(TablePlugin);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App },
});
