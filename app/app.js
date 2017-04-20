import "./google.js"

let contacts = [
  {
    name: "Telegram",
    path: "http://t.me/ANiconov",
    text: "Общение"
  },
  {
    name: "Instagram",
    path: "http://Instagram.com/artemii.niconov",
    text: "Фото"
  }
]

var app = new Vue({
  el: '#app',
  data: {
    contacts: contacts
  }
})
