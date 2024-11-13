<script>
import CrossBtn from "@/components/ui/buttons/crossBtn.vue";
import OpenAppBtn from "./ui/buttons/openAppBtn.vue";
import ToDoApp from "./applications/toDoApp.vue";
import { mapMutations, mapState } from "vuex";
import VForApp from "./applications/VForApp.vue";
import AppIsUndefined from "./applications/AppIsUndefined.vue";

export default {
  data() {
    return {
      appIsOpen: false,
    };
  },

  components: {
    OpenAppBtn,
    CrossBtn,
    ToDoApp,
    VForApp,
    AppIsUndefined,
  },

  computed: {
    ...mapState(["currentApplication"]),
  },
};
</script>

<template>
  <article class="applications-component">
    <keep-alive>
      <component :is="currentApplication || 'AppIsUndefined'" />
    </keep-alive>
  </article>
</template>

<style scoped>
.applications-component {
  box-sizing: border-box;

  background-color: red;

  height: 300px;
  width: 300px;

  border: 4px solid #000;
  border-right: 2px solid #000;
  border-radius: 30px 0px 0px 30px;

  display: flex;
  flex-direction: column;
}

@media (max-width: 580px) {
  .applications-component {
    border: 4px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 30px 30px 0px 0px;
  }
}
</style>
