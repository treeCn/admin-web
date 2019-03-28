import * as types from './mutation-types';

const state = {
  sidebarOpened: true,
};
const getters = {
  sidebarOpened: state => state.sidebarOpened,
};
const actions = {
  toogleSidebar({ state, commit }) {
    state.sidebarOpened
      ? commit(types.CLOSE_SIDEBAR)
      : commit(types.OPEN_SIDEBAR)
  },
};

const mutations = {
  [types.OPEN_SIDEBAR](state) {
    state.sidebarOpened = true;
  },

  [types.CLOSE_SIDEBAR](state) {
    state.sidebarOpened = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}