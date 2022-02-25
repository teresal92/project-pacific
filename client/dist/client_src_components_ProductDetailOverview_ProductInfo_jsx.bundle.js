"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_ProductDetailOverview_ProductInfo_jsx"],{

/***/ "./client/src/components/ProductDetailOverview/ProductInfo.jsx":
/*!*********************************************************************!*\
  !*** ./client/src/components/ProductDetailOverview/ProductInfo.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");



function ProductInfo(_ref) {
  var product = _ref.product,
      style = _ref.style;

  // check if styles.results.sale_price is not null
  function flagOnSale() {
    return style.sale_price !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "org-price",
      style: {
        'textDecoration': 'line-through'
      }
    }, product.default_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "sale-price"
    }, style.sale_price)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "org-price"
    }, product.default_price);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "product-info",
    "data-testid": "productInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "overline",
    display: "block",
    gutterBottom: true
  }, product.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h4",
    component: "div"
  }, product.name), flagOnSale(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "body1",
    gutterBottom: true
  }, product.description));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);

/***/ })

}]);
//# sourceMappingURL=client_src_components_ProductDetailOverview_ProductInfo_jsx.bundle.js.map