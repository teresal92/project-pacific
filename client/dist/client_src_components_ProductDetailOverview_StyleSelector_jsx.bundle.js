"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_ProductDetailOverview_StyleSelector_jsx"],{

/***/ "./node_modules/@mui/icons-material/CheckCircleOutline.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/CheckCircleOutline.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'CheckCircleOutline');

exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ProductDetailOverview/StyleSelector.jsx":
/*!***********************************************************************!*\
  !*** ./client/src/components/ProductDetailOverview/StyleSelector.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ImageList/ImageList.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ImageListItem/ImageListItem.js");
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/CheckCircleOutline */ "./node_modules/@mui/icons-material/CheckCircleOutline.js");

 // MUI




function StyleSelector(_ref) {
  var styles = _ref.styles,
      selectedStyle = _ref.selectedStyle,
      handleStyleSelector = _ref.handleStyleSelector;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isSelected = _useState2[0],
      setIsSelected = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (selectedStyle) {
      setIsSelected(true);
    }
  }, [selectedStyle]);

  var handleClick = function handleClick(event, style) {
    handleStyleSelector(style);
    setIsSelected(true);
  };

  var showSelected = function showSelected(style) {
    if (isSelected && style.style_id === selectedStyle.style_id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "select-style-overlay"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "style-selector",
    "data-testid": "styleSelector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "overline",
    display: "block"
  }, "STYLE > ", selectedStyle.name ? selectedStyle.name : 'SELECT STYLE'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      width: 400,
      height: 220
    },
    cols: 4,
    rowHeight: 100
  }, styles.map(function (style, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "style-".concat(i),
      onClick: function onClick(e) {
        return handleClick(e, style);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
      className: "select-style-thumbnail",
      name: style.style_id,
      src: "".concat(style.photos[0].thumbnail_url, "?w=100&h=100&fit=crop&auto=format"),
      srcSet: "".concat(style.photos[0].thumbnail_url, "?w=100&h=100&fit=crop&auto=format&dpr=2 2x"),
      alt: style.name,
      loading: "lazy"
    }), showSelected(style));
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleSelector);

/***/ })

}]);
//# sourceMappingURL=client_src_components_ProductDetailOverview_StyleSelector_jsx.bundle.js.map