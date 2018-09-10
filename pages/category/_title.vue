<template>
  <div class="content">
    <h1>Жанр «{{ $route.params.title }}»</h1>

    <book-list :books="filteredBooks"></book-list>
  </div>
</template>

<script>
import BookList from "~/components/BookList.vue";
import Navigation from "~/components/Navigation.vue";

import BookLibrary from "~/assets/books";

export default {
  components: {
    BookList,
    Navigation,
  },
  validate({ params }) {
    let books = BookLibrary.books.filter(function(el) {
      if(el.category == params.title)
        return true;
    });
    return Boolean(books.length);
  },
  data: function() {
    var self = this;

    var data = {
      filteredBooks: BookLibrary.books.filter(function(el) {
        if(el.category == self.$route.params.title)
          return true;
      })
    };

    return data
  }
}
</script>
