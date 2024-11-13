<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["selectedApplication"]),
  },

  methods: {
    ...mapMutations(["startSeletedApp"]),
    openApp() {
      this.startSeletedApp(this.selectedApplication);
      console.log(this.selectedApplication);
    },
  },
};
</script>

<template>
  <div @click="openApp" class="open-app-btn">
    <img src="../../../assets/play-icon.svg" alt="Play icon" />
  </div>
</template>

<style scoped>
.open-app-btn {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 66%;
  transition: transform 0.1s ease-in-out;
}

.open-app-btn:hover {
  cursor: pointer;
}

.open-app-btn:hover img {
  transform: scale(104%);
}

.open-app-btn:active img {
  transform: scale(100%);
}
</style>
