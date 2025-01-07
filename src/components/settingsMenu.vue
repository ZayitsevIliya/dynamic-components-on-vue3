<script>
import { mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "setSelectedApp",
      "setSelectedFont",
      "setSelectedFontSize",
      "setSelectedTheme",
      "setSelectedLanguage",
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

    changeLanguage(selectedLanguage) {
      let language = selectedLanguage.target.value;
      this.setSelectedLanguage(language);
    },
  },

  computed: {
    ...mapState([
      "currentApplication",
      "selectedApplication",
      "currentFont",
      "fontSize",
      "currentLanguage",
    ]),
  },
};
</script>

<template>
  <div class="settings-menu-container">
    <div class="settings-menu">
      <div name="Aplictions" class="selectItem">
        <label for="selectApp"
          >{{ currentLanguage.setting_menu.applications }}:</label
        >
        <select
          :value="selectedApplication"
          @change="changeApp"
          name="settings"
          id="selectApp"
        >
          <option value="VForApp">V-for</option>
          <option value="VIfApp">V-if</option>
          <option value="VShowApp">V-show</option>
          <option value="ModalWindowApp">Modal window</option>
          <option value="VModelApp">V-model</option>
          <option value="WatchApp">Watch</option>
          <option value="ToDoApp">Todo</option>
          <option value="">Custom select</option>
        </select>
      </div>
      <div name="Themes" class="selectItem">
        <label for="selectTheme"
          >{{ currentLanguage.setting_menu.themes }}:</label
        >
        <select @change="changeTheme" name="settings3" id="selectTheme">
          <option value="red-blue-theme">
            {{ currentLanguage.setting_menu.red_blue }}
          </option>
          <option value="blue-red-theme">
            {{ currentLanguage.setting_menu.blue_red }}
          </option>
        </select>
      </div>
      <div name="Fonts" class="selectItem">
        <label for="selectFont">{{ currentLanguage.setting_menu.font }}:</label>
        <select
          :value="currentFont"
          @change="changeFont"
          name="settings2"
          id="selectFont"
        >
          <option value="classic-font">
            {{ currentLanguage.setting_menu.classic_font }}
          </option>
          <option value="alternative-font">
            {{ currentLanguage.setting_menu.alternative_font }}
          </option>
        </select>
      </div>
      <div name="Font size" class="selectItem">
        <label for="selectFontSize"
          >{{ currentLanguage.setting_menu.font_size }}:</label
        >
        <select
          :value="fontSize"
          @change="changeFontSize"
          name="FontSize"
          id="selectFontSize"
        >
          <option value="large-font">
            {{ currentLanguage.setting_menu.large_font }}
          </option>
          <option value="medium-font">
            {{ currentLanguage.setting_menu.medium_font }}
          </option>
          <option value="small-font">
            {{ currentLanguage.setting_menu.small_font }}
          </option>
        </select>
      </div>
      <div name="Language" class="selectItem">
        <label for="selectLanguage"
          >{{ currentLanguage.setting_menu.language }}:</label
        >
        <select @change="changeLanguage" name="Language" id="selectLanguage">
          <option value="English">English</option>
          <option value="Russian">Русский</option>
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
