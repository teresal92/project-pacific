"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_ProductDetailOverview_AddToCart_jsx"],{

/***/ "./node_modules/@mui/icons-material/ShoppingCartRounded.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/ShoppingCartRounded.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
}), 'ShoppingCartRounded');

exports["default"] = _default;

/***/ }),

/***/ "./client/src/components/ProductDetailOverview/AddToCart.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/ProductDetailOverview/AddToCart.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToCart)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ShoppingCartRounded */ "./node_modules/@mui/icons-material/ShoppingCartRounded.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");

 // MUI components









var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function AddToCart(_ref) {
  var style = _ref.style;
  var skus = style.skus;
  var skuList = Object.keys(skus).map(function (skuId) {
    return {
      id: skuId,
      quantity: skus[skuId].quantity,
      size: skus[skuId].size
    };
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      sku = _React$useState2[0],
      setSku = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      size = _React$useState4[0],
      setSize = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      qty = _React$useState6[0],
      setQty = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      OOS = _React$useState10[0],
      setOOS = _React$useState10[1];
  /* Event Handlers */


  var handleSizeChange = function handleSizeChange(e) {
    setSize(e.target.value);
  };

  var handleSizeClick = function handleSizeClick(e, sku) {
    setSku(sku);
  };

  var handleQtyChange = function handleQtyChange(e) {
    setQty(e.target.value);
  };
  /* On Click of Aadd to cart button */


  var handleButtonClick = function handleButtonClick(e) {
    e.preventDefault();

    if (sku && qty) {
      setOpen(false);
      axios.post("/api/cart/".concat(sku.id)).then(function (res) {
        return console.log("Success! ".concat(res));
      })["catch"](function (err) {
        return console.error(err);
      });
    } else {
      setOpen(true);
    }
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };
  /* Size Dropdown */


  var renderSizeDropdown = function renderSizeDropdown() {
    var availableSkus = skuList.filter(function (sku) {
      return sku.quantity > 0;
    });

    if (availableSkus.length === 0) {
      setOOS(true);
    }

    if (!OOS) {
      return !OOS ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          m: 1,
          minWidth: 140
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "demo-simple-select-label"
      }, "Select Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        labelId: "demo-controlled-open-select-label",
        id: "demo-controlled-open-select",
        open: open,
        onClose: handleClose,
        onOpen: handleOpen,
        value: size,
        onChange: handleSizeChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: "",
        disabled: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("em", null, "Select Size")), availableSkus.map(function (sku, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          value: sku.size,
          onClick: function onClick(e) {
            return handleSizeClick(e, sku);
          }
        }, sku.size);
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          m: 1,
          minWidth: 140
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "demo-simple-select-label"
      }, "Select Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        labelId: "demo-controlled-open-select-label",
        id: "demo-controlled-open-select",
        value: size,
        onChange: handleSizeChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: true,
        value: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("em", null, "OOS"))));
    }
  };
  /* Size Dropdown */


  var renderQtyDropdown = function renderQtyDropdown() {
    if (sku !== '') {
      var max = sku.quantity < 15 ? sku.quantity : 15;
      var range = [];

      for (var i = 1; i <= max; i++) {
        range.push(i);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          m: 1,
          width: 200
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "demo-simple-select-label"
      }, "Select Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        labelId: "demo-controlled-open-select-label",
        id: "demo-controlled-open-select",
        value: qty,
        onChange: handleQtyChange
      }, range.map(function (num, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          value: num
        }, num);
      })));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sx: {
          m: 1,
          width: 120
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "demo-simple-select-label"
      }, "Select Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__["default"], {
        labelId: "demo-controlled-open-select-label",
        id: "demo-controlled-open-select",
        value: qty,
        onChange: handleQtyChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        disabled: true,
        value: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("em", null, "-"))));
    }
  };
  /* Add to Cart Button */


  var renderCartButton = function renderCartButton() {
    return !OOS ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      "data-testid": "addToCartButton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      size: "large",
      color: "inherit",
      onClick: handleButtonClick,
      startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_ShoppingCartRounded__WEBPACK_IMPORTED_MODULE_7__["default"], null),
      sx: {
        mx: 1,
        my: 2
      }
    }, "Add to Cart")) : null;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "add-to-cart-form",
    "data-testid": "addToCart"
  }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Please select a size") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null), renderSizeDropdown(), renderQtyDropdown(), renderCartButton());
}
;

/***/ })

}]);
//# sourceMappingURL=client_src_components_ProductDetailOverview_AddToCart_jsx.bundle.js.map