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

var xhr = new XMLHttpRequest();

var getJSONFile = (path) => {
  var response = {}
  xhr.open("GET", path, false);
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        response = JSON.parse(xhr.responseText)
      } else {
        return xhr.status;
      }
    }
  };
  xhr.onerror = function(e){
    return xhr.status;
  };
  xhr.send();
  return response
}


var getPost = (post) => {
  return getJSONFile("./posts/" + post)
}



var posts = new Vue({
  el: '#posts',
  data: {
    posts: getJSONFile("./posts.json"),
    selected: null,
    status: null,
    post: {
      header: null,
      text: null
    }
  },
  methods: {
    show: function() {
      var post = getPost(this.selected)
      console.log(typeof post );
      if (typeof post === "object"){
        if (post.text && post.header) {
          this.post.header = post.header
          console.log(post.header);
          this.post.text = post.text
        } else {
          this.selected = null
        }
      } else {
        this.selected = null
      }
      return post
    }
  }
})
