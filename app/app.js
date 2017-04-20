let stack = {
  technologies: {
    Bundler: "Webpack",
    Framework: 'Vue.js',
    Style: "SASS",
    JS: "Babel"
  }
}


var app = new Vue({
  el: '#app',
  data: {
    message: JSON.stringify(stack, null, 2)
  }
})
