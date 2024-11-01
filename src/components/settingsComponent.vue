<script>
import OpenSttingsBtn from "./ui/buttons/openSttingsBtn.vue";

export default {
  components: {
    OpenSttingsBtn,
  },
  methods: {
    check() {
      alert("check");
    },
  },
};
</script>

<template>
  <article class="settings-component">
    <OpenSttingsBtn :openSettingsBtnFunction="check" />
  </article>
</template>

<style scoped>
.settings-component {
  box-sizing: border-box;

  background-color: blueviolet;

  height: 300px;
  width: 300px;

  border: 4px solid #000;
  border-left: 2px solid #000;
  border-radius: 0px 30px 30px 0px;

  display: flex;
}
</style>
