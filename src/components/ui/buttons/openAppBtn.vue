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
    },
  },
};
</script>

<template>
  <div @click="openApp" class="open-app-btn">
    <svg viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z"
        fill="#000000"
      />
    </svg>
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

svg {
  width: 70%;
  transition: transform 0.1s ease-in-out;
}

.open-app-btn:hover {
  cursor: pointer;
}

.open-app-btn:hover svg {
  transform: scale(104%);
}

.open-app-btn:active svg {
  transform: scale(100%);
}
</style>
