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
  el: '#contacts',
  data: {
    contacts: contacts
  }
})

var posts = []
var xhr = new XMLHttpRequest();
xhr.open("GET", "./posts.json", false);


xhr.onload = (e) => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      posts = JSON.parse(xhr.responseText)
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = (e) => {
  console.error(xhr.statusText);
};
xhr.send();

var posts = new Vue({
  el: '#posts',
  data: {
    posts: posts
  }
})
