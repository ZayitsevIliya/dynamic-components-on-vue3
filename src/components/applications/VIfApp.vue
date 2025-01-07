<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      enteredText: "",
      expectedText: "Hello world",
    };
  },

  components: {
    CloseAppBtn,
  },

  computed: {
    ...mapState(["currentLanguage"]),
  },
};
</script>
<template>
  <CloseAppBtn />
  <div class="v-if-app">
    <span>{{ currentLanguage.applications.v_if.title }}</span>
    <input v-model="enteredText" type="text" />
    <p v-if="enteredText == expectedText">
      {{ currentLanguage.applications.v_if.finish }}
    </p>
    <p v-else-if="enteredText.slice(0, 5) == 'Hello'">
      {{ currentLanguage.applications.v_if.half_job }}
    </p>
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
