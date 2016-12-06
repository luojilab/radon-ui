module.exports =
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(2);


var isDev = "production" !== 'production';

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  // set router's location
  __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].push(context.url);

  var s = isDev && Date.now();

  // Call preFetch hooks on components matched by the route.
  // A preFetch hook dispatches a store action and returns a Promise,
  // which is resolved when the action is complete and store state has been
  // updated.
  return Promise.all(__WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].getMatchedComponents().map(function (component) {
    if (component.preFetch) {
      return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */]);
    }
  })).then(function () {
    isDev && console.log('data pre-fetch: ' + (Date.now() - s) + 'ms');
    // After all preFetch hooks are resolved, our store is now
    // filled with the state needed to render the app.
    // Expose the state on the render context, and let the request handler
    // inline the state in the HTML response. This allows the client-side
    // store to pick-up the server-side state without having to duplicate
    // the initial data fetching on the client.
    context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */].state;
    return __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */];
  });
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return app; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(_extends({
    store: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */],
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_3__App_vue___default.a));

/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["a"]; });


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var Home = __webpack_require__(15);
var Article = __webpack_require__(14);
var Tag = __webpack_require__(17);
var Login = __webpack_require__(16);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },

    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/article',
        name: 'article',
        component: Article
    }, {
        path: '/tag',
        name: 'tag',
        component: Tag
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
});

router.beforeEach(function (to, from, next) {
    router.app.$store.dispatch('hideHeaderNav');
    next();
});

/* harmony default export */ exports["a"] = router;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

// import { 
//     getUser,
//     userLogout,
//     queryArticleById
// } from '../api'

var state = {
    User: {
        name: 'Awe',
        intro: '123123'
    },
    HeaderNav: {
        show: false,
        navs: [{
            text: '首页',
            route: {
                name: 'home'
            }
        }, {
            text: '文章',
            route: {
                name: 'article'
            }
        }, {
            text: '标签',
            route: {
                name: 'tag'
            }
        }]
    }
};

var mutations = {
    SET_HEADER_NAV: function SET_HEADER_NAV(state, active) {
        state.HeaderNav.show = active;
    }
};

var actions = {
    // for mobile nav
    showHeaderNav: function showHeaderNav(_ref) {
        var commit = _ref.commit;

        commit('SET_HEADER_NAV', true);
    },
    hideHeaderNav: function hideHeaderNav(_ref2) {
        var commit = _ref2.commit;

        commit('SET_HEADER_NAV', false);
    }
};

