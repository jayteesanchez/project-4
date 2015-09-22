(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var AddQuestionActions = (function () {
  function AddQuestionActions() {
    _classCallCheck(this, AddQuestionActions);

    this.generateActions('addQuestionSuccess', 'addQuestionFail', 'updateQuestion', 'updateChoice1', 'updateChoice1_img', 'updateChoice2', 'updateChoice2_img', 'invalid');
  }

  _createClass(AddQuestionActions, [{
    key: 'addQuestion',
    value: function addQuestion(q, c1, c1_img, c2, c2_img) {
      var _this = this;

      console.log(q, c1, c1_img, c2, c2_img);
      $.ajax({
        type: 'POST',
        url: '/api/questions/',
        data: {
          question: q,
          choice1: c1,
          choice1_img: c1_img,
          choice2: c2,
          choice2_img: c2_img
        }
      }).done(function (data) {
        _this.actions.addQuestionSuccess(data.message);
      }).fail(function (jqXhr) {
        _this.actions.addQuestionFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return AddQuestionActions;
})();

exports['default'] = _alt2['default'].createActions(AddQuestionActions);
module.exports = exports['default'];

},{"../alt":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var FooterActions = function FooterActions() {
  _classCallCheck(this, FooterActions);
};

exports['default'] = _alt2['default'].createActions(FooterActions);
module.exports = exports['default'];

},{"../alt":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var HomeActions = (function () {
  function HomeActions() {
    _classCallCheck(this, HomeActions);

    this.generateActions('getQuestionsSuccess', 'getQuestionsFail', 'vote1Fail', 'vote2Fail', 'changeDisplayFail', 'downVoteFail');
  }

  _createClass(HomeActions, [{
    key: 'getQuestions',
    value: function getQuestions() {
      var _this = this;

      $.ajax({ url: '/api/questions' }).done(function (data) {
        _this.actions.getQuestionsSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getQuestionsFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'vote1',
    value: function vote1(id, count) {
      var _this2 = this;

      $.ajax({
        type: 'PUT',
        url: '/api/questions/' + id,
        data: { votes_choice_1: count + 1 }
      }).done(function (req, res) {
        console.log(req, res);
        _this2.actions.getQuestions();
      }).fail(function (jqXhr) {
        _this2.actions.vote1Fail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'vote2',
    value: function vote2(id, count) {
      var _this3 = this;

      $.ajax({
        type: 'PUT',
        url: '/api/questions/' + id,
        data: { votes_choice_2: count + 1 }
      }).done(function (res) {
        console.log(req, res);
        _this3.actions.getQuestions();
      }).fail(function (jqXhr) {
        _this3.actions.vote2Fail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'changeDisplay',
    value: function changeDisplay(id, change) {
      var _this4 = this;

      $.ajax({
        type: 'PUT',
        url: '/api/questions/' + id,
        data: { display: change }
      }).done(function () {
        _this4.actions.getQuestions();
      }).fail(function (jqXhr) {
        _this4.actions.changeDisplayFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'downVote',
    value: function downVote(id, count) {
      var _this5 = this;

      console.log(id, count);
      $.ajax({
        type: 'PUT',
        url: '/api/questions/' + id,
        data: { downVote: count + 1 }
      }).done(function (res) {
        console.log(res);
        _this5.actions.getQuestions();
      }).fail(function (jqXhr) {
        _this5.actions.downVoteFail(jqXhr.responseJSON.message);
      });
    }
  }, {
    key: 'removeQuestion',
    value: function removeQuestion(id) {
      var _this6 = this;

      console.log(id);
      $.ajax({
        type: 'DELETE',
        url: '/api/questions/' + id
      }).done(function (res) {
        console.log(res);
        _this6.actions.getQuestions();
      }).fail(function (jqXhr) {
        _this6.actions.removeQuestionsFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return HomeActions;
})();

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

},{"../alt":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery');
};

exports['default'] = _alt2['default'].createActions(NavbarActions);
module.exports = exports['default'];

},{"../alt":5,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesAddQuestionStore = require('../stores/AddQuestionStore');

var _storesAddQuestionStore2 = _interopRequireDefault(_storesAddQuestionStore);

var _actionsAddQuestionActions = require('../actions/AddQuestionActions');

var _actionsAddQuestionActions2 = _interopRequireDefault(_actionsAddQuestionActions);

var AddQuestion = (function (_React$Component) {
  _inherits(AddQuestion, _React$Component);

  function AddQuestion(props) {
    _classCallCheck(this, AddQuestion);

    _get(Object.getPrototypeOf(AddQuestion.prototype), 'constructor', this).call(this, props);
    this.state = _storesAddQuestionStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(AddQuestion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesAddQuestionStore2['default'].listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesAddQuestionStore2['default'].unlisten(this.onChange);
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
      console.log(this.state);
      var q = this.state.question.trim();
      var c1 = this.state.choice1;
      var c1_img = this.state.choice1_img;
      var c2 = this.state.choice2;
      var c2_img = this.state.choice2_img;

      if (!q) {
        _actionsAddQuestionActions2['default'].invalid();
        this.refs.questionTextField.getDOMNode().focus();
      }

      if (!c1) {
        _actionsAddQuestionActions2['default'].invalid();
      }

      if (!c1_img) {
        _actionsAddQuestionActions2['default'].invalid();
      }

      if (!c2) {
        _actionsAddQuestionActions2['default'].invalid();
      }

      if (!c2_img) {
        _actionsAddQuestionActions2['default'].invalid();
      }

      if (q && c1 && c1_img && c2 && c2_img) {
        _actionsAddQuestionActions2['default'].addQuestion(q, c1, c1_img, c2, c2_img);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'div',
          { className: 'row fadeInUp animated' },
          _react2['default'].createElement(
            'div',
            { className: 'col-sm-8 col-sm-offset-2' },
            _react2['default'].createElement(
              'div',
              { className: 'panel panel-default' },
              _react2['default'].createElement(
                'div',
                { className: 'panel-heading' },
                'Add your Question!'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'panel-body' },
                _react2['default'].createElement(
                  'form',
                  { onSubmit: this.handleSubmit.bind(this) },
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.questionValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Question'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'questionTextField', value: this.state.question,
                      onChange: _actionsAddQuestionActions2['default'].updateQuestion, autoFocus: true }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.choice1ValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Choice 1'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'choice1TextField', value: this.state.choice1,
                      onChange: _actionsAddQuestionActions2['default'].updateChoice1 }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.choice1_imgValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Choice 1 Image URL'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'choice1_imgTextField', value: this.state.choice1_img,
                      onChange: _actionsAddQuestionActions2['default'].updateChoice1_img }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.choice2ValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Choice 2'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'choice2TextField', value: this.state.choice2,
                      onChange: _actionsAddQuestionActions2['default'].updateChoice2 }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'form-group ' + this.state.choice2_imgValidationState },
                    _react2['default'].createElement(
                      'label',
                      { className: 'control-label' },
                      'Choice 2 Image URL'
                    ),
                    _react2['default'].createElement('input', { type: 'text', className: 'form-control', ref: 'choice2_imgTextField', value: this.state.choice2_img,
                      onChange: _actionsAddQuestionActions2['default'].updateChoice2_img }),
                    _react2['default'].createElement(
                      'span',
                      { className: 'help-block' },
                      this.state.helpBlock
                    )
                  ),
                  _react2['default'].createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-success flipInX animated' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AddQuestion;
})(_react2['default'].Component);

exports['default'] = AddQuestion;
module.exports = exports['default'];

},{"../actions/AddQuestionActions":1,"../stores/AddQuestionStore":13,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

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

},{"./Footer":8,"./Navbar":10,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesFooterStore = require('../stores/FooterStore');

var _storesFooterStore2 = _interopRequireDefault(_storesFooterStore);

var _actionsFooterActions = require('../actions/FooterActions');

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

},{"../actions/FooterActions":2,"../stores/FooterStore":14,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
    this.state = _storesHomeStore2['default'].getState();
    this.onChange = this.onChange.bind(this);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _storesHomeStore2['default'].listen(this.onChange);
      _actionsHomeActions2['default'].getQuestions();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesHomeStore2['default'].unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(question, event) {
      //handles the events for hiding hint display
      if (event.target.id === 'clickDisplay') {
        document.getElementById('hintDisplay').style.display = '';
        document.getElementById('clickDisplay').style.display = 'none';
      } else {
        document.getElementById('hintDisplay').style.display = 'none';
        document.getElementById('clickDisplay').style.display = '';
      }
      //handles the voting Action
      var choice = event.target.alt;
      var id = question._id;

      if (choice === 'votes_choice_1') {
        var count = question.votes_choice_1;
        _actionsHomeActions2['default'].vote1(id, count);
      }
      if (choice === 'votes_choice_2') {
        var count = question.votes_choice_2;
        _actionsHomeActions2['default'].vote2(id, count);
      }
      var count = 0;
    }
  }, {
    key: 'downVoting',
    value: function downVoting(question, event) {
      //handles down voting logic
      var id = question._id;
      var count = question.downVote;
      if (count === 4) {
        return _actionsHomeActions2['default'].removeQuestion(id);
      }
      return _actionsHomeActions2['default'].downVote(id, count);
    }
  }, {
    key: 'changeQuestions',
    value: function changeQuestions(question, event) {
      //handles the question reveal/hide clicks
      var change = true;
      if (question.display) var change = false;
      var id = question._id;
      _actionsHomeActions2['default'].changeDisplay(id, change);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var resizeImg = {
        width: '275px',
        height: '275px'
      };

      var hidden = {
        display: 'none'
      };

      var currentQuestions = this.state.questions.questions;
      if (currentQuestions) {
        var allQuestions = currentQuestions.reverse().map(function (question, index) {
          if (question.display) {
            return _react2['default'].createElement(
              'div',
              { key: question._id, className: 'row fadeInUp animated' },
              _react2['default'].createElement(
                'h3',
                { className: 'text-center', onClick: _this.changeQuestions.bind(_this, question) },
                question.question,
                '?'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col-xs-6 col-sm-6 col-md-5 col-md-offset-1' },
                _react2['default'].createElement(
                  'div',
                  { className: 'thumbnail fadeInUp animated' },
                  _react2['default'].createElement('img', { style: resizeImg, alt: 'votes_choice_1', onClick: _this.handleClick.bind(event, question), src: question.choice1_img }),
                  _react2['default'].createElement(
                    'div',
                    { className: 'caption text-center' },
                    _react2['default'].createElement(
                      'ul',
                      { className: 'list-inline' },
                      _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                          'strong',
                          null,
                          question.choice1
                        )
                      ),
                      _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                          'strong',
                          null,
                          'Votes for:'
                        )
                      ),
                      _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                          'strong',
                          null,
                          question.votes_choice_1
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'col-xs-6 col-sm-6 col-md-5' },
                _react2['default'].createElement(
                  'div',
                  { className: 'thumbnail fadeInUp animated' },
                  _react2['default'].createElement('img', { style: resizeImg, alt: 'votes_choice_2', onClick: _this.handleClick.bind(event, question), src: question.choice2_img }),
                  _react2['default'].createElement(
                    'div',
                    { className: 'caption text-center' },
                    _react2['default'].createElement(
                      'ul',
                      { className: 'list-inline' },
                      _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                          'strong',
                          null,
                          question.choice2
                        )
                      ),
                      _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                          'strong',
                          null,
                          'Votes for:'
                        )
                      ),
                      _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                          'strong',
                          null,
                          question.votes_choice_2
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'h3',
                { className: 'text-center' },
                _react2['default'].createElement(
                  'button',
                  { className: 'btn btn-default btn-sm', onClick: _this.downVoting.bind(event, question) },
                  _react2['default'].createElement('span', { className: 'glyphicon glyphicon-thumbs-down' }),
                  ' ',
                  question.downVote
                ),
                _react2['default'].createElement('span', null)
              )
            );
          }
          if (!question.display) {
            return _react2['default'].createElement(
              'div',
              { key: question._id, alt: question.index, className: 'row thumbnail flipInX animated', onClick: _this.changeQuestions.bind(_this, question) },
              _react2['default'].createElement(
                'h3',
                { className: 'text-center' },
                question.question,
                '?'
              ),
              _react2['default'].createElement(
                'h6',
                { className: 'text-center' },
                _react2['default'].createElement(
                  'strong',
                  null,
                  question.choice1
                ),
                _react2['default'].createElement(
                  'text',
                  null,
                  ' or '
                ),
                _react2['default'].createElement(
                  'strong',
                  null,
                  question.choice2
                ),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  'text',
                  null,
                  'Number of times voted:'
                ),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  'strong',
                  null,
                  question.votes_choice_1 + question.votes_choice_2
                )
              )
            );
          }
        });

        return _react2['default'].createElement(
          'div',
          { className: 'container fadeInUp animated' },
          _react2['default'].createElement(
            'div',
            { className: 'row' },
            _react2['default'].createElement(
              'h6',
              { className: 'text-center fadeIn animated', id: 'clickDisplay', onClick: this.handleClick.bind(event, this.id) },
              'Click for how to play...'
            ),
            _react2['default'].createElement(
              'h6',
              { className: 'text-center fadeIn animated', style: hidden, id: 'hintDisplay', onClick: this.handleClick.bind(event, this.id) },
              _react2['default'].createElement(
                'p',
                null,
                'Click on a title to expand or shrink a question, '
              ),
              _react2['default'].createElement(
                'p',
                null,
                'DownVote for Bad Questions - a total of 4 means deletion, '
              ),
              _react2['default'].createElement(
                'p',
                null,
                'Have fun!'
              )
            )
          ),
          allQuestions
        );
      }
      return _react2['default'].createElement(
        'div',
        { className: 'container' },
        _react2['default'].createElement(
          'div',
          { className: 'row' },
          _react2['default'].createElement(
            'h1',
            null,
            this.state.questions
          )
        )
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeActions":3,"../stores/HomeStore":15,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesNavbarStore = require('../stores/NavbarStore');

var _storesNavbarStore2 = _interopRequireDefault(_storesNavbarStore);

var _actionsNavbarActions = require('../actions/NavbarActions');

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

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _actionsNavbarActions2['default'].updateOnlineUsers(data);
      });

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
                { to: '/', active: true },
                'Home'
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
                'p',
                { className: 'navbar-text navbar-right' },
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

},{"../actions/NavbarActions":4,"../stores/NavbarStore":16,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":12,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsAddQuestion = require('./components/AddQuestion');

var _componentsAddQuestion2 = _interopRequireDefault(_componentsAddQuestion);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/ask', handler: _componentsAddQuestion2['default'] })
);
module.exports = exports['default'];

},{"./components/AddQuestion":6,"./components/App":7,"./components/Home":9,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsAddQuestionActions = require('../actions/AddQuestionActions');

var _actionsAddQuestionActions2 = _interopRequireDefault(_actionsAddQuestionActions);

var AddQuestionStore = (function () {
  function AddQuestionStore() {
    _classCallCheck(this, AddQuestionStore);

    this.bindActions(_actionsAddQuestionActions2['default']);
    this.question = '';
    this.choice1 = '';
    this.choice1_img = '';
    this.choice2 = '';
    this.choice2_img = '';
    this.helpBlock = '';
    this.askValidationState = '';
    this.questionValidationState = '';
    this.choice1ValidationState = '';
    this.choice1_imgValidationState = '';
    this.choice2ValidationState = '';
    this.choice2_imgValidationState = '';
  }

  _createClass(AddQuestionStore, [{
    key: 'onAddQuestionSuccess',
    value: function onAddQuestionSuccess(successMessage) {
      this.askValidationState = 'has-success';
      this.helpBlock = successMessage;
    }
  }, {
    key: 'onAddQuestionFail',
    value: function onAddQuestionFail(errorMessage) {
      this.askValidationState = 'has-error';
      this.helpBlock = errorMessage;
    }
  }, {
    key: 'onUpdateQuestion',
    value: function onUpdateQuestion(event) {
      this.question = event.target.value;
      this.questionValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateChoice1',
    value: function onUpdateChoice1(event) {
      this.choice1 = event.target.value;
      this.choice1ValidationState = '';
    }
  }, {
    key: 'onUpdateChoice1_img',
    value: function onUpdateChoice1_img(event) {
      this.choice1_img = event.target.value;
      this.choice1_imgValidationState = '';
    }
  }, {
    key: 'onUpdateChoice2',
    value: function onUpdateChoice2(event) {
      this.choice2 = event.target.value;
      this.choice2ValidationState = '';
    }
  }, {
    key: 'onUpdateChoice2_img',
    value: function onUpdateChoice2_img(event) {
      this.choice2_img = event.target.value;
      this.choice2_imgValidationState = '';
    }
  }, {
    key: 'onInvalid',
    value: function onInvalid() {
      this.questionValidationState = 'has-error';
      this.helpBlock = 'Something went wrong, Please try again.';
    }
  }]);

  return AddQuestionStore;
})();

exports['default'] = _alt2['default'].createStore(AddQuestionStore);
module.exports = exports['default'];

},{"../actions/AddQuestionActions":1,"../alt":5}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsFooterActions = require('../actions/FooterActions');

var _actionsFooterActions2 = _interopRequireDefault(_actionsFooterActions);

var FooterStore = function FooterStore() {
  _classCallCheck(this, FooterStore);

  this.bindActions(_actionsFooterActions2['default']);
  this.questions = [];
};

exports['default'] = _alt2['default'].createStore(FooterStore);
module.exports = exports['default'];

},{"../actions/FooterActions":2,"../alt":5}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeActions = require('../actions/HomeActions');

var _actionsHomeActions2 = _interopRequireDefault(_actionsHomeActions);

var HomeStore = (function () {
  function HomeStore() {
    _classCallCheck(this, HomeStore);

    this.bindActions(_actionsHomeActions2['default']);
    this.questions = [];
  }

  _createClass(HomeStore, [{
    key: 'onGetQuestionsSuccess',
    value: function onGetQuestionsSuccess(data) {
      this.questions = data;
    }
  }, {
    key: 'onGetQuestionsFail',
    value: function onGetQuestionsFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }, {
    key: 'onVoteFail',
    value: function onVoteFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }, {
    key: 'onChangeDisplayFail',
    value: function onChangeDisplayFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }, {
    key: 'onDownVoteFail',
    value: function onDownVoteFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }, {
    key: 'onRemoveQuestionFail',
    value: function onRemoveQuestionFail(errorMessage) {
      toastr.error(errorMessage);
    }
  }]);

  return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeActions":3,"../alt":5}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsNavbarActions = require('../actions/NavbarActions');

var _actionsNavbarActions2 = _interopRequireDefault(_actionsNavbarActions);

var NavbarStore = (function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_actionsNavbarActions2['default']);
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
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
  }]);

  return NavbarStore;
})();

exports['default'] = _alt2['default'].createStore(NavbarStore);
module.exports = exports['default'];

},{"../actions/NavbarActions":4,"../alt":5}]},{},[11]);
