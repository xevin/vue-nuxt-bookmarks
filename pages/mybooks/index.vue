<template name="category-page-template">
  <div class="content">
    <h1>Избранные книги</h1>

    <navigation />

    <book-list :books="filteredBooks"></book-list>

    <div class="is-center empty" v-if="!filteredBooks.length">
      <em>У вас ещё нет избранных книг</em>
    </div>
  </div>
</template>

<script>
import BookList from "~/components/BookList.vue";
import Navigation from "~/components/Navigation.vue";

import BookLibrary from "~/assets/books";

export default {
  template: "#category-page-template",
  components: {
    BookList,
    Navigation,
  },
  data() {
    return {
      filteredBooks: [],
    };
  },
  mounted() {
    let myBooks = '[]';

    if (process.browser) {
      let bookmarkedBooskInStorage = window.localStorage.getItem("bookmarkedBooks");
      if (bookmarkedBooskInStorage) {
        myBooks = bookmarkedBooskInStorage;
      }
    }

    myBooks = JSON.parse(myBooks);

    this.filteredBooks = BookLibrary.books.filter(function(el) {
      if (myBooks.indexOf(el.id) >= 0)
        return true;
    })
  }
}
</script>
