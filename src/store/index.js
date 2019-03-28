import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate';
import view from './view'
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState({ storage: window.localStorage })] : [createPersistedState({ storage: window.localStorage })],
  modules: {
    view,
  },
});
