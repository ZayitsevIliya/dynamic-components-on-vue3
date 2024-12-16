<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";

export default {
  components: {
    CloseAppBtn,
  },
};
</script>

<template>
  <CloseAppBtn />
  <div class="app-undefined-container">
    <h2>App is undefined :(</h2>
  </div>
</template>

<style scoped>
.app-undefined-container {
  width: 85%;
  height: 85%;

  margin: auto;
  text-align: center;
}
</style>
