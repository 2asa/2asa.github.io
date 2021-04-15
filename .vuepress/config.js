const { description } = require('../package')

module.exports = {
  title: 'Portale 2asa',
  description: 'La classe di disperati tenta di recuperare!',
  head: [
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }]
  ],
  themeConfig: {
    editLink: false,
    navbar: [
      {
        text: 'Chi siamo',
        link: '/chisiamo/'
      },
      {
        text: 'Rifiuti',
        link: '/rifiuti/'
      }
    ],
    sidebar: {
      '/chisiamo/': [
        {
          title: 'Chi siamo',
          collapsable: false,
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
