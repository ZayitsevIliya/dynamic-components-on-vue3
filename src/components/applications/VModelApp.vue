<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";

export default {
  data() {
    return {
      enteredText: "",
    };
  },

  components: {
    CloseAppBtn,
  },
};
</script>
<template>
  <CloseAppBtn />
  <div class="v-model-app">
    <input v-model="enteredText" type="text" />
    <div class="viewEnteredText">
      {{ enteredText }}
    </div>
  </div>
</template>
<style scoped>
.v-model-app {
  width: 85%;
  height: 85%;

  margin: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 20%;
}

input {
  margin-top: 5%;

  width: 90%;
  height: 10%;
}

.viewEnteredText {
  word-break: break-all;
}
</style>
