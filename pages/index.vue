<template>
  <div class="content">
    <book-list :books="$store.state.bookList"></book-list>
  </div>
</template>

<script>
import BookList from "~/components/BookList.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    BookList,
    Navigation,
  }
}
</script>
