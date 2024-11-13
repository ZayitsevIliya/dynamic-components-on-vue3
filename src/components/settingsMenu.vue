<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      theme: "RedBlue",
    };
  },

  methods: {
    ...mapMutations(["setSelectedApp"]),
    changeApp(app) {
      let application = app.target.value;
      this.setSelectedApp(application);
    },
  },

  computed: {},
};
</script>

<template>
  <div class="settings-menu-container">
    <div class="settings-menu">
      <div class="selectItem">
        <label for="selectApp">Applications:</label>
        <select @change="changeApp" name="settings" id="selectApp">
          <option value="VForApp">V-for</option>
          <option value="">V-if</option>
          <option value="">V-show</option>
          <option value="">Created</option>
          <option value="">Computed</option>
          <option value="">Mounted</option>
          <option value="">Data</option>
          <option value="">JSON import</option>
          <option value="">Events</option>
          <option value="">Methods</option>
          <option value="">V-model</option>
          <option value="">Watch</option>
          <option value="ToDoApp">Todo</option>
          <option value="">Custom select</option>
        </select>
      </div>
      <div class="selectItem">
        <label for="selectTheme">Themes:</label>
        <select
          @change="changeTheme"
          v-model="this.theme"
          name="settings3"
          id="selectTheme"
        >
          <option value="RedBlue">Red - Blue</option>
          <option value="BlueRed">Blue - Red</option>
        </select>
      </div>
      <div class="selectItem">
        <label for="selectFont">Font:</label>
        <select name="settings2" id="selectFont">
          <option value="1">Times New Roman</option>
          <option value="2">Arial</option>
        </select>
      </div>
      <div class="selectItem">
        <label for="selectFontSize">Fontsize:</label>
        <select name="Fontsize" id="selectFontSize">
          <option value="3">Large</option>
          <option value="2" selected="selected">Medium</option>
          <option value="1">Small</option>
        </select>
      </div>
      <div class="selectItem">
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
  width: 80%;

  margin-left: auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.selectItem {
  display: flex;
  flex-direction: column;

  color: white;
  font-size: larger;
  font-family: "Times New Roman", Times, serif;

  margin-bottom: 3%;
}
</style>
