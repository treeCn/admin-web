import Vue from 'vue'
import axios from 'axios';
import App from './views/shared/app'
import router from './routers';
import store from './store';
import { axiosConfig } from 'utils';


Vue.config.productionTip = false

import components from '@/components';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(components);
Vue.prototype.axios = axios;
axiosConfig();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
