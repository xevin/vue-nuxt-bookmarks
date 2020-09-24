<template>
  <div class="content">
    <book-list :books="bookList"></book-list>

    <div class="is-center empty text-white" v-if="!bookList.length">
      <em>У вас ещё нет избранных книг</em>
    </div>
  </div>
</template>

<script>
import BookList from "~/components/BookList.vue";

export default {
  components: {
    BookList,
  },
  data() {
    return {
      // не используем напрямую значения из стора
      // Избранные книги должны отображаться после удаления из избранного
      // чтобы была возможность передумать
      bookList: [...this.$store.getters.favoriteBookList ]
    }
  }
}
</script>

<style>
.empty {
  margin: 3rem;
}
</style>
