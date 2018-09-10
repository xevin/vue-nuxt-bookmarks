<template>
  <div style="text-align: center; margin-top: 4vh">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
