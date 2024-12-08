<script>
import { mapMutations, mapState } from "vuex";
import CrossBtn from "@/components/ui/buttons/crossBtn.vue";

export default {
  components: {
    CrossBtn,
  },

  data() {
    return {
      enteredWords: "",
      wordsArray: [],
    };
  },

  methods: {
    ...mapMutations(["closeApp"]),
    handlingWords() {
      this.wordsArray = this.enteredWords.split(" ").filter((word) => {
        return word != "";
      });
      this.enteredWords = "";
    },
  },

  computed: {
    ...mapState(["currentFont"]),
  },
};
</script>

<template>
  <CrossBtn :crossBtnFunction="closeApp" />
  <div class="v-for-container">
    <label>
      <span :class="['inputTitle', this.currentFont]"
        >Enter words separeted by space:</span
      >
      <div class="inputWords">
        <input
          placeholder="Entered words example"
          v-model="enteredWords"
          type="text"
        />
        <button @click="handlingWords">Send</button>
      </div>
    </label>

    <div class="generate">
      <p v-for="(word, index) in wordsArray" :key="index">
        {{ index + 1 }}. {{ word }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.v-for-container {
  width: 85%;
  height: 85%;

  margin: auto;
  margin-top: 5%;
}

.inputTitle {
  font-size: 10px;
}

.inputNumber {
  display: flex;
}

.inputWords {
  display: flex;
}

.generate {
  width: 90%;
  max-height: 80%;

  margin-left: auto;

  display: flex;
  flex-direction: column;

  word-break: break-all;

  scrollbar-gutter: stable;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
