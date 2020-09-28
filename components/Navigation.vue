<template>
  <div class="is-center">
    <nav class="main-menu">
      <nuxt-link to="/" tabindex="1">Все книги</nuxt-link>
      <nuxt-link to="/favorites/" tabindex="2">Мои книги</nuxt-link>
      <nuxt-link to="/category/" tabindex="3">Жанры</nuxt-link>
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

    &:focus {
      outline: 2px solid fadeout(gold, 20%);
    }
  }

  & > .nuxt-link-exact-active {
    transition: border .1s ease;
    text-decoration: none;
    border-bottom: 2px solid;
  }
}

</style>
