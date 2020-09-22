<template>
  <nav class="main-menu">
    <nuxt-link to="/">Все книги</nuxt-link>
    <nuxt-link to="/favorites/">Мои книги</nuxt-link>
    <nuxt-link to="/category/">Жанры</nuxt-link>
  </nav>
</template>

<style lang="less">
.main-menu {
  margin: 2em auto;
  display: flex;
  justify-content: center;
  padding: 0 1em;

  a {
    margin-right: .5em;
    text-decoration: none;
    color: white;
  }

  & > .nuxt-link-exact-active {
    transition: border .1s ease;
    text-decoration: none;
    border-bottom: 1px solid;
  }
}
</style>
