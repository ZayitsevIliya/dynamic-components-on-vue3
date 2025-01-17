<script>
import { mapState } from "vuex";
import ApplicationsComponent from "@/components/ApplicationsComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";

export default {
  components: {
    ApplicationsComponent,
    SettingsComponent,
  },

  computed: {
    ...mapState(["currentFont", "fontSize"]),
  },
};
</script>

<template>
  <div class="main-conteiner" :class="[this.currentFont, this.fontSize]">
    <ApplicationsComponent />
    <SettingsComponent />
  </div>
</template>

<style>
.main-conteiner {
  display: flex;
  flex-wrap: wrap;

  margin: auto;
  margin-top: 300px;

  width: 600px;
  min-width: 300px;
}

@media (max-width: 580px) {
  .main-conteiner {
    margin-top: 150px;
    width: 300px;

    margin-left: auto;
  }
}
</style>
