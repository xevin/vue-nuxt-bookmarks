<template>
  <div class="book-list">
    <div class="book-list__item" v-for="book in books" :key="book.id">
      <Book v-bind="book" @bookmark="onBookmark(book.id, $event)"/>
    </div>
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
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin: -.5em; // уравновешиваем внешние отступы .book-item
}
</style>
