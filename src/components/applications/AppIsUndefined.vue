<script>
import { mapMutations } from "vuex";
import CrossBtn from "@/components/ui/buttons/crossBtn.vue";

export default {
  components: {
    CrossBtn,
  },

  methods: {
    ...mapMutations(["closeApp"]),
  },
};
</script>

<template>
  <CrossBtn :crossBtnFunction="closeApp" />
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
