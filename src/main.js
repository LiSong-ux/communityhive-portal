import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import qs from 'qs';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueAxios, axios);
Vue.prototype.qs = qs;
Vue.use(ViewUI);

Vue.config.productionTip = false;


axios.defaults.baseURL = 'http://localhost:8083/communityhive_server_war_exploded';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials =true;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
