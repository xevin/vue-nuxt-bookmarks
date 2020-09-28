<template>
<div class="content">
  <ul class="category-list">
    <li v-for="category in $store.getters.categoryList" :key="category">
      <nuxt-link
        class="button button--gold"
        :to="`/category/${category}`"
        :title="`жанр '${category}'`"
      >{{ category }}</nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.category-list {
  color: white;
  display: flex;
  justify-content: center;
  list-style: none;
  gap: .5rem;
  padding: 0;
}
</style>
