<template>
<div class="content">
  <ul class="category-list">
    <li v-for="category in $store.getters.categoryList" :key="category">
      <nuxt-link :to="`/category/${category}`">{{ category }}</nuxt-link>
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
}

.category-list a {
  color: white;
}
</style>
