<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";

export default {
  data() {
    return {
      enteredText: "",
      expectedText: "Hello world!",
    };
  },

  components: {
    CloseAppBtn,
  },
};
</script>
<template>
  <CloseAppBtn />
  <div class="v-if-app">
    <span>Enter: Hello world!</span>
    <input v-model="enteredText" type="text" />
    <p v-if="enteredText == expectedText">Right. Good job!</p>
    <p v-else-if="enteredText.slice(0, 5) == 'Hello'">You close...</p>
  </div>
</template>
<style scoped>
.v-if-app {
  width: 85%;
  height: 85%;

  margin: auto;
  margin-top: 20%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 5%;
}

.viewEnteredText {
  word-break: break-all;
}
</style>
