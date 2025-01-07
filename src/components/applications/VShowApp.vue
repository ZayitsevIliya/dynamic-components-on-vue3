<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      pictureVisible: false,
    };
  },

  components: {
    CloseAppBtn,
  },

  methods: {
    showOrHidePicture() {
      this.pictureVisible = !this.pictureVisible;
    },
  },

  computed: {
    ...mapState(["currentLanguage"]),
  },
};
</script>
<template>
  <CloseAppBtn />
  <div class="v-show-app">
    <div class="button">
      <button @click="showOrHidePicture" v-show="!pictureVisible">
        {{ currentLanguage.applications.v_show.show }}
      </button>
      <button @click="showOrHidePicture" v-show="pictureVisible">
        {{ currentLanguage.applications.v_show.hide }}
      </button>
    </div>
    <div v-show="pictureVisible" class="picture">
      <img src="../../assets/pictures/sunrise.jpg" width="100%" alt="" />
    </div>
  </div>
</template>
<style>
.v-show-app {
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 85%;
  height: 85%;

  margin: auto;
}

.picture {
  margin-top: 5%;
}
</style>
