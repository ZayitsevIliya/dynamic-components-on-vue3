<script>
export default {
  props: {
    openSettingsBtnFucntion: Function,
  },
};
</script>

<template>
  <div @click="openSettingsBtnFucntion" class="open-settings-btn">
    <img src="../../../assets/settings-icon.svg" alt="Settings icon" />
  </div>
</template>

<style scoped>
.open-settings-btn {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 52%;

  transition: transform 0.2s ease-in-out;
}

.open-settings-btn:hover {
  cursor: pointer;
}

.open-settings-btn:hover img {
  transform: rotate(60deg) scale(104%);
}

.open-settings-btn:active img {
  transform: rotate(60deg) scale(100%);
}
</style>
