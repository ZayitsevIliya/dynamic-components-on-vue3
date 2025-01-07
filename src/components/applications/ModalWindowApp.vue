<script>
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";
import ModalWindow from "@/components/ui/Modals/ModalWindow.vue";
import ModalExample from "@/components/ui/Modals/ModalExample.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      modalWindowOpen: false,
    };
  },

  components: {
    CloseAppBtn,
    ModalWindow,
    ModalExample,
  },

  methods: {
    changeModalWindowState() {
      this.modalWindowOpen = !this.modalWindowOpen;
    },
  },

  computed: {
    ...mapState(["currentLanguage"]),
  },
};
</script>
<template>
  <CloseAppBtn />
  <div class="modal-window-app">
    <button @click="changeModalWindowState" class="open-window-btn">
      {{ currentLanguage.applications.modal.open_button }}
    </button>
  </div>
  <ModalWindow
    :close-modal-window="changeModalWindowState"
    v-if="modalWindowOpen"
  >
    <ModalExample />
  </ModalWindow>
</template>
<style scoped>
.modal-window-app {
  width: 80%;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}
.open-window-btn {
  width: 40%;
}
</style>
