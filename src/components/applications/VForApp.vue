<script>
import { mapMutations } from "vuex";
import CrossBtn from "../ui/buttons/crossBtn.vue";

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
  <CrossBtn :color="'black'" :crossBtnFunction="closeApp" />
  <div class="v-for-container"></div>
</template>

<style scoped>
.v-for-container {
  width: 85%;
  height: 85%;

  background-color: #0000003c;

  margin: auto;
}
</style>
