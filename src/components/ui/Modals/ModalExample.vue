<script>
export default {};
</script>
<template>
  <div class="block">
    <h1>Example</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nemo
      corporis, porro quis architecto doloribus ipsum ab quidem quibusdam,
      facere, soluta eius placeat? Laudantium, recusandae placeat vel rem
      deserunt iste.
    </p>
    <div class="buttons">
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  </div>
</template>
<style scoped>
.block {
  width: 350px;

  background-color: yellow;
}

h1 {
  text-align: center;
}

p {
  margin: 5%;
}

.buttons {
  display: flex;
  justify-content: center;
}

button {
  width: 100px;

  margin: 5%;
}
</style>
