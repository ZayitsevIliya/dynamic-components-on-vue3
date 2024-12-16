<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";

export default {
  data() {
    return {
      originalText: "The original text",
      textChanged: false,
    };
  },

  watch: {
    originalText() {
      this.textChanged = true;
    },
  },

  methods: {
    submitChanges() {
      this.textChanged = false;
    },
  },

  components: {
    CloseAppBtn,
  },
};
</script>
<template>
  <CloseAppBtn />
  <div class="v-watch-app">
    <div class="input-text">
      <input v-model="originalText" type="text" />
      <button @click="submitChanges">Submit</button>
    </div>

    <div class="viewEnteredText">
      {{ originalText }}
    </div>
    <h5 v-show="textChanged">Text changed!</h5>
  </div>
</template>
<style scoped>
.v-watch-app {
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
}

.viewEnteredText {
  word-break: break-all;
}
</style>
