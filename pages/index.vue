<template name="category-page-template">
<div class="content">
  <h1>Последние поступления книг</h1>

  <navigation />

  <book-list :books="filteredBooks"></book-list>
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
    var data = {
      filteredBooks: BookLibrary.books
    };

    return data
  }
}
</script>
