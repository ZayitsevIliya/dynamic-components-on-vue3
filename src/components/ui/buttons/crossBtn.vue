<script>
export default {
  props: {
    crossBtnFunction: Function,
    color: "black",
  },
};
</script>

<template>
  <div class="container-for-cross-btn">
    <div class="cross-btn">
      <img
        v-if="this.color == 'white'"
        @click="crossBtnFunction"
        src="@/assets/cross-icon-white.svg"
        alt="Cross icon"
      />
      <img
        v-else
        @click="crossBtnFunction"
        src="@/assets/cross-icon-black.svg"
        alt="Cross icon"
      />
    </div>
  </div>
</template>

<style scoped>
.container-for-cross-btn {
  width: 100%;
  height: 12%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
.cross-btn {
  margin: 4%;
  width: 10%;
}

.cross-btn:hover {
  margin: 3.6%;
  width: 11%;

  cursor: pointer;
}

.cross-btn:active {
  margin: 4%;
  width: 10%;
}
</style>
