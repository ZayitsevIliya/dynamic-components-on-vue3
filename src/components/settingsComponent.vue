<script>
import SettingsMenu from "@/components/SettingsMenu.vue";
import CrossBtn from "@/components/ui/buttons/CrossBtn.vue";
import OpenSttingsBtn from "@/components/ui/buttons/OpenSttingsBtn.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      settingsMenuOpen: false,
    };
  },

  components: {
    OpenSttingsBtn,
    SettingsMenu,
    CrossBtn,
  },

  methods: {
    switchSettingsMenuState() {
      this.settingsMenuOpen = !this.settingsMenuOpen;
    },
  },

  computed: {
    ...mapState(["currentTheme"]),
  },
};
</script>

<template>
  <article class="settings-component" :class="[this.currentTheme]">
    <OpenSttingsBtn
      :openSettingsBtnFunction="switchSettingsMenuState"
      v-if="!settingsMenuOpen"
    />
    <CrossBtn
      :crossBtnFunction="switchSettingsMenuState"
      v-if="settingsMenuOpen"
    />
    <SettingsMenu v-if="settingsMenuOpen" />
  </article>
</template>

<style scoped>
.settings-component {
  box-sizing: border-box;

  height: 300px;
  width: 300px;

  border: 4px solid #000;
  border-left: 2px solid #000;
  border-radius: 0px 30px 30px 0px;

  display: flex;
  flex-direction: column;
}

.blue-red-theme {
  background-color: red;
  color: black;
}

.red-blue-theme {
  background-color: blueviolet;
  color: white;
}

@media (max-width: 580px) {
  .settings-component {
    border: 4px solid #000;
    border-top: 2px solid #000;
    border-radius: 0px 0px 30px 30px;
  }
}
</style>
