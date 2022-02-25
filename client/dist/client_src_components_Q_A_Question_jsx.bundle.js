"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_Q_A_Question_jsx"],{

/***/ "./node_modules/@mui/icons-material/AddCircleOutline.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/icons-material/AddCircleOutline.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'AddCircleOutline');

exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/Q&A/Question.jsx":
/*!************************************************!*\
  !*** ./client/src/components/Q&A/Question.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config.js */ "./config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNew */ "./node_modules/@mui/icons-material/ArrowBackIosNew.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/AddCircleOutline */ "./node_modules/@mui/icons-material/AddCircleOutline.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grow/Grow.js");











var useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__["default"])({
  addAnswerHeader: {
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 22
  },
  accordion: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 850,
    backgroundColor: '#e3f2fd',
    boxShadow: 10
  }
});

var Question = function Question(props) {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      body = _useState2[0],
      setBody = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      questionBtnClicked = _useState8[0],
      setQuestionBtnClicked = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      checked = _useState10[0],
      setChecked = _useState10[1];

  var answerFormSubmit = function answerFormSubmit(e) {
    e.preventDefault();

    if (e.target.placeholder === 'Name') {
      setName(e.target.value);
    } else if (event.target.placeholder === 'Body') {
      setBody(e.target.value);
    } else if (event.target.placeholder === 'Email') {
      setEmail(e.target.value);
    }

    console.log(e.target.value);
  };

  var sendQuestion = function sendQuestion(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/qa/questions", {
      body: body,
      name: name,
      email: email,
      product_id: props.prodId
    }).then(function (response) {
      console.log('Success ', response);
      props.getQuestions();
    })["catch"](function (err) {
      console.error(err);
    });
  };

  var _onClick = function onClick(e) {
    setQuestionBtnClicked(!questionBtnClicked);
  };

  var handleChange = function handleChange() {
    setChecked(function (prev) {
      return !prev;
    });
  };

  return !questionBtnClicked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      margin: 'auto',
      maxWidth: 750,
      minWidth: 450
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.accordion,
    onClick: function onClick(e) {
      _onClick(e), handleChange(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    addicon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_AddCircleOutline__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.addAnswerHeader
  }, "Add Question")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "in": checked,
    style: {
      transformOrigin: '0 0 0'
    }
  }, checked ? {
    timeout: 1000
  } : {}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      bgcolor: 'background.paper',
      boxShadow: 10,
      width: '50%'
    },
    style: {
      maxWidth: 850,
      margin: 'auto auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick: function onClick(e) {
      handleChange(e), _onClick(e);
    },
    size: "small",
    sx: {
      mb: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.addAnswerHeader
  }, "Add Question"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    onSubmit: function onSubmit(e) {
      sendQuestion(e), _onClick(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 6,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onChange: answerFormSubmit,
    label: "Enter Name",
    placeholder: "Name",
    variant: "outlined",
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 6,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onChange: answerFormSubmit,
    type: "email",
    label: "Enter Email",
    placeholder: "Email",
    variant: "outlined",
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    onChange: answerFormSubmit,
    label: "Enter Question Body",
    multiline: true,
    rows: 4,
    placeholder: "Body",
    variant: "outlined",
    fullWidth: true,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, "Submit Answer"))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

/***/ })

}]);
//# sourceMappingURL=client_src_components_Q_A_Question_jsx.bundle.js.map