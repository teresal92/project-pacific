(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_Q_A_QnACore_jsx"],{

/***/ "./client/src/components/Q&A/QnACore.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/Q&A/QnACore.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config.js */ "./config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fakeData_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fakeData.js */ "./client/src/components/Q&A/fakeData.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

 // import SearchAnswers from './SearchAnswers.jsx';
//import QnAList from './QnAList.jsx';
//import Question from './Question.jsx';




(axios__WEBPACK_IMPORTED_MODULE_9___default().defaults.headers.common.Authorization) = _config_js__WEBPACK_IMPORTED_MODULE_10__.API_KEY;


var QnAList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_8__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_FormControl_FormControl_js-node_modules_mui_material_InputL-0768e8"), __webpack_require__.e("vendors-node_modules_mui_icons-material_ArrowBackIosNew_js-node_modules_mui_material_Accordio-e28e86"), __webpack_require__.e("client_src_components_Q_A_QnAList_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./QnAList.jsx */ "./client/src/components/Q&A/QnAList.jsx"));
});
var Question = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_8__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_FormControl_FormControl_js-node_modules_mui_material_InputL-0768e8"), __webpack_require__.e("vendors-node_modules_mui_icons-material_ArrowBackIosNew_js-node_modules_mui_material_Accordio-e28e86"), __webpack_require__.e("client_src_components_Q_A_Question_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Question.jsx */ "./client/src/components/Q&A/Question.jsx"));
});

var QnACore = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QnACore, _React$Component);

  var _super = _createSuper(QnACore);

  function QnACore(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QnACore);

    _this = _super.call(this, props);
    _this.state = {
      questions: [],
      answers: [],
      prodId: _this.props.prodId,
      userInput: '',
      filteredQuestions: [],
      count: 4,
      allQuestions: [],
      pageCount: 400
    }; // this.getAnswers = this.getAnswers.bind(this);

    _this.getQuestions = _this.getQuestions.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.filterSearch = _this.filterSearch.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.addCount = _this.addCount.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(QnACore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getQuestions();
    }
  }, {
    key: "getQuestions",
    value: function getQuestions() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_9___default().get("/api/qa/questions/?product_id=".concat(this.state.prodId, "&count=").concat(this.state.pageCount)).then( /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee(response) {
          var sortedRes, temp;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  sortedRes = response.data.results.sort(function (a, b) {
                    return b.question_helpfulness - a.question_helpfulness;
                  });
                  temp = sortedRes.splice(0, _this2.state.count);
                  _context.next = 4;
                  return _this2.setState({
                    questions: temp,
                    allQuestions: sortedRes
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())["catch"](function (err) {
        console.error(err);
      });
    }
  }, {
    key: "grabUserInput",
    value: function grabUserInput(e) {
      this.setState({
        userInput: e.target.value
      });
    }
  }, {
    key: "filterSearch",
    value: function filterSearch(e) {
      var _this3 = this;

      var filtered = this.state.allQuestions.filter(function (question) {
        if (_this3.state.userInput.length < 3 || _this3.state.userInput === '') {
          return;
        } else if (question.question_body.toLowerCase().includes(_this3.state.userInput.toLowerCase())) {
          return question;
        }
      });
      var sortedFilter = filtered.sort(function (a, b) {
        return b.question_helpfulness - a.question_helpfulness;
      });
      this.setState({
        filteredQuestions: sortedFilter
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({
        userInput: ''
      });
    }
  }, {
    key: "addCount",
    value: function addCount(count) {
      this.setState({
        count: count
      });
      this.getQuestions();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var questions = this.state.questions;
      return this.state.filteredQuestions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sx: {
          marginTop: 10,
          marginLeft: 61
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sx: {
          margin: 'auto',
          maxWidth: 750,
          minWidth: 450
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        xs: 12,
        sm: 6,
        md: 12,
        item: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        role: "QnA-test1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h6"
      }, "Questions & Answers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("input", {
        className: "search-questions",
        placeholder: "Have a question? Search for answers\u2026",
        onChange: function onChange(e) {
          _this4.grabUserInput(e), _this4.filterSearch(e);
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(QnAList, {
        count: this.state.count,
        addCount: this.addCount,
        questions: this.state.filteredQuestions
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(Question, {
        prodId: this.state.prodId,
        getQuestions: this.getQuestions
      })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__["default"], {
        sx: {
          marginTop: 10,
          marginLeft: 61
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sx: {
          margin: 'auto',
          maxWidth: 750,
          minWidth: 450
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        xs: 12,
        sm: 6,
        md: 12,
        item: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        role: "QnA-test1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "h6"
      }, "Questions & Answers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("input", {
        className: "search-questions",
        placeholder: "Have a question? Search for answers\u2026",
        onChange: function onChange(e) {
          _this4.grabUserInput(e), _this4.filterSearch(e);
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Suspense, {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, "Loading...")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(QnAList, {
        count: this.state.count,
        addCount: this.addCount,
        questions: this.state.questions,
        getQuestions: this.getQuestions
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(Question, {
        prodId: this.state.prodId,
        getQuestions: this.getQuestions
      }))));
    }
  }]);

  return QnACore;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QnACore);

/***/ }),

/***/ "./client/src/components/Q&A/fakeData.js":
/*!***********************************************!*\
  !*** ./client/src/components/Q&A/fakeData.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fakeData = {
  "product_id": "42368",
  "results": [{
    "question_id": 426394,
    "question_body": "Can i wash it?",
    "question_date": "2021-09-23T00:00:00.000Z",
    "asker_name": "sally",
    "question_helpfulness": 4,
    "reported": false,
    "answers": {
      "3990163": {
        "id": 3990163,
        "body": "yes! ",
        "date": "2021-09-23T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 3,
        "photos": []
      }
    }
  }, {
    "question_id": 563413,
    "question_body": "test",
    "question_date": "2022-01-06T00:00:00.000Z",
    "asker_name": "unknown",
    "question_helpfulness": 1,
    "reported": false,
    "answers": {}
  }, {
    "question_id": 573501,
    "question_body": "is this test question posting?",
    "question_date": "2022-02-21T00:00:00.000Z",
    "asker_name": "mattest",
    "question_helpfulness": 0,
    "reported": false,
    "answers": {}
  }, {
    "question_id": 573500,
    "question_body": "is this test question working??",
    "question_date": "2022-02-21T00:00:00.000Z",
    "asker_name": "mattest",
    "question_helpfulness": 0,
    "reported": false,
    "answers": {}
  }, {
    "question_id": 573435,
    "question_body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
    "question_date": "2022-02-18T00:00:00.000Z",
    "asker_name": "es",
    "question_helpfulness": 0,
    "reported": false,
    "answers": {}
  }, {
    "question_id": 573422,
    "question_body": "yeahh totallyfsfsfe",
    "question_date": "2022-02-18T00:00:00.000Z",
    "asker_name": "Estevan",
    "question_helpfulness": 0,
    "reported": false,
    "answers": {}
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fakeData);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module) => {

var API_KEY = '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';
module.exports = {
  API_KEY: API_KEY
};

/***/ })

}]);
//# sourceMappingURL=client_src_components_Q_A_QnACore_jsx.bundle.js.map