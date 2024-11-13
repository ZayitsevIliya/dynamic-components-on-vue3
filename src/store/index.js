import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentApplication: "OpenAppBtn",
      selectedApplication: "VForApp",
    };
  },

  mutations: {
    closeApp(state) {
      state.currentApplication = "OpenAppBtn";
    },

    startSeletedApp(state, selectedApp) {
      state.currentApplication = selectedApp;
    },

    setSelectedApp(state, app) {
      state.selectedApplication = app;
    },
  },
});

export default store;
