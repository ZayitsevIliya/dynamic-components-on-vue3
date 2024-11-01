<script>
import Content from "./components/applications/content.vue";
import Settings from "./components/applications/settings.vue";

export default {
  components: {
    Content,
    Settings,
  },
};
</script>

<template>
  <div class="main-conteiner">
    <Content />
    <Settings />
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
