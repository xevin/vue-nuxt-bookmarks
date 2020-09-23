module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-nuxt-bookmarks',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/vue-nuxt-bookmarks/favicon.png'}
    ],
  },
  css: [
    '~assets/css/main.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  router: {
    base: '/vue-nuxt-bookmarks/'
  },
  generate: {
    dir: 'public'
  },
  plugins: [{src: '~/plugins/localStorage.js', ssr: false}],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
