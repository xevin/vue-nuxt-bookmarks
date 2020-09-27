<template>
  <div class="book">
    <img
      class="book__cover"
      :src="fullPathToCover"
      :alt="`обложка книги '${title}'`"
      :style="coverStyleObject">

    <div class="book__body">
      <div class="book__title">{{ title }}</div>

      <star-checkbox
        :title="bookmarkTitle"
        class="book__bookmark"
        :value="isBookmarked"
        @input="onBookmark"
      />

      <div class="book__price">{{ price }}&nbsp;руб.</div>

      <div class="book__category">
        <nuxt-link :to="`/category/${category}`">{{ category }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import StarCheckbox from "~/components/star-checkbox";

export default {
  name: "Book",
  components: {StarCheckbox},
  props: {
    id: Number,
    title: String,
    price: Number,
    cover: String,
    coverColor: String,
    category: String
  },
  computed: {
    fullPathToCover() {
      return require(`~/assets/images/${this.cover}`)
    },
    isBookmarked() {
      return this.$store.state.favorites.includes(this.$props.id)
    },
    bookmarkTitle() {
      return this.isBookmarked
        ? "Убрать «" + this.$props.title + "» из избранного"
        : "Добавить «" + this.$props.title + "» в избранное"
    },
    coverStyleObject () {
      return {
        backgroundColor: this.$props.coverColor ? this.$props.coverColor : 'white'
      }
    }
  },
  methods: {
    onBookmark() {
      this.$emit('bookmark', !this.isBookmarked)
    }
  }
}
</script>

<style lang="less">
@book-cover-border-color: white;

.book {
  display: flex;
  border-radius: .3rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 .3rem .5rem rgba(0, 0, 0, .5);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: .3rem;
    pointer-events: none;
  }

  &__body {
    padding: 1rem;
    flex-grow: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 1em;
    font-weight: 600;
  }

  &--fav {
    .ui-icon {
      * {
        fill: gold;
        stroke: gold;
      }
    }
  }

  &__bookmark {
    position: absolute;
    top: .1rem;
    right: .3rem;

    &:hover {
      cursor: pointer;
    }
  }

  &__category {
    margin-top: auto;
  }

  &__cover {
    object-fit: contain;
    width: 140px;
    min-width: 140px;
    height: 180px;
  }
}
</style>
