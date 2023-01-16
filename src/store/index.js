import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    searchInput: null,
    sorting: false,
    items: [],
    snackbar: {
      text: "",
      show: true,
    },
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
