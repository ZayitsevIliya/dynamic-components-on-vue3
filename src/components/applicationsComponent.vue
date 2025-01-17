<script>
import OpenAppBtn from "@/components/ui/buttons/OpenAppBtn.vue";
import ToDoApp from "@/components/applications/ToDoApp.vue";
import { mapState } from "vuex";
import VForApp from "@/components/applications/VForApp.vue";
import VShowApp from "@/components/applications/VShowApp.vue";
import VModelApp from "@/components/applications/VModelApp.vue";
import WatchApp from "@/components/applications/WatchApp.vue";
import VIfApp from "@/components/applications/VIfApp.vue";
import ModalWindowApp from "@/components/applications/ModalWindowApp.vue";

export default {
  components: {
    OpenAppBtn,
    ToDoApp,
    VForApp,
    VShowApp,
    VModelApp,
    WatchApp,
    VIfApp,
    ModalWindowApp,
  },

  computed: {
    ...mapState(["currentApplication", "currentTheme"]),
  },
};
</script>

<template>
  <article class="applications-component" :class="[this.currentTheme]">
    <keep-alive>
      <component :is="currentApplication" />
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
