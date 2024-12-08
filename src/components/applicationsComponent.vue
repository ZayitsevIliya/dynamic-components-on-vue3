<script>
import OpenAppBtn from "@/components/ui/buttons/openAppBtn.vue";
import ToDoApp from "@/components/applications/toDoApp.vue";
import { mapState } from "vuex";
import VForApp from "@/components/applications/VForApp.vue";
import AppIsUndefined from "@/components/applications/AppIsUndefined.vue";

export default {
  components: {
    OpenAppBtn,
    ToDoApp,
    VForApp,
    AppIsUndefined,
  },

  computed: {
    ...mapState(["currentApplication", "currentTheme"]),
  },
};
</script>

<template>
  <article class="applications-component" :class="[this.currentTheme]">
    <keep-alive>
      <component :is="currentApplication || 'AppIsUndefined'" />
    </keep-alive>
  </article>
</template>

<style scoped>
.applications-component {
  box-sizing: border-box;

  height: 300px;
  width: 300px;

  border: 4px solid #000;
  border-right: 2px solid #000;
  border-radius: 30px 0px 0px 30px;

  display: flex;
  flex-direction: column;
}

.red-blue-theme {
  background-color: red;
  color: black;
}

.blue-red-theme {
  background-color: blueviolet;
  color: white;
}

@media (max-width: 580px) {
  .applications-component {
    border: 4px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 30px 30px 0px 0px;
  }
}
</style>
