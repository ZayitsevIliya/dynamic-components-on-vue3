import { createStore } from "vuex";
import languageEng from "@/data/language/language_en.json";
import languageRus from "@/data/language/language_ru.json";

const store = createStore({
  state() {
    return {
      currentApplication: "OpenAppBtn",
      selectedApplication: "VForApp",
      currentFont: "classic-font",
      fontSize: "medium-font",
      currentTheme: "red-blue-theme",
      currentLanguage: languageEng,
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

    setSelectedLanguage(state, selectedLanguage) {
      selectedLanguage == "English"
        ? (state.currentLanguage = languageEng)
        : (state.currentLanguage = languageRus);
    },
  },
});

export default store;