var getters = {
    User: function User(state) {
        return state.User;
    },
    HeaderNav: function HeaderNav(state) {
        return state.HeaderNav;
    }
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/* harmony default export */ exports["a"] = store;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
  components: {
    umHeader: __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default.a
  }
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    data: function data() {
        return {
            button: {
                signIn: {
                    show: true,
                    state: 'success',
                    line: false,
                    loading: false
                },
                signUp: {
                    show: true,
                    state: 'success',
                    line: true,
                    loading: false
                }
            }
        };
    },

    computed: {
        HeaderNav: function HeaderNav() {
            return this.$store.getters.HeaderNav;
        },
        User: function User() {
            return this.$store.getters.User;
        }
    },
    mounted: function mounted() {
        window.addEventListener('resize', this.checkMobile);
    },

    methods: {
        checkMobile: function checkMobile() {
            if (window.innerWidth > 800) {
                this.$store.dispatch('hideHeaderNav');
            }
        },
        toggleMNav: function toggleMNav() {
            if (this.HeaderNav.show) {
                this.$store.dispatch('hideHeaderNav');
            } else {
                this.$store.dispatch('showHeaderNav');
            }
        }
    }
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    name: 'Article',
    serverCacheKey: function serverCacheKey() {
        return 'tag';
    }
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_compA_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_compA_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_compA_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
    name: 'Home',
    serverCacheKey: function serverCacheKey() {
        return 'home';
    },
    data: function data() {
        return {
            list: ['test', '233']
        };
    },

    computed: {
        User: function User() {
            return this.$store.getters.User;
        }
    },
    components: {
        compA: __WEBPACK_IMPORTED_MODULE_0__components_compA_vue___default.a
    },
    methods: {
        addOne: function addOne() {
            this.list.push('233');
        }
    }
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    name: 'Login',
    serverCacheKey: function serverCacheKey() {
        return 'login';
    },
    methods: {
        refresh: function refresh() {
            location.reload();
        }
    }
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
    name: 'Tag',
    serverCacheKey: function serverCacheKey() {
        return 'tag';
    }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    attrs: {
      "id": "app"
    }
  }, [_h('um-header'), " ", _h('router-view', {
    staticClass: "view"
  })])
}},staticRenderFns: []}

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', [_h('div', {
    staticClass: "content home"
  }, ["\n        it's home page\n        ", _h('div', ["\n            user's name: " + _s(User.name) + "\n        "]), " ", _l((list), function(item) {
    return _h('div', [_s(item)])
  }), " ", _h('button', {
    on: {
      "click": addOne
    }
  }, ["add a 233"]), " ", _h('comp-a')])])
}},staticRenderFns: []}

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _m(0)
}},staticRenderFns: [function (){with(this) {
  return _h('div', [_h('div', {
    staticClass: "content home"
  }, [_h('div', {
    staticClass: "readme"
  }, [_h('a', {
    attrs: {
      "href": "https://github.com/hilongjw/vue-ssr"
    }
  }, [_h('h2', ["Vue SSR"])]), " ", _h('p', ["\n                 Use Vue 2.0 server-side rendering with Express\n             "])])])])
}}]}

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _m(0)
}},staticRenderFns: [function (){with(this) {
  return _h('div', [_h('div', {
    staticClass: "content home"
  }, ["\n         it's entry page\n    "])])
}}]}

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', [_h('div', {
    staticClass: "content home"
  }, ["\n         it's fake Login\n         ", _h('button', {
    on: {
      "click": refresh
    }
  }, [" refresh "])])])
}},staticRenderFns: []}

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('header', {
    staticClass: "header"
  }, [_h('div', {
    staticClass: "header-nav-m",
    on: {
      "click": toggleMNav
    }
  }, [_m(0)]), " ", _h('transition', {
    attrs: {
      "name": "header-nav"
    }
  }, [_h('div', {
    directives: [{
      name: "show",
      value: (HeaderNav.show),
      expression: "HeaderNav.show"
    }],
    staticClass: "header-nav-m-list"
  }, [_l((HeaderNav.navs), function(nav) {
    return _h('router-link', {
      staticClass: "header-nav-item-m",
      attrs: {
        "to": nav.route
      }
    }, [_s(nav.text)])
  })])]), " ", _h('router-link', {
    staticClass: "header-logo",
    attrs: {
      "to": "/home"
    }
  }, [_m(1)]), " ", _h('nav', {
    staticClass: "header-nav"
  }, [_l((HeaderNav.navs), function(nav) {
    return _h('router-link', {
      staticClass: "header-nav-item",
      attrs: {
        "to": nav.route
      }
    }, [_s(nav.text)])
  })]), " ", _t("default"), " ", (!User) ? _h('router-link', {
    staticClass: "header-logo",
    attrs: {
      "to": "/login"
    }
  }, [_h('div', {
    staticClass: "header-sign"
  }, [_h('button', {
    attrs: {
      "button": button.signUp
    }
  }, ["登录"]), " ", _h('button', {
    attrs: {
      "button": button.signIn
    }
  }, ["注册"])])]) : _e()])
}},staticRenderFns: [function (){with(this) {
  return _h('div', {
    staticClass: "header-nav-m-menu ion-navicon"
  })
}},function (){with(this) {
  return _h('span', {
    staticClass: "header-logo-content"
  }, ["Cov-X"])
}}]}

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _m(0)
}},staticRenderFns: [function (){with(this) {
  return _h('div', ["\n    I'm compA\n"])
}}]}

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("vuex");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);