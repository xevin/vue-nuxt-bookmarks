<template>
  <div class="content">
    <h1 class="title text-white is-center is-block">
      Жанр «{{ $route.params.title }}»
    </h1>

    <book-list :books="filteredBooks"></book-list>
  </div>
</template>

<script>
import BookList from "~/components/BookList.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    BookList,
    Navigation,
  },
  computed: {
    filteredBooks() {
      return this.$store.state.bookList.filter(({category}) => category === this.$route.params.title)
    }
  }
}
</script>
