import "./google.js"


let tech = [
  {
    type: 'Bundler',
    name: 'Webpack'
  },
  {
    type: 'MVVM',
    name: 'Vue.js'
  },
  {
    type: 'Style',
    name: 'SASS'
  },
  {
    type: 'JS',
    name: 'Babel'
  }
]


let contacts = [
  {
    name: "Telegram",
    path: "http://t.me/ANiconov"
  },
  {
    name: "Instagram",
    path: "http://Instagram.com/artemii.niconov"
  }
]

var app = new Vue({
  el: '#app',
  data: {
    tech: tech,
    contacts: contacts
  }
})
