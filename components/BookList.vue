<template name="booklist-template">
  <div class="book-list">
    <div class="book-list__item book-item" v-for="book in books" :key="book.id">
      <div class="book-item__cover" :style="{'background-image': 'url(images/' + book.cover + ')' }"></div>

      <div class="wrap">
        <div class="book-item__title">{{ book.title }}
          <span
            class="book-item__bookmark"
            @click="toggleBookmark(book.id)"
            :title="bookmarkMessage(book)">
            <span :class="{bookmarked: isBookmarked(book.id), 'not-bookmarked': !isBookmarked(book.id)}"></span>
          </span>
        </div>

        <div class="book-item__price">{{ book.price }}&nbsp;руб.</div>
        <div class="book-item__category">
          <nuxt-link :to="'/category/' + book.category">{{ book.category }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  template: "#booklist-template",
  props: [
    "books"
  ],
  methods: {
    bookmarkMessage: function(book) {
      var title = "";

      if(this.isBookmarked(book.id)) {
        title="Убрать «"+ book.title +"» из избранного";
      } else {
        title="Добавить «" + book.title + "» в избранное";
      }

      return title
    },
    isBookmarked: function(book_id) {
      var myBooks = this.getBookmarks();

      if (myBooks.length && myBooks.indexOf(book_id) > -1) {
        return true;
      }
      return false;
    },
    setBookmarked: function(book_id) {
      var myBooks = this.getBookmarks();

      if (!this.isBookmarked(book_id)) {
        myBooks.push(book_id);

        if (process.browser) {
          window.localStorage.setItem("bookmarkedBooks", JSON.stringify(myBooks))
        }
      }
    },
    toggleBookmark: function(book_id) {
      if(this.isBookmarked(book_id)) {
        var myBooks = this.getBookmarks();

        var i = myBooks.indexOf(book_id);
        if(i != -1) {
          myBooks.splice(i, 1);
        }

        if (process.browser) {
          window.localStorage.setItem("bookmarkedBooks", JSON.stringify(myBooks))
        }
      } else {
        this.setBookmarked(book_id);
      }

      this.$forceUpdate();
    },
    getBookmarks: function() {
      let ls = [];
      if (process.browser) {
        ls = window.localStorage.getItem("bookmarkedBooks");
      }

      if (ls) {
        try {
          return JSON.parse(ls);
        } catch (SyntaxError) {
          return Array();
        }
      } else {
        return Array();
      }
    }
  }
}
</script>


<style lang="less">
@import (reference) "~font-awesome/less/mixins.less";
@import (reference) "~font-awesome/less/variables.less";
@import (reference) "~font-awesome/less/core.less";


@import "~font-awesome/less/core.less";


@book-cover-border-color: white;

.book-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: -.5em; // уравновешиваем внешние отступы .book-item
}

.book-list__item,
.book-item {
  display: flex;
  width: 400px;
  margin: .5em;
  border: 1px solid white;
  border-radius: .3em;
  overflow: hidden;
  position: relative;

  .wrap {
    padding: .5em;
    flex-grow: 1;
    background-color: white;
  }

  &__title {
    margin-bottom: 1em;
    font-weight: bold;
  }

  &__bookmark {
    position: absolute;
    top: .5em;
    right: .5em;

    &:hover {
      cursor: pointer;
    }

    .bookmarked {
      color: orange;

      &:before {
        .fa-icon();
        content: @fa-var-star;
      }
    }
    .not-bookmarked {

      &:before {
        .fa-icon();
        content: @fa-var-star-o;
      }
    }
  }

  &__cover {
    width: 140px;
    min-width: 140px;
    height: 180px;
    border: .5em solid @book-cover-border-color;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
