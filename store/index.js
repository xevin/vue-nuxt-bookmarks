import bookLibrary from "~/assets/books";

const onlyUnique = (value, index, list) => list.indexOf(value) === index

export const state = () => ({
  bookList: bookLibrary.books,
  favorites: [],
})

const types = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE'
}

export const getters = {
  favoriteBookList(state) {
    return state.bookList.filter(({id}) => state.favorites.includes(id))
  },
  categoryList(state) {
    return state.bookList.map(({category}) => category)
      .filter(onlyUnique)
  }
}

export const mutations = {
  [types.ADD_FAVORITE] (state, bookId) {
    state.favorites.push(bookId)
  },
  [types.REMOVE_FAVORITE] (state, bookId) {
    state.favorites = state.favorites.filter(el => el !== bookId)
  }
}

export const actions = {
  addFavorite({commit}, bookId) {
    commit(types.ADD_FAVORITE, bookId)
  },
  removeFavorite({commit}, bookId) {
    commit(types.REMOVE_FAVORITE, bookId)
  }
}
