"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_Q_A_QnAList_jsx"],{

/***/ "./node_modules/@mui/icons-material/ExpandMore.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/icons-material/ExpandMore.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Send.js":
/*!**************************************************!*\
  !*** ./node_modules/@mui/icons-material/Send.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send');

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _accordionDetailsClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordionDetailsClasses */ "./node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _accordionDetailsClasses__WEBPACK_IMPORTED_MODULE_6__.getAccordionDetailsUtilityClass, classes);
};

const AccordionDetailsRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiAccordionDetails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
}));
const AccordionDetails = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function AccordionDetails(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_8__["default"])({
    props: inProps,
    name: 'MuiAccordionDetails'
  });

  const {
    className
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AccordionDetailsRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
 true ? AccordionDetails.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionDetails);

/***/ }),

/***/ "./node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@mui/material/AccordionDetails/accordionDetailsClasses.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAccordionDetailsUtilityClass": () => (/* binding */ getAccordionDetailsUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getAccordionDetailsUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiAccordionDetails', slot);
}
const accordionDetailsClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiAccordionDetails', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordionDetailsClasses);

/***/ }),

/***/ "./client/src/components/Q&A/AnswerEntrie.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/Q&A/AnswerEntrie.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var AnswerEntrie = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AnswerEntrie, _React$Component);

  var _super = _createSuper(AnswerEntrie);

  function AnswerEntrie(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AnswerEntrie);

    _this = _super.call(this, props);
    _this.state = {
      reported: 'Report'
    };
    _this.helpfulRequest = _this.helpfulRequest.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.reportAnswer = _this.reportAnswer.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onClickReport = _this.onClickReport.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AnswerEntrie, [{
    key: "helpfulRequest",
    value: function helpfulRequest(e) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_9___default().put("/api/qa/answers/".concat(this.props.answers.answer_id, "/helpful")).then( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('Helpful');
                _context.next = 3;
                return _this2.props.getAnswers();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })))["catch"]( /*#__PURE__*/function () {
        var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2(err) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return console.log(err);

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "reportAnswer",
    value: function reportAnswer(e) {
      axios__WEBPACK_IMPORTED_MODULE_9___default().put("/api/qa/answers/".concat(this.props.answers.answer_id, "/report")).then( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return console.log('Reported');

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })))["catch"]( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return console.log('didnt report');

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));
    }
  }, {
    key: "onClickReport",
    value: function onClickReport(e) {
      this.setState({
        reported: 'Reported'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          my: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "div"
      }, "A: ", this.props.answers.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        sx: {
          my: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "answer-comments"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("p", {
        className: "answerBody"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", null, "by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", {
        className: "userName"
      }, " ", this.props.answers.answerer_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", null, ", ", this.props.date, " |"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", null, " Helpful? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", {
        className: "underLine",
        onClick: this.helpfulRequest
      }, "Yes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", null, " (", this.props.answers.helpfulness, ") | "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("span", {
        className: "underLine",
        onClick: function onClick(e) {
          _this3.onClickReport(), _this3.reportAnswer();
        }
      }, this.state.reported)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null)))));
    }
  }]);

  return AnswerEntrie;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnswerEntrie);

/***/ }),

/***/ "./client/src/components/Q&A/QnAEntrie.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/Q&A/QnAEntrie.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AnswerEntrie_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnswerEntrie.jsx */ "./client/src/components/Q&A/AnswerEntrie.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Send */ "./node_modules/@mui/icons-material/Send.js");
/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNew */ "./node_modules/@mui/icons-material/ArrowBackIosNew.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");















var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_6__["default"])({
  accordion: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    background: 'transparent',
    borderRadius: 5,
    color: 'black',
    margin: 5,
    fontSize: 18,
    whiteSpace: 'normal'
  },
  summary: {
    flexDirection: 'row',
    justifyContent: "flexStart",
    whiteSpace: 'normal'
  },
  detail: {
    flexDirection: 'row',
    whiteSpace: 'normal',
    background: 'rgb(236, 241, 241)',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  btn: {
    "float": 'right'
  },
  firstAnswerBtn: {
    margin: 'auto'
  }
});

