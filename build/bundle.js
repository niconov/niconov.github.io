var bundle =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// import "./google.js"

	if (location.hostname === "localhost") {} else {
	  (function (i, s, o, g, r, a, m) {
	    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	      (i[r].q = i[r].q || []).push(arguments);
	    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	  ga('create', 'UA-71368142-3', 'auto');
	  ga('send', 'pageview');
	}

	var contacts = [{
	  name: "Telegram",
	  path: "http://t.me/ANiconov",
	  text: "Общение"
	}, {
	  name: "Instagram",
	  path: "http://Instagram.com/artemii.niconov",
	  text: "Фото"
	}, {
	  name: "VK",
	  path: "vk.html",
	  text: ""
	}, {
	  name: "Правила жизни",
	  path: "liferules.html",
	  text: ""
	}];

	var app = new Vue({
	  el: '#contacts',
	  data: {
	    contacts: contacts
	  }
	});

	var xhr = new XMLHttpRequest();

	var getJSONFile = function getJSONFile(path) {
	  var response = {};
	  xhr.open("GET", path, false);
	  xhr.onload = function (e) {
	    if (xhr.readyState === 4) {
	      if (xhr.status === 200) {
	        response = JSON.parse(xhr.responseText);
	      } else {
	        return xhr.status;
	      }
	    }
	  };
	  xhr.onerror = function (e) {
	    return xhr.status;
	  };
	  xhr.send();
	  return response;
	};

	var getPost = function getPost(post) {
	  return getJSONFile("./posts/" + post);
	};

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
	    show: function show() {
	      var post = getPost(this.selected);
	      console.log(typeof post === 'undefined' ? 'undefined' : _typeof(post));
	      if ((typeof post === 'undefined' ? 'undefined' : _typeof(post)) === "object") {
	        if (post.text && post.header) {
	          this.post.header = post.header;
	          console.log(post.header);
	          this.post.text = post.text;
	        } else {
	          this.selected = null;
	        }
	      } else {
	        this.selected = null;
	      }
	      return post;
	    }
	  }
	});

	var primaryColor = "#ccc";
	// let primaryColor = "#FCA311"
	var draw = SVG('drawing');

	// var windowResize = function () {
	//   let windowWidth = window.innerWidth;
	//   let windowHeight = window.innerHeight;
	// }
	draw.size("100%", "100%");
	// draw.size(windowWidth, windowHeight)
	var circle = draw.circle(100);
	circle.attr({ fill: 'rgba(0,0,0,0)' });
	circle.stroke({ width: 1, color: primaryColor });
	circle.center("50%", "50%");
	circle.filter(function (add) {
	  add.gaussianBlur(1);
	});
	// window.onresize = windowResize
	// windowResize()

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map