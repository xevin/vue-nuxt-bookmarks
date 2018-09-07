<template>
  <div>
    <nuxt/>
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
  font-family: "PT Sans", Arial, Helvetica, sans-serif;
  background-color: lightblue;
}

.content,
nav {
  padding: 0 1em;

  a {
    margin-right: .5em;
    text-decoration: none;
  }

  & > .nuxt-link-exact-active {
    transition: border .1s ease;
    text-decoration: none;
    border-bottom: 3px solid;
  }
}
</style>
