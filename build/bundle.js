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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var contacts = [{
	  name: "Telegram",
	  path: "http://t.me/ANiconov",
	  text: "Общение"
	}, {
	  name: "Instagram",
	  path: "http://Instagram.com/artemii.niconov",
	  text: "Фото"
	}];

	var app = new Vue({
	  el: '#app',
	  data: {
	    contacts: contacts
	  }
		});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	if (location.hostname === "localhost") {} else {
	  (function (i, s, o, g, r, a, m) {
	    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	      (i[r].q = i[r].q || []).push(arguments);
	    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	  ga('create', 'UA-71368142-3', 'auto');
	  ga('send', 'pageview');
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map