var QnAEntrie = function QnAEntrie(props) {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      qId = _useState2[0],
      setqId = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      answerBody = _useState4[0],
      setAnswerBody = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      body = _useState6[0],
      setBody = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      email = _useState10[0],
      setEmail = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      photos = _useState12[0],
      setPhotos = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      addAnswerClick = _useState14[0],
      setAddAnswerClick = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(2),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      count = _useState16[0],
      setCount = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getAnswers();
  }, []);

  var getAnswers = function getAnswers() {
    axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/qa/questions/".concat(props.question.question_id, "/answers"), {}).then( /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(response) {
        var sortedAnswerArray, splicedAnswers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sortedAnswerArray = response.data.results.sort(function (a, b) {
                  var dateA = new Date(a.date),
                      dateB = new Date(b.date);
                  return dateB - dateA;
                });
                splicedAnswers = sortedAnswerArray.splice(0, count);
                _context.next = 4;
                return setAnswerBody(splicedAnswers);

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
  };

  var helpfulQuestion = function helpfulQuestion(e) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/qa/questions/".concat(props.question.question_id, "/helpful")).then(function (e) {
      props.getQuestions();
    });
  };

  var addAnswer = function addAnswer(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/qa/questions/".concat(props.question.question_id, "/answers"), {
      body: body,
      name: name,
      email: email,
      photos: photos
    }).then(function (response) {
      getAnswers();
    })["catch"](function (err) {
      console.error(err);
    });
  };

  var handleAnswer = function handleAnswer(e) {
    setAddAnswerClick(!addAnswerClick);
  };

  var answerFormSubmit = function answerFormSubmit(e) {
    e.preventDefault();

    if (e.target.placeholder === 'Name') {
      setName(e.target.value);
    } else if (event.target.placeholder === 'Body') {
      setBody(e.target.value);
    } else if (event.target.placeholder === 'Email') {
      setEmail(e.target.value);
    } else if (event.target.placeholder === 'Photos') {
      setPhotos(e.target.value);
    }
  };

  var reportQuestion = function reportQuestion(e) {
    axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/qa/questions/".concat(props.question.question_id, "/report")).then(function () {
      props.getQuestions();
    });
  };

  return !addAnswerClick ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultExpanded: true,
    className: classes.accordion
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.summary,
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h5"
  }, "Q: ", props.question.question_body)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.detail
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, " ", answerBody.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.detail
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: helpfulQuestion,
    className: "helpfulQuestion"
  }, "Helpful? Yes(", props.question.question_helpfulness, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.firstAnswerBtn,
    onClick: handleAnswer,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    size: "medium",
    variant: "contained",
    color: "primary"
  }, "Add First Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: "small",
    varient: "text",
    color: "error",
    onClick: reportQuestion,
    className: classes.btn
  }, "Report Question"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      boxShadow: 40,
      whiteSpace: 'normal'
    }
  }, answerBody.map(function (item) {
    var temp = new Date(item.date);
    var date = temp.toString().substring(0, 16);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_AnswerEntrie_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      answers: item,
      key: item.answer_id,
      date: date,
      questionId: props.question.question_id,
      getAnswers: getAnswers
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    display: "inline",
    container: true,
    direction: "row",
    alignItems: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: helpfulQuestion,
    className: "helpfulQuestion"
  }, "Helpful? Yes(", props.question.question_helpfulness, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleAnswer,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    size: "small",
    color: "primary"
  }, "Add Answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "reportQuestion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: "small",
    varient: "text",
    color: "error",
    onClick: reportQuestion
  }, "Report Question")))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      bgcolor: 'rgb(236, 241, 241)',
      // boxShadow: 6,
      borderRadius: 5,
      maxWidth: 700,
      margin: "0 auto",
      minWidth: 300
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h5",
    align: "center",
    sx: {
      my: 3
    }
  }, "Q: ", props.question.question_body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      bgcolor: 'background.paper',
      boxShadow: 10
    },
    style: {
      maxWidth: 600,
      margin: '0 auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleAnswer,
    size: "small",
    sx: {
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    onSubmit: function onSubmit(e) {
      addAnswer(e), handleAnswer(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    xs: 12,
    sm: 6,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onChange: answerFormSubmit,
    label: "Enter Name",
    placeholder: "Name",
    variant: "outlined",
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    xs: 12,
    sm: 6,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onChange: answerFormSubmit,
    type: "email",
    label: "Enter Email",
    placeholder: "Email",
    variant: "outlined",
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onChange: answerFormSubmit,
    label: "Enter Photo URL",
    placeholder: "Photos",
    variant: "outlined",
    fullWidth: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onChange: answerFormSubmit,
    label: "Enter Body",
    multiline: true,
    rows: 4,
    placeholder: "Body",
    variant: "outlined",
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, "Submit Answer")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QnAEntrie);

/***/ }),

/***/ "./client/src/components/Q&A/QnAList.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/Q&A/QnAList.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _QnAEntrie_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QnAEntrie.jsx */ "./client/src/components/Q&A/QnAEntrie.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");




var QnAList = function QnAList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      flexDirection: 'column',
      bgcolor: 'transparent',
      borderRadius: 2,
      whiteSpace: 'normal',
      minWidth: 450,
      maxWidth: 850,
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    sm: 12,
    item: true
  }, props.questions.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QnAEntrie_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      question: item,
      key: item.question_id,
      getQuestions: props.getQuestions
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick(e) {
      var temp = props.count + 2;
      props.addCount(temp);
    }
  }, "More Questions")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QnAList);

/***/ })

}]);
//# sourceMappingURL=client_src_components_Q_A_QnAList_jsx.bundle.js.map