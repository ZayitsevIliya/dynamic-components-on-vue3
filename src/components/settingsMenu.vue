<script>
import { mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "setSelectedApp",
      "setSelectedFont",
      "setSelectedFontSize",
      "setSelectedTheme",
    ]),
    changeApp(selectedApplication) {
      let application = selectedApplication.target.value;
      this.setSelectedApp(application);
    },

    changeFont(selectedFont) {
      let font = selectedFont.target.value;
      this.setSelectedFont(font);
    },

    changeFontSize(selectedSize) {
      let size = selectedSize.target.value;
      this.setSelectedFontSize(size);
    },

    changeTheme(selectedTheme) {
      let theme = selectedTheme.target.value;
      this.setSelectedTheme(theme);
    },
  },

  computed: {
    ...mapState([
      "currentApplication",
      "selectedApplication",
      "currentFont",
      "fontSize",
    ]),
  },
};
</script>

<template>
  <div class="settings-menu-container">
    <div class="settings-menu">
      <div name="Aplictions" class="selectItem">
        <label for="selectApp">Applications:</label>
        <select
          :value="selectedApplication"
          @change="changeApp"
          name="settings"
          id="selectApp"
        >
          <option value="VForApp">V-for ✔</option>
          <option value="VIfApp">V-if ✔</option>
          <option value="VShowApp">V-show ✔</option>
          <option value="">Created</option>
          <option value="">Computed</option>
          <option value="">Mounted</option>
          <option value="ModalWindowApp">Modal window</option>
          <option value="">JSON import</option>
          <option value="">Events</option>
          <option value="">Methods</option>
          <option value="VModelApp">V-model ✔</option>
          <option value="WatchApp">Watch ✔</option>
          <option value="ToDoApp">Todo ✔</option>
          <option value="">Custom select</option>
        </select>
      </div>
      <div name="Themes" class="selectItem">
        <label for="selectTheme">Themes:</label>
        <select @change="changeTheme" name="settings3" id="selectTheme">
          <option value="red-blue-theme">Red - Blue</option>
          <option value="blue-red-theme">Blue - Red</option>
        </select>
      </div>
      <div name="Fonts" class="selectItem">
        <label for="selectFont">Font:</label>
        <select
          :value="currentFont"
          @change="changeFont"
          name="settings2"
          id="selectFont"
        >
          <option value="classic-font">Classic</option>
          <option value="alternative-font">Alternative</option>
        </select>
      </div>
      <div name="Font size" class="selectItem">
        <label for="selectFontSize">Font size:</label>
        <select
          :value="fontSize"
          @change="changeFontSize"
          name="FontSize"
          id="selectFontSize"
        >
          <option value="large-font">Large</option>
          <option value="medium-font">Medium</option>
          <option value="small-font">Small</option>
        </select>
      </div>
      <div name="Language" class="selectItem">
        <label for="selectLanguage">Language:</label>
        <select name="Language" id="selectLanguage">
          <option value="2">English</option>
          <option value="1">Русский</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-menu-container {
  width: 100%;
  height: 100%;
}
.settings-menu {
  width: 60%;

  margin: auto;

  display: flex;
  align-items: stretch;
  flex-direction: column;
}

.selectItem {
  display: flex;
  flex-direction: column;

  margin-bottom: 3%;
}
</style>
