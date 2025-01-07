<script>
import { mapState } from "vuex";
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";

export default {
  components: {
    CloseAppBtn,
  },

  data() {
    return {
      enteredWords: "",
      wordsArray: [],
    };
  },

  methods: {
    handlingWords() {
      this.wordsArray = this.enteredWords.split(" ").filter((word) => {
        return word != "";
      });
      this.enteredWords = "";
    },
  },

  computed: {
    ...mapState(["currentFont", "currentLanguage"]),
  },
};
</script>

<template>
  <CloseAppBtn />
  <div class="v-for-container">
    <label>
      <span :class="['inputTitle', this.currentFont]"
        >{{ currentLanguage.applications.v_for.title }}:</span
      >
      <div class="inputWords">
        <input
          :placeholder="currentLanguage.applications.v_for.placeholder"
          v-model="enteredWords"
          type="text"
        />
        <button @click="handlingWords">
          {{ currentLanguage.applications.v_for.button }}
        </button>
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
