import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentApplication: "OpenAppBtn",
      selectedApplication: "VForApp",
      currentFont: "classic-font",
      fontSize: "medium-font",
      currentTheme: "red-blue-theme",
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

    setSelectedFont(state, font) {
      state.currentFont = font;
    },

    setSelectedFontSize(state, size) {
      state.fontSize = size;
    },

    setSelectedTheme(state, selectedTheme) {
      state.currentTheme = selectedTheme;
    },
  },
});

export default store;
