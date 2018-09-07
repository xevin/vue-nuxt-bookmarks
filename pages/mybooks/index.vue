<template name="category-page-template">
  <div class="content">
    <h1>Избранные книги</h1>

    <navigation />

    <book-list :books="filteredBooks"></book-list>

    <div class="empty" v-if="!filteredBooks.length">
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
  data: function() {

    let myBooks = '[]';
    if (process.browser) {
      myBooks = window.localStorage.getItem("bookmarkedBooks");
    }

    if (myBooks) {
      myBooks = JSON.parse(myBooks);
    }

    var data = {
      filteredBooks: BookLibrary.books.filter(function(el) {
        if (myBooks.indexOf(el.id) >= 0)
          return true;
      })
    };

    return data
  }
}
</script>
