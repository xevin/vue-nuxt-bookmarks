<template>
  <div class="book-list">
    <template v-for="book in books">
      <Book v-bind="book" @bookmark="onBookmark(book.id, $event)" :key="book.id" />
    </template>
  </div>
</template>

<script>
import Book from "./Book";

export default {
  components: {
    Book
  },
  props: [
    "books"
  ],
  methods: {
    onBookmark(bookId, value) {
      if (value) {
        this.$store.dispatch('addFavorite', bookId)
      } else {
        this.$store.dispatch('removeFavorite', bookId)
      }
    }
  }
}
</script>


<style lang="less">
.book-list {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 12px;
  padding: 0 1rem;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
