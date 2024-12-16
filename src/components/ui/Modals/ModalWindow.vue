<script>
export default {
  props: {
    closeModalWindow: Function,
  },
};
</script>
<template>
  <div class="modal-window">
    <div @click="closeModalWindow" class="overlay"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;

  z-index: 5;

  background-color: rgba(0, 0, 0, 0.575);

  height: 100%;
  width: 100%;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 15;
}
</style>
