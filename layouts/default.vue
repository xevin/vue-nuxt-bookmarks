<template>
  <div>
    <header>
      <navigation />
    </header>

    <nuxt />

    <footer></footer>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation,
  }
}
</script>

<style lang="less">
@color-1: #6c5599; // purple
@color-2: gold;
@color-3: #72c248; // green

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body,
.content {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-weight: 100;
  background-color: @color-1;
}

.content {
  h1 {
    text-align: center;
    margin: 1em;
    color: white;
  }
}

footer {
  margin-top: 3rem;
  //height: 5rem;
}
</style>
