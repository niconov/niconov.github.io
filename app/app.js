// import "./google.js"

if (location.hostname === "localhost") {
} else {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71368142-3', 'auto');
  ga('send', 'pageview');
}


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


let primaryColor = "#ccc"
// let primaryColor = "#FCA311"
var draw = SVG('drawing')

// var windowResize = function () {
//   let windowWidth = window.innerWidth;
//   let windowHeight = window.innerHeight;
// }
draw.size("100%", "100%")
// draw.size(windowWidth, windowHeight)
var circle = draw.circle(100)
circle.attr({fill: 'rgba(0,0,0,0)' })
circle.stroke({width: 1, color: primaryColor })
circle.center("50%", "50%")
circle.filter(function(add) {
  add.gaussianBlur(1)
})
// window.onresize = windowResize
// windowResize()
