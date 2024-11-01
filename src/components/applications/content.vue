<script>
import OpenAppBtn from "../ui/buttons/openAppBtn.vue";

export default {
  components: {
    OpenAppBtn,
  },
};
</script>

<template>
  <article class="app">
    <OpenAppBtn />
  </article>
</template>

<style scoped>
.app {
  box-sizing: border-box;

  background-color: red;

  height: 300px;
  width: 300px;

  border: 4px solid #000;
  border-right: 2px solid #000;
  border-radius: 30px 0px 0px 30px;

  display: flex;
}
</style>
