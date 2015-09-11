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
/******/ 	__webpack_require__.p = "assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = render;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _iso = __webpack_require__(1);

	var _iso2 = _interopRequireDefault(_iso);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _reactRouterLibLocation = __webpack_require__(4);

	var _reactRouterLibLocation2 = _interopRequireDefault(_reactRouterLibLocation);

	var _altInstance = __webpack_require__(7);

	var _altInstance2 = _interopRequireDefault(_altInstance);

	var _routesJsx = __webpack_require__(9);

	var _routesJsx2 = _interopRequireDefault(_routesJsx);

	var _baseHtml = __webpack_require__(38);

	var _baseHtml2 = _interopRequireDefault(_baseHtml);

	var renderToMarkup = function renderToMarkup(alt, state, req, res) {
	  var markup = undefined;
	  var location = new _reactRouterLibLocation2['default'](req.path, req.query);
	  alt.bootstrap(state);
	  _reactRouter2['default'].run(_routesJsx2['default'], location, function (error, initialState, transition) {
	    if (transition.isCancelled) {
	      return res.redirect(302, transition.redirectInfo.pathname);
	    }
	    var content = _react2['default'].renderToString(_react2['default'].createElement(_reactRouter2['default'], initialState));
	    markup = _iso2['default'].render(content, alt.flush());
	  });

	  return markup;
	};

	/*
	 * Export render function to be used in server/config/routes.js
	 * We grab the state passed in from the server and the req object from Express/Koa
	 * and pass it into the Router.run function.
	 */

	function render(state, req, res) {
	  var markup = renderToMarkup(_altInstance2['default'], state, req, res);
	  return _baseHtml2['default'].replace('CONTENT', markup);
	}

	;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("iso");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _NavigationTypes = __webpack_require__(5);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	/**
	 * A Location answers two important questions:
	 *
	 * 1. Where am I?
	 * 2. How did I get here?
	 */

	var Location = (function () {
	  function Location() {
	    var pathname = arguments[0] === undefined ? '/' : arguments[0];
	    var query = arguments[1] === undefined ? null : arguments[1];
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

	    _classCallCheck(this, Location);

	    this.pathname = pathname;
	    this.query = query;
	    this.state = state;
	    this.navigationType = navigationType;
	  }

	  Location.isLocation = function isLocation(object) {
	    return object instanceof Location;
	  };

	  return Location;
	})();

	exports['default'] = Location;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(6);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	var NavigationTypes = (0, _keymirror2['default'])({

	  /**
	   * Indicates that navigation was caused by a call to history.push.
	   */
	  PUSH: null,

	  /**
	   * Indicates that navigation was caused by a call to history.replace.
	   */
	  REPLACE: null,

	  /**
	   * Indicates that navigation was caused by some other action such
	   * as using a browser's back/forward buttons and/or manually manipulating
	   * the URL in a browser's location bar. This is the default.
	   *
	   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	   * for more information.
	   */
	  POP: null

	});

	exports['default'] = NavigationTypes;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("keymirror");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _alt = __webpack_require__(8);

	var _alt2 = _interopRequireDefault(_alt);

	exports['default'] = new _alt2['default']();
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "altInstance.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("alt");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _componentsApp = __webpack_require__(10);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _componentsVote = __webpack_require__(18);

	var _componentsVote2 = _interopRequireDefault(_componentsVote);

	var _componentsAbout = __webpack_require__(30);

	var _componentsAbout2 = _interopRequireDefault(_componentsAbout);

	var _componentsLogin = __webpack_require__(32);

	var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

	var _componentsLogout = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"components/Logout\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsLogout2 = _interopRequireDefault(_componentsLogout);

	var _componentsDashboard = __webpack_require__(37);

	var _componentsDashboard2 = _interopRequireDefault(_componentsDashboard);

	var _storesUserStore = __webpack_require__(34);

	var _storesUserStore2 = _interopRequireDefault(_storesUserStore);

	function requireAuth(nextState, transition) {
	  if (!_storesUserStore2['default'].getState().user.get('authenticated')) {
	    transition.to('/login', null, { nextPathname: nextState.location.pathname });
	  }
	}

	exports['default'] = _react2['default'].createElement(
	  _reactRouter2['default'],
	  { component: _componentsApp2['default'] },
	  _react2['default'].createElement(_reactRouter2['default'], { path: '/', component: _componentsVote2['default'] }),
	  _react2['default'].createElement(_reactRouter2['default'], { path: 'login', component: _componentsLogin2['default'] }),
	  _react2['default'].createElement(_reactRouter2['default'], { path: 'logout', component: _componentsLogout2['default'] }),
	  _react2['default'].createElement(_reactRouter2['default'], { path: 'dashboard', component: _componentsDashboard2['default'], onEnter: requireAuth }),
	  _react2['default'].createElement(_reactRouter2['default'], { path: 'about', component: _componentsAbout2['default'] })
	);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _Navbar = __webpack_require__(11);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	var _Footer = __webpack_require__(15);

	var _Footer2 = _interopRequireDefault(_Footer);

	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_Navbar2['default'], null),
	        _react2['default'].createElement(_reactRouter.RouteHandler, null),
	        _react2['default'].createElement(_Footer2['default'], null)
	      );
	    }
	  }]);

	  return App;
	})(_react2['default'].Component);

	exports['default'] = App;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _storesNavbarStore = __webpack_require__(12);

	var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

	var _actionsNavbarActions = __webpack_require__(13);

	var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

	var Navbar = (function (_React$Component) {
	  _inherits(Navbar, _React$Component);

	  function Navbar(props) {
	    _classCallCheck(this, Navbar);

	    _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, props);
	    this.state = _storesNavbarStore2['default'].getState();
	    this.onChange = this.onChange.bind(this);
	  }

	  _createClass(Navbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesNavbarStore2['default'].listen(this.onChange);
	      _actionsNavbarActions2['default'].getQuestionCount();

	      // let socket = io.connect();

	      // socket.on('onlineUsers', (data) => {
	      //   NavbarActions.updateOnlineUsers(data);
	      // });

	      $(document).ajaxStart(function () {
	        _actionsNavbarActions2['default'].updateAjaxAnimation('fadeIn');
	      });

	      $(document).ajaxComplete(function () {
	        setTimeout(function () {
	          _actionsNavbarActions2['default'].updateAjaxAnimation('fadeOut');
	        }, 750);
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesNavbarStore2['default'].unlisten(this.onChange);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(state) {
	      this.setState(state);
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      event.preventDefault();

	      var searchQuery = this.state.searchQuery.trim();

	      if (searchQuery) {
	        _actionsNavbarActions2['default'].findQuestion({
	          searchQuery: searchQuery,
	          searchForm: this.refs.searchForm.getDOMNode(),
	          router: this.context.router
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'nav',
	        { className: 'navbar navbar-default navbar-static-top' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'navbar-header' },
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
	            _react2['default'].createElement(
	              'span',
	              { className: 'sr-only' },
	              'Toggle navigation'
	            ),
	            _react2['default'].createElement('span', { className: 'icon-bar' }),
	            _react2['default'].createElement('span', { className: 'icon-bar' }),
	            _react2['default'].createElement('span', { className: 'icon-bar' })
	          ),
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: '/', className: 'navbar-brand' },
	            'CHOICES'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { id: 'navbar', className: 'navbar-collapse collapse' },
	          _react2['default'].createElement(
	            'form',
	            { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
	            _react2['default'].createElement(
	              'div',
	              { className: 'input-group' },
	              _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: ' Questions', value: this.state.searchQuery, onChange: _actionsNavbarActions2['default'].updateSearchQuery }),
	              _react2['default'].createElement(
	                'span',
	                { className: 'input-group-btn' },
	                _react2['default'].createElement(
	                  'button',
	                  { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
	                  'SEARCH'
	                )
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { className: 'nav navbar-nav' },
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/' },
	                'Home'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/top' },
	                'Top Questions'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/ask' },
	                'Ask a Question'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'navbar-right' },
	              _react2['default'].createElement(
	                _reactRouter.Link,
	                { to: '/#' },
	                'Users Online',
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'badge badge-up badge-danger' },
	                  this.state.onlineUsers
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Navbar;
	})(_react2['default'].Component);

	Navbar.contextTypes = {
	  router: _react2['default'].PropTypes.func.isRequired
	};

	exports['default'] = Navbar;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Navbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _alt = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../alt\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _alt2 = _interopRequireDefault(_alt);

	var _actionsNavbarActions = __webpack_require__(13);

	var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

	var NavbarStore = (function () {
	  function NavbarStore() {
	    _classCallCheck(this, NavbarStore);

	    this.bindActions(_actionsNavbarActions2['default']);
	    this.totalQuestions = 0;
	    this.onlineUsers = 0;
	    this.searchQuery = '';
	    this.ajaxAnimationClass = '';
	  }

	  _createClass(NavbarStore, [{
	    key: 'onFindQuestionSuccess',
	    value: function onFindQuestionSuccess(payload) {
	      payload.router.transitionTo('/questions/' + payload.question._id);
	    }
	  }, {
	    key: 'onFindQuestionFail',
	    value: function onFindQuestionFail(payload) {
	      payload.searchForm.classList.add('shake');
	      setTimeout(function () {
	        payload.searchForm.classList.remove('shake');
	      }, 1000);
	    }
	  }, {
	    key: 'onUpdateOnlineUsers',
	    value: function onUpdateOnlineUsers(data) {
	      this.onlineUsers = data.onlineUsers;
	    }
	  }, {
	    key: 'onUpdateAjaxAnimation',
	    value: function onUpdateAjaxAnimation(className) {
	      this.ajaxAnimationClass = className; //fadein or fadeout
	    }
	  }, {
	    key: 'onUpdateSearchQuery',
	    value: function onUpdateSearchQuery(event) {
	      this.searchQuery = event.target.value;
	    }
	  }, {
	    key: 'onGetQuestionCountSuccess',
	    value: function onGetQuestionCountSuccess(data) {
	      this.getQuestionsCount = data.count;
	    }
	  }, {
	    key: 'onGetQuestionCountFail',
	    value: function onGetQuestionCountFail(jqXhr) {
	      toastr.error(jqXhr.responseJSON.message);
	    }
	  }]);

	  return NavbarStore;
	})();

	exports['default'] = _alt2['default'].createStore(NavbarStore);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NavbarStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _alt = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../alt\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _alt2 = _interopRequireDefault(_alt);

	var _underscore = __webpack_require__(14);

	var NavbarActions = (function () {
	  function NavbarActions() {
	    _classCallCheck(this, NavbarActions);

	    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getQuestionCountSuccess', 'getQuestionCountFail', 'findQuestionSuccess', 'findQuestionFail');
	  }

	  _createClass(NavbarActions, [{
	    key: 'findQuestion',
	    value: function findQuestion(payload) {
	      var _this = this;

	      $.ajax({
	        url: '/questions/search',
	        data: { question: payload.searchQuery }
	      }).done(function (data) {
	        (0, _underscore.assign)(payload, data);
	        _this.actions.findQuestionSuccess(payload);
	      }).fail(function () {
	        _this.actions.findQuestionFail(payload);
	      });
	    }
	  }, {
	    key: 'getQuestionCount',
	    value: function getQuestionCount() {
	      var _this2 = this;

	      $.ajax({ url: '/questions/count' }).done(function (data) {
	        _this2.actions.getQuestionCountSuccess(data);
	      }).fail(function (jqXhr) {
	        _this2.actions.getQuestionCountFail(jqXhr);
	      });
	    }
	  }]);

	  return NavbarActions;
	})();

	exports['default'] = _alt2['default'].createActions(NavbarActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NavbarActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("underscore");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _storesFooterStore = __webpack_require__(16);

	var _storesFooterStore2 = _interopRequireDefault(_storesFooterStore);

	var _actionsFooterActions = __webpack_require__(17);

	var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

	var Footer = (function (_React$Component) {
	  _inherits(Footer, _React$Component);

	  function Footer(props) {
	    _classCallCheck(this, Footer);

	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).call(this, props);
	    this.state = _storesFooterStore2['default'].getState();
	    this.onChange = this.onChange.bind(this);
	  }

	  _createClass(Footer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesFooterStore2['default'].listen(this.onChange);
	      _actionsFooterActions2['default'].getTopQuestions();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesFooterStore2['default'].unlisten(this.onChange);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(state) {
	      this.setState(state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var topQuestions = this.state.questions.map(function (Question) {
	        return _react2['default'].createElement(
	          'li',
	          { key: Question._id },
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: '/questions/' + Question._id },
	            _react2['default'].createElement('img', { className: 'thumb-md', src: Question.choice1_img })
	          )
	        );
	      });

	      return _react2['default'].createElement(
	        'footer',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _react2['default'].createElement(
	              'p',
	              null,
	              'Powered by ',
	              _react2['default'].createElement(
	                'strong',
	                null,
	                'Node.js'
	              ),
	              ', ',
	              _react2['default'].createElement(
	                'strong',
	                null,
	                'MongoDB'
	              ),
	              ' and ',
	              _react2['default'].createElement(
	                'strong',
	                null,
	                'React'
	              ),
	              ' with Flux (alt) architecture and server-side rendering.'
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              'You may view the ',
	              _react2['default'].createElement(
	                'a',
	                { href: 'https://github.com/jayteesanchez/project-4' },
	                'Source Code'
	              ),
	              ' behind this project on GitHub.'
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              '© 2015 Jaytee Sanchez'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Footer;
	})(_react2['default'].Component);

	exports['default'] = Footer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _alt = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../alt\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _alt2 = _interopRequireDefault(_alt);

	var _actionsFooterActions = __webpack_require__(17);

	var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

	var FooterStore = (function () {
	  function FooterStore() {
	    _classCallCheck(this, FooterStore);

	    this.bindActions(_actionsFooterActions2['default']);
	    this.questions = [];
	  }

	  _createClass(FooterStore, [{
	    key: 'onGetTopQuestionsSuccess',
	    value: function onGetTopQuestionsSuccess(data) {
	      this.questions = data.slice(0, 5);
	    }
	  }, {
	    key: 'onGetTopQuestionsFail',
	    value: function onGetTopQuestionsFail(jqXhr) {
	      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
	    }
	  }]);

	  return FooterStore;
	})();

	exports['default'] = _alt2['default'].createStore(FooterStore);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "FooterStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _alt = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../alt\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _alt2 = _interopRequireDefault(_alt);

	var FooterActions = (function () {
	  function FooterActions() {
	    _classCallCheck(this, FooterActions);

	    this.generateActions('getTopQuestionsSuccess', 'getTopQuestionsFail');
	  }

	  _createClass(FooterActions, [{
	    key: 'getTopQuestions',
	    value: function getTopQuestions() {
	      var _this = this;

	      $.ajax({ url: '/questions/top' }).done(function (data) {
	        _this.actions.getTopQuestionsSuccess(data);
	      }).fail(function (jqXhr) {
	        _this.actions.getTopQuestionsFail(jqXhr);
	      });
	    }
	  }]);

	  return FooterActions;
	})();

	exports['default'] = _alt2['default'].createActions(FooterActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "FooterActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _componentsEntryBox = __webpack_require__(19);

	var _componentsEntryBox2 = _interopRequireDefault(_componentsEntryBox);

	var _componentsMainSection = __webpack_require__(24);

	var _componentsMainSection2 = _interopRequireDefault(_componentsMainSection);

	var _componentsScoreboard = __webpack_require__(28);

	var _componentsScoreboard2 = _interopRequireDefault(_componentsScoreboard);

	var _scssComponents_vote = __webpack_require__(27);

	var _scssComponents_vote2 = _interopRequireDefault(_scssComponents_vote);

	var Vote = (function (_React$Component) {
	  _inherits(Vote, _React$Component);

	  function Vote() {
	    _classCallCheck(this, Vote);

	    _get(Object.getPrototypeOf(Vote.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Vote, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: _scssComponents_vote2['default'].vote },
	        _react2['default'].createElement(_componentsEntryBox2['default'], { topic: this.props.QuestionStore.newQuestion }),
	        _react2['default'].createElement(_componentsMainSection2['default'], { topics: this.props.QuestionStore.questions }),
	        _react2['default'].createElement(_componentsScoreboard2['default'], { topics: this.props.QuestionStore.questions })
	      );
	    }
	  }]);

	  return Vote;
	})(_react2['default'].Component);

	exports['default'] = Vote;

	Vote.propTypes = {
	  QuestionStore: _react2['default'].PropTypes.object
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Vote.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _actionsQuestionActions = __webpack_require__(20);

	var _actionsQuestionActions2 = _interopRequireDefault(_actionsQuestionActions);

	var _componentsQuestionTextInput = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"components/QuestionTextInput\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsQuestionTextInput2 = _interopRequireDefault(_componentsQuestionTextInput);

	var _scssComponents_entrybox = __webpack_require__(23);

	var _scssComponents_entrybox2 = _interopRequireDefault(_scssComponents_entrybox);

	var EntryBox = (function (_React$Component) {
	  _inherits(EntryBox, _React$Component);

	  function EntryBox() {
	    _classCallCheck(this, EntryBox);

	    _get(Object.getPrototypeOf(EntryBox.prototype), 'constructor', this).apply(this, arguments);

	    this._onSave = function (question) {
	      _actionsQuestionActions2['default'].create(question);
	    };

	    this._onChange = function (question) {
	      _actionsQuestionActions2['default'].typing(question);
	    };
	  }

	  _createClass(EntryBox, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: _scssComponents_entrybox2['default'].entrybox },
	        _react2['default'].createElement(
	          'h1',
	          { className: _scssComponents_entrybox2['default'].entrybox__header },
	          'Vote for your top hack idea'
	        ),
	        _react2['default'].createElement(_componentsQuestionTextInput2['default'], { className: _scssComponents_entrybox2['default'].entrybox__input, value: this.props.question, placeholder: 'Question...', onChange: this._onChange, onSave: this._onSave }),
	        _react2['default'].createElement(_componentsQuestionTextInput2['default'], { className: _scssComponents_entrybox2['default'].entrybox__input, value: this.props.choice1, placeholder: 'Choice 1', onChange: this._onChange, onSave: this._onSave }),
	        _react2['default'].createElement(_componentsQuestionTextInput2['default'], { className: _scssComponents_entrybox2['default'].entrybox__input, value: this.props.choice1_img, placeholder: 'Choice 1 Image URL', onChange: this._onChange, onSave: this._onSave }),
	        _react2['default'].createElement(_componentsQuestionTextInput2['default'], { className: _scssComponents_entrybox2['default'].entrybox__input, value: this.props.choice2, placeholder: 'Choice 2', onChange: this._onChange, onSave: this._onSave }),
	        _react2['default'].createElement(_componentsQuestionTextInput2['default'], { className: _scssComponents_entrybox2['default'].entrybox__input, value: this.props.choice2_img, placeholder: 'Choice 2 Image URL', onChange: this._onChange, onSave: this._onSave })
	      );
	    }
	  }]);

	  return EntryBox;
	})(_react2['default'].Component);

	exports['default'] = EntryBox;

	EntryBox.propTypes = { question: _react2['default'].PropTypes.string };
	module.exports = exports['default'];

	/**
	 * Event handler called within QuestionTextInput.
	 * Defining this here allows QuestionTextInput to be used in multiple places
	 * in different ways.
	 * @param {string} text
	 */

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "EntryBox.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _altInstance = __webpack_require__(7);

	var _altInstance2 = _interopRequireDefault(_altInstance);

	var _utilsQuestionWebAPIUtils = __webpack_require__(21);

	var _utilsQuestionWebAPIUtils2 = _interopRequireDefault(_utilsQuestionWebAPIUtils);

	var QuestionActions = (function () {
	  function QuestionActions() {
	    _classCallCheck(this, QuestionActions);
	  }

	  _createClass(QuestionActions, [{
	    key: 'create',

	    /*
	     * @param question that user wishes to save
	     */
	    value: function create(question) {
	      // Remove whitespace
	      if (question.trim().length > 0) {
	        // Using the current timestamp in place of a real id.
	        var id = Date.now().toString();
	        var data = {
	          id: id,
	          question: question,
	          choice1: choice1,
	          choice1_img: choice1_img,
	          choice2: choice2,
	          choice2_img: choice2_img
	        };

	        // This dispatches for views to make optimistic updates
	        this.dispatch(data);
	        // Makes an additional call to the server API and actually adds the Question
	        _utilsQuestionWebAPIUtils2['default'].addQuestion(data).done(function success() {
	          // We might not need to do anything it successfully added due to optimistic updates.
	        }).fail(function failure() {
	          // dispatch an event if fails to notify user that it has failed
	        });
	      }
	    }

	    /*
	     * @param String Question id to increment with
	     */
	  }, {
	    key: 'increment',
	    value: function increment(id, vote) {
	      this.dispatch(id, vote);

	      _utilsQuestionWebAPIUtils2['default'].updateQuestion({ id: id, votes: vote }, false, true);
	    }

	    /*
	     * @param String Question id to decrement with
	     */
	  }, {
	    key: 'decrement',
	    value: function decrement(id, vote) {
	      this.dispatch(id, vote);

	      _utilsQuestionWebAPIUtils2['default'].updateQuestion({ id: id, votes: vote }, false, false);
	    }

	    /*
	     * @param String Question id to destroy
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy(id) {
	      this.dispatch(id);

	      // Keeping it consistent with the above
	      _utilsQuestionWebAPIUtils2['default'].deleteQuestion({ id: id });
	    }

	    /*
	     *  @param String question that user is typing in input field
	     */
	  }, {
	    key: 'typing',
	    value: function typing(question) {
	      this.dispatch(question);
	    }
	  }]);

	  return QuestionActions;
	})();

	exports['default'] = _altInstance2['default'].createActions(QuestionActions);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "QuestionActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _jquery = __webpack_require__(22);

	var _jquery2 = _interopRequireDefault(_jquery);

	/*
	 * Following code reuse and dependencies guidelines from:
	 * https://github.com/bendc/frontend-guidelines#dependencies
	 */
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	var toObject = function toObject(val) {
	  if (val == null) {
	    throw new TypeError('Object assign cannot be called with null or undefined');
	  }

	  return Object(val);
	};

	var ownEnumerableKeys = function ownEnumerableKeys(obj) {
	  var keys = Object.getOwnPropertyNames(obj);

	  if (Object.getOwnPropertySymbols) {
	    keys = keys.concat(Object.getOwnPropertySymbols(obj));
	  }

	  return keys.filter(function (key) {
	    return propIsEnumerable.call(obj, key);
	  });
	};

	var assign = (function () {
	  return Object.assign ? Object.assign : function (target) {
	    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      sources[_key - 1] = arguments[_key];
	    }

	    var keys = undefined;
	    var to = toObject(target);
	    sources.forEach(function (val) {
	      keys = ownEnumerableKeys(Object(val));
	      keys.forEach(function (key) {
	        to[key] = val[key];
	      });
	    });
	    return to;
	  };
	})();

	var merge = function merge() {
	  for (var _len2 = arguments.length, sources = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    sources[_key2] = arguments[_key2];
	  }

	  return assign.apply(undefined, [{}].concat(sources));
	};

	var utils = {
	  /*
	   * @param question provide a question object
	   *         {
	   *           id: String,
	   *           count: Number,
	   *           text: String
	   *         }
	   * @return jqXHR object (which implements the Promise interface)
	   */
	  addQuestion: function addQuestion(question) {
	    return _jquery2['default'].ajax({
	      url: '/question',
	      data: JSON.stringify(question),
	      type: 'POST',
	      contentType: 'application/json'
	    });
	  },

	  /*
	   * TODO: Make arguments more generic
	   * @param Object - partial question or id
	   * @param Boolean - if this is a full update then we have to specify it
	   * @param Boolean - true if increment, false if decrement
	   */
	  updateQuestion: function updateQuestion(question, isFull, isIncrement) {
	    var data = merge(question, {
	      isFull: isFull,
	      isIncrement: isIncrement
	    });
	    return _jquery2['default'].ajax({
	      url: '/question',
	      data: JSON.stringify(data),
	      type: 'PUT',
	      contentType: 'application/json'
	    });
	  },

	  deleteQuestion: function deleteQuestion(question) {
	    return _jquery2['default'].ajax({
	      url: '/question',
	      data: JSON.stringify(question),
	      contentType: 'application/json',
	      type: 'DELETE'
	    });
	  }

	};

	exports['default'] = utils;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "QuestionWebAPIUtils.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 23 */
/***/ function(module, exports) {

	

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(25);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _componentsQuestionItem = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"components/QuestionItem\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsQuestionItem2 = _interopRequireDefault(_componentsQuestionItem);

	var _scssComponents_vote = __webpack_require__(27);

	var _scssComponents_vote2 = _interopRequireDefault(_scssComponents_vote);

	var MainSection = (function (_React$Component) {
	  _inherits(MainSection, _React$Component);

	  function MainSection() {
	    _classCallCheck(this, MainSection);

	    _get(Object.getPrototypeOf(MainSection.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(MainSection, [{
	    key: 'render',
	    value: function render() {
	      var questions = this.props.questions.toKeyedSeq().map(function (question, key) {
	        return _react2['default'].createElement(_componentsQuestionItem2['default'], { id: key, key: key, question: question.get('question') });
	      }).toArray();
	      return _react2['default'].createElement(
	        'div',
	        { className: _scssComponents_vote2['default']['main-section'] },
	        _react2['default'].createElement(
	          'h3',
	          { className: _scssComponents_vote2['default']['main-section__header'] },
	          'Help these People Make Choices!'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          { className: _scssComponents_vote2['default']['main-section__list'] },
	          questions
	        )
	      );
	    }
	  }]);

	  return MainSection;
	})(_react2['default'].Component);

	exports['default'] = MainSection;

	MainSection.propTypes = { questions: _react2['default'].PropTypes.instanceOf(_immutable2['default'].OrderedMap) };
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MainSection.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("immutable");

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(25);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _componentsQuestionCountItem = __webpack_require__(29);

	var _componentsQuestionCountItem2 = _interopRequireDefault(_componentsQuestionCountItem);

	var _scssComponents_vote = __webpack_require__(27);

	var _scssComponents_vote2 = _interopRequireDefault(_scssComponents_vote);

	var Scoreboard = (function (_React$Component) {
	  _inherits(Scoreboard, _React$Component);

	  function Scoreboard() {
	    _classCallCheck(this, Scoreboard);

	    _get(Object.getPrototypeOf(Scoreboard.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Scoreboard, [{
	    key: 'render',
	    value: function render() {
	      var questionListItems = this.props.topics.toKeyedSeq().map(function (question, key) {
	        return _react2['default'].createElement(_componentsQuestionCountItem2['default'], {
	          key: key,
	          question: question.get('question'),
	          choice1: question.get('choice1'),
	          votesChoice1: question.get('votes.votes_choice_1'),
	          choice2: question.get('choice2'),
	          votesChoice2: question.get('votes.votes_choice_2') });
	      }).toArray();
	      return _react2['default'].createElement(
	        'div',
	        { className: _scssComponents_vote2['default'].scoreboard },
	        _react2['default'].createElement(
	          'h3',
	          { className: _scssComponents_vote2['default'].scoreboard__header },
	          'Vote count'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          { className: _scssComponents_vote2['default'].scoreboard__list },
	          questionListItems
	        )
	      );
	    }
	  }]);

	  return Scoreboard;
	})(_react2['default'].Component);

	exports['default'] = Scoreboard;

	Scoreboard.propTypes = { topics: _react2['default'].PropTypes.instanceOf(_immutable2['default'].OrderedMap) };
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Scoreboard.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _scssComponents_vote = __webpack_require__(27);

	var _scssComponents_vote2 = _interopRequireDefault(_scssComponents_vote);

	var QuestionCountItem = (function (_React$Component) {
	  _inherits(QuestionCountItem, _React$Component);

	  function QuestionCountItem() {
	    _classCallCheck(this, QuestionCountItem);

	    _get(Object.getPrototypeOf(QuestionCountItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(QuestionCountItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'li',
	        { className: _scssComponents_vote2['default']['scoreboard__list-item'], key: this.props.key },
	        _react2['default'].createElement(
	          'span',
	          { className: _scssComponents_vote2['default'].scoreboard__topic },
	          this.props.question
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: _scssComponents_vote2['default'].scoreboard__count },
	          this.props.votes.votes_choice_1
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: _scssComponents_vote2['default'].scoreboard__count },
	          this.props.votes.votes_choice_2
	        )
	      );
	    }
	  }]);

	  return QuestionCountItem;
	})(_react2['default'].Component);

	exports['default'] = QuestionCountItem;

	QuestionCountItem.propTypes = {
	  key: _react2['default'].PropTypes.string,
	  question: _react2['default'].PropTypes.string,
	  votes: {
	    votes_choice_1: _react2['default'].PropTypes.number,
	    votes_choice_2: _react2['default'].PropTypes.number
	  }
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "QuestionCountItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _scssComponents_about = __webpack_require__(31);

	var _scssComponents_about2 = _interopRequireDefault(_scssComponents_about);

	var About = (function (_React$Component) {
	  _inherits(About, _React$Component);

	  function About() {
	    _classCallCheck(this, About);

	    _get(Object.getPrototypeOf(About.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: _scssComponents_about2['default'].about },
	        _react2['default'].createElement(
	          'h1',
	          { className: _scssComponents_about2['default'].about__header },
	          'About Choices'
	        ),
	        _react2['default'].createElement(
	          'p',
	          { className: _scssComponents_about2['default'].about__description },
	          'For people that need a little extra help to make decision'
	        )
	      );
	    }
	  }]);

	  return About;
	})(_react2['default'].Component);

	exports['default'] = About;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "About.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 31 */
/***/ function(module, exports) {

	

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _immutable = __webpack_require__(25);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsUserActions = __webpack_require__(33);

	var _actionsUserActions2 = _interopRequireDefault(_actionsUserActions);

	var _storesUserStore = __webpack_require__(34);

	var _storesUserStore2 = _interopRequireDefault(_storesUserStore);

	var _scssComponents_login = __webpack_require__(35);

	var _scssComponents_login2 = _interopRequireDefault(_scssComponents_login);

	var Login = (function (_React$Component) {
	  _inherits(Login, _React$Component);

	  /*
	   * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
	   * properties on the constructor
	   * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
	   */

	  function Login(props) {
	    var _this = this;

	    _classCallCheck(this, Login);

	    _get(Object.getPrototypeOf(Login.prototype), 'constructor', this).call(this, props);

	    this._onChange = function () {
	      _this.setState({
	        user: _storesUserStore2['default'].getState().user
	      });
	    };

	    this._onLoginSubmit = function () {
	      var email = _react2['default'].findDOMNode(_this.refs.email).value;
	      var password = _react2['default'].findDOMNode(_this.refs.password).value;
	      _actionsUserActions2['default'].manuallogin({
	        email: email,
	        password: password
	      });
	    };

	    this.state = _storesUserStore2['default'].getState();
	  }

	  _createClass(Login, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _storesUserStore2['default'].listen(this._onChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _storesUserStore2['default'].unlisten(this._onChange);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var renderedResult = undefined;
	      if (this.state.user.get('authenticated')) {
	        renderedResult = _react2['default'].createElement(
	          'h1',
	          { className: _scssComponents_login2['default'].login__header },
	          'You are logged in amigo'
	        );
	      } else {
	        if (this.state.user.get('isWaiting')) {
	          renderedResult = _react2['default'].createElement(
	            'h1',
	            { className: _scssComponents_login2['default'].login__header },
	            'Waiting ...'
	          );
	        } else {
	          renderedResult = _react2['default'].createElement(
	            'div',
	            { className: _scssComponents_login2['default'].login__container },
	            _react2['default'].createElement(
	              'h1',
	              { className: _scssComponents_login2['default'].login__header },
	              'Email Login'
	            ),
	            _react2['default'].createElement(
	              'fieldset',
	              { className: _scssComponents_login2['default'].login__fieldset },
	              _react2['default'].createElement('input', { className: _scssComponents_login2['default'].login__input, type: 'email', ref: 'email', placeholder: 'email' }),
	              _react2['default'].createElement('input', { className: _scssComponents_login2['default'].login__input, type: 'password', ref: 'password', placeholder: 'password' }),
	              _react2['default'].createElement(
	                'button',
	                { className: _scssComponents_login2['default'].login__button + ' ' + _scssComponents_login2['default']['login__button--green'], onClick: this._onLoginSubmit },
	                'Login'
	              ),
	              _react2['default'].createElement(
	                'p',
	                { className: _scssComponents_login2['default'].login__hint },
	                'Hint: email: jaytee@mail.com password: a'
	              )
	            )
	          );
	        }
	      }
	      return _react2['default'].createElement(
	        'div',
	        { className: _scssComponents_login2['default'].login },
	        renderedResult
	      );
	    }
	  }]);

	  return Login;
	})(_react2['default'].Component);

	exports['default'] = Login;

	Login.propTypes = { user: _react2['default'].PropTypes.instanceOf(_immutable2['default'].Map) };
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Login.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	UserActions.js;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _immutable = __webpack_require__(25);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _actionsUserActions = __webpack_require__(33);

	var _actionsUserActions2 = _interopRequireDefault(_actionsUserActions);

	var _altInstance = __webpack_require__(7);

	var _altInstance2 = _interopRequireDefault(_altInstance);

	UserStore.js;

	var UserStore = (function () {

	  /*
	   * The constructor of your store definition receives the alt instance as its first and only argument. All instance variables,
	   * values assigned to `this`, in any part of the StoreModel will become part of state.
	   */

	  function UserStore() {
	    _classCallCheck(this, UserStore);

	    // Instance variables defined anywhere in the store will become the state. You can initialize these in the constructor and
	    // then update them directly in the prototype methods
	    this.user = _immutable2['default'].Map({});

	    // (lifecycleMethod: string, handler: function): undefined
	    // on: This method can be used to listen to Lifecycle events. Normally they would set up in the constructor
	    this.on('init', this.bootstrap);
	    this.on('bootstrap', this.bootstrap);

	    // (listenersMap: object): undefined
	    // bindListeners accepts an object where the keys correspond to the method in your
	    // StoreModel and the values can either be an array of action symbols or a single action symbol.
	    // Remember: alt generates uppercase constants for us to reference
	    this.bindListeners({
	      handleLoginAttempt: _actionsUserActions2['default'].MANUALLOGIN,
	      handleLoginSuccess: _actionsUserActions2['default'].LOGINSUCCESS,
	      handleLogoutAttempt: _actionsUserActions2['default'].LOGOUT,
	      handleLogoutSuccess: _actionsUserActions2['default'].LOGOUTSUCCESS
	    });
	  }

	  // Export our newly created Store

	  _createClass(UserStore, [{
	    key: 'bootstrap',
	    value: function bootstrap() {
	      if (!_immutable2['default'].Map.isMap(this.user)) {
	        this.user = _immutable2['default'].fromJS(this.user);
	      }
	    }
	  }, {
	    key: 'handleLoginAttempt',
	    value: function handleLoginAttempt() {
	      this.user = this.user.set('isWaiting', true);
	      this.emitChange();
	    }
	  }, {
	    key: 'handleLoginSuccess',
	    value: function handleLoginSuccess() {
	      this.user = this.user.merge({ isWaiting: false, authenticated: true });
	      this.emitChange();
	    }
	  }, {
	    key: 'handleLogoutAttempt',
	    value: function handleLogoutAttempt() {
	      this.user = this.user.set('isWaiting', true);
	      this.emitChange();
	    }
	  }, {
	    key: 'handleLogoutSuccess',
	    value: function handleLogoutSuccess() {
	      this.user = this.user.merge({ isWaiting: false, authenticated: false });
	      this.emitChange();
	    }
	  }]);

	  return UserStore;
	})();

	exports['default'] = _altInstance2['default'].createStore(UserStore, 'UserStore');
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 35 */
/***/ function(module, exports) {

	

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Dashboard = (function (_React$Component) {
	  _inherits(Dashboard, _React$Component);

	  function Dashboard() {
	    _classCallCheck(this, Dashboard);

	    _get(Object.getPrototypeOf(Dashboard.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Dashboard, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'Welcome to the Dashboard'
	      );
	    }
	  }]);

	  return Dashboard;
	})(_react2['default'].Component);

	exports['default'] = Dashboard;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jaytee/code/project-4/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Dashboard.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "<!doctype html>\n<html>\n\n<head>\n\n  <meta charset=\"utf-8\"/>\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"/>\n  <title>Choices</title>\n  <meta name=\"description\" content=\"\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css\"/>\n\n</head>\n\n<body>\n\n  <div id=\"app\">Magic Happens Here</div>\n\n<script type=\"text/javascript\" charset=\"utf-8\" src=\"/assets/app.js\"></script>\n</body>\n\n</html>\n";

/***/ }
/******/ ]);