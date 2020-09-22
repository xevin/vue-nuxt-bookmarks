import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'bookStore',
    paths: ['favorites']
  })(store)
}
