"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_OutfitnRelated_RelatedItemEntry_jsx"],{

/***/ "./client/src/components/OutfitnRelated/RelatedItemEntry.jsx":
/*!*******************************************************************!*\
  !*** ./client/src/components/OutfitnRelated/RelatedItemEntry.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RelatedItemEntry)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ProductDetailOverview_ProductInfo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductDetailOverview/ProductInfo.jsx */ "./client/src/components/ProductDetailOverview/ProductInfo.jsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
function RelatedItemEntry(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      productInfo = _useState2[0],
      setProductInfo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      styles = _useState4[0],
      setStyles = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      compareInfo = _useState6[0],
      setCompareInfo = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      selected = _useState8[0],
      setSelected = _useState8[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(0),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(10),
      _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var getProductInfo = axios.get("/api/products/".concat(props.item));
    var getStyles = axios.get("/api/products/".concat(props.item, "/styles"));
    var getCompareInfo = axios.get("/api/products/".concat(props.comparison));
    Promise.all([getProductInfo, getStyles, getCompareInfo])["catch"](function (err) {
      return console.error(err);
    }).then(function (res) {
      setProductInfo(res[0].data);
      setStyles(res[1].data.results[0].photos[0]);
      setCompareInfo(res[2].data);
    });
  }, []);
  var columns = [{
    id: 'name',
    label: compareInfo.name,
    minWidth: 170
  }, {
    id: 'compare',
    label: '',
    minWidth: 100
  }, {
    id: 'related',
    label: productInfo.name,
    minWidth: 170
  }];

  function createData(name, compare, related) {
    return {
      name: name,
      compare: compare,
      related: related
    };
  }

  var rows = [createData(compareInfo.campus, 'campus', productInfo.campus), createData(compareInfo.category, 'category', productInfo.category), createData(compareInfo.created_at, 'created_at', productInfo.created_at), createData(compareInfo.default_price, 'default_price', productInfo.default_price), createData(compareInfo.description, 'description', productInfo.description), createData(compareInfo.slogan, 'slogan', productInfo.slogan), createData(compareInfo.updated_at, 'updated_at', productInfo.updated_at)];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _React$useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      open = _React$useState6[0],
      setOpen = _React$useState6[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "relativeItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titleTypographyProps: {
      variant: 'h7'
    },
    title: productInfo.name,
    height: "50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "relativeImage",
    component: "img",
    height: "200",
    alt: "NO IMAGE",
    src: styles.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    onClick: handleOpen
  }, "COMPARE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "parent-modal-title",
    "aria-describedby": "parent-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 600
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", {
    id: "parent-modal-title"
  }, "COMPARISON"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    id: "parent-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      maxHeight: 440
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, columns.map(function (column) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      }
    }, column.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.compare
    }, columns.map(function (column) {
      var value = row[column.id];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: column.id,
        align: column.align
      }, column.format && typeof value === 'number' ? column.format(value) : value);
    }));
  }))))))))));
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
//# sourceMappingURL=client_src_components_OutfitnRelated_RelatedItemEntry_jsx.bundle.js.map