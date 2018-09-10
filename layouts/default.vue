<template>
  <div>
    <nuxt />
  </div>
</template>


<style lang="less">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

::-moz-focus-innerd
button::-moz-focus-inner {
  border: 0;
}
:focus {
  outline:none !important;
}

body,
.content {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-weight: 100;
  background-color: #6c5599;
}

.content {
  h1 {
    text-align: center;
    margin: 1em;
    color: white;
  }
}

.is-center {
  text-align: center;
}

</style>
