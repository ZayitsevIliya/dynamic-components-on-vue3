<script>
import ApplicationsComponent from "./components/applicationsComponent.vue";
import SettingsComponent from "./components/settingsComponent.vue";

export default {
  components: {
    ApplicationsComponent,
    SettingsComponent,
  },
};
</script>

<template>
  <div class="main-conteiner">
    <ApplicationsComponent />
    <SettingsComponent />
  </div>
</template>

<style scoped>
.main-conteiner {
  display: flex;
  margin: auto;
  margin-top: 300px;

  width: 600px;
  min-width: 600px;
}
</style>
