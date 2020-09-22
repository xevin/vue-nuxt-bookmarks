<template>
  <div class="is-center">
    <nav class="main-menu">
      <nuxt-link to="/">Все книги</nuxt-link>
      <nuxt-link to="/favorites/">Мои книги</nuxt-link>
      <nuxt-link to="/category/">Жанры</nuxt-link>
    </nav>
  </div>
</template>

<style lang="less">
.main-menu {
  margin: 2em auto;
  display: inline-flex;
  justify-content: center;
  color: white;
  padding-bottom: 1rem;
  gap: 1rem;

  a {
    text-decoration: none;
    color: white;
    border-bottom: 0px solid;
    transition: border .2s ease-in-out;
  }

  & > .nuxt-link-exact-active {
    transition: border .1s ease;
    text-decoration: none;
    border-bottom: 2px solid;
  }
}
</style>
