<template name="category-page-template">
  <div class="content">
    <book-list :books="filteredBooks"></book-list>

    <div class="is-center empty text-white" v-if="!filteredBooks.length">
      <em>У вас ещё нет избранных книг</em>
    </div>
  </div>
</template>

<script>
import BookList from "~/components/BookList.vue";
import BookLibrary from "~/assets/books";

export default {
  template: "#category-page-template",
  components: {
    BookList,
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
