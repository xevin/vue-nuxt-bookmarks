<template>
  <div class="content">
    <strong class="title text-white is-center is-block">Жанр «{{ $route.params.title }}»</strong>
    <br>

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
