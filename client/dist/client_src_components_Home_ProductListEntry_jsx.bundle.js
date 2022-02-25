"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_Home_ProductListEntry_jsx"],{

/***/ "./client/src/components/Home/ProductListEntry.jsx":
/*!*********************************************************!*\
  !*** ./client/src/components/Home/ProductListEntry.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductListEntry)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProductDetailOverview_ProductInfo_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductDetailOverview/ProductInfo.jsx */ "./client/src/components/ProductDetailOverview/ProductInfo.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");







var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function ProductListEntry(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      photo = _useState2[0],
      setPhoto = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function getPhoto() {
      return _getPhoto.apply(this, arguments);
    }

    function _getPhoto() {
      _getPhoto = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/products/".concat(props.product.id, "/styles"));

              case 3:
                res = _context.sent;
                setPhoto(res.data.results[0].photos[0]);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _getPhoto.apply(this, arguments);
    }

    ;
    getPhoto();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "Category",
    onClick: function onClick(event) {
      props.getId(props.product);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: props.product.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "img",
    height: "300",
    alt: "NO IMAGE",
    src: photo.url
  })));
}
;

/***/ }),

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
//# sourceMappingURL=client_src_components_Home_ProductListEntry_jsx.bundle.js.map