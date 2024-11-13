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
