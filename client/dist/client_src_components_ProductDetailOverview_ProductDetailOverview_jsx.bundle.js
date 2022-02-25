"use strict";
(self["webpackChunkproject_pacific"] = self["webpackChunkproject_pacific"] || []).push([["client_src_components_ProductDetailOverview_ProductDetailOverview_jsx"],{

/***/ "./client/src/components/OutfitnRelated/YourOutfit.jsx":
/*!*************************************************************!*\
  !*** ./client/src/components/OutfitnRelated/YourOutfit.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OutfitList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardHeader/CardHeader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardActions/CardActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-elastic-carousel */ "./node_modules/react-elastic-carousel/dist/index.es.js");




function OutfitList(props) {
  var breakPoints = [{
    width: 150,
    itemsToShow: 4
  }];
  return props.selected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "outfitBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "YOUR OUTFIT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "dragon",
    breakPoints: breakPoints
  }, props.outfit.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "outfitItem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titleTypographyProps: {
        variant: 'h7'
      },
      title: item.name,
      height: "50"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "outfitImage",
      component: "img",
      height: "200",
      alt: item.photos[0].url,
      src: item.photos[0].thumbnail_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      onClick: function onClick() {
        props.remove(item);
      }
    }, "X"))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "outfitAdd",
    onClick: function onClick(e) {
      props.add(props.item);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    titleTypographyProps: {
      variant: 'h6'
    },
    title: 'ADD TO OUTFIT'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "plusIcon"
  }, "+"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "outfitBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "YOUR OUTFIT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_elastic_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "dragon",
    breakPoints: breakPoints
  }, props.outfit.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "outfitItem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titleTypographyProps: {
        variant: 'h7'
      },
      title: item.name,
      height: "50"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "outfitImage",
      component: "img",
      height: "200",
      alt: item.photos[0].url,
      src: item.photos[0].thumbnail_url
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "small",
      onClick: console.log(item.id)
    }, "X"))));
  })));
}
;

/***/ }),

/***/ "./client/src/components/ProductDetailOverview/ProductDetailOverview.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/ProductDetailOverview/ProductDetailOverview.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Facebook */ "./node_modules/@mui/icons-material/Facebook.js");
/* harmony import */ var _mui_icons_material_Pinterest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Pinterest */ "./node_modules/@mui/icons-material/Pinterest.js");
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Twitter */ "./node_modules/@mui/icons-material/Twitter.js");
/* harmony import */ var _Ratings_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ratings.jsx */ "./client/src/components/ProductDetailOverview/Ratings.jsx");
/* harmony import */ var _OutfitnRelated_YourOutfit_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OutfitnRelated/YourOutfit.jsx */ "./client/src/components/OutfitnRelated/YourOutfit.jsx");
/* harmony import */ var _OutfitnRelated_RelatedItems_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OutfitnRelated/RelatedItems.jsx */ "./client/src/components/OutfitnRelated/RelatedItems.jsx");


/* eslint-disable import/extensions */
 // MUI




 // Icons




 // Components
//import ProductInfo from './ProductInfo.jsx';
//import ImageGallery from './ImageGallery.jsx';
//import StyleSelector from './StyleSelector.jsx';
//import AddToCart from './AddToCart.jsx';




var ProductInfo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "client_src_components_ProductDetailOverview_ProductInfo_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ProductInfo.jsx */ "./client/src/components/ProductDetailOverview/ProductInfo.jsx"));
});
var ImageGallery = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_ImageList_ImageList_js-node_modules_mui_material_ImageListI-9e6b5f"), __webpack_require__.e("client_src_components_ProductDetailOverview_ImageGallery_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ImageGallery.jsx */ "./client/src/components/ProductDetailOverview/ImageGallery.jsx"));
});
var StyleSelector = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_ImageList_ImageList_js-node_modules_mui_material_ImageListI-9e6b5f"), __webpack_require__.e("client_src_components_ProductDetailOverview_StyleSelector_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./StyleSelector.jsx */ "./client/src/components/ProductDetailOverview/StyleSelector.jsx"));
});
var AddToCart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mui_material_FormControl_FormControl_js-node_modules_mui_material_InputL-0768e8"), __webpack_require__.e("client_src_components_ProductDetailOverview_AddToCart_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AddToCart.jsx */ "./client/src/components/ProductDetailOverview/AddToCart.jsx"));
});

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

function ProductDetailOverview(_ref) {
  var productId = _ref.productId,
      outfit = _ref.outfit,
      selected = _ref.selected,
      add = _ref.add,
      remove = _ref.remove;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      productInfo = _useState2[0],
      setProductInfo = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      styles = _useState4[0],
      setStyles = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      ratings = _useState6[0],
      setRatings = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      selectedStyle = _useState8[0],
      setSelectedStyle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      isLoading = _useState10[0],
      setIsLoading = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      isExpanded = _useState12[0],
      setIsExpanded = _useState12[1]; // TODO: handle cases when url or skus are null


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var getProductInfo = axios.get("/api/products/".concat(productId));
    var getStyles = axios.get("/api/products/".concat(productId, "/styles"));
    var getReviews = axios.get("/api/reviews/meta/".concat(productId));
    Promise.all([getProductInfo, getStyles, getReviews]).then(function (res) {
      setProductInfo(res[0].data);
      setStyles(res[1].data.results);
      setSelectedStyle(res[1].data.results[0]);
      setRatings(res[2].data.ratings);
      setIsLoading(false);
    })["catch"](function (err) {
      return console.error(err);
    });
  }, [productId]); // when style is clicked within styleSelector, pass particular style id into handleStyleSelector
  // to set selectedStyle

  var handleStyleSelector = function handleStyleSelector(style) {
    if (style) {
      setSelectedStyle(style);
    }
  };

  var handleExpandedView = function handleExpandedView(val) {
    setIsExpanded(val);
  };

  return !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      minHeight: 600
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 3
  }, !isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "imageContainer",
    item: true,
    xs: 12,
    sm: 6,
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ImageGallery, {
    style: selectedStyle,
    isExpanded: isExpanded,
    handleExpandedView: handleExpandedView
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: "row",
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Ratings_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ratings: ratings
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "#"
  }, "Read all Reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "social"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: "sm-icon",
    href: "https://www.pinterest.com/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Pinterest__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: "sm-icon",
    href: "https://www.facebook.com/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    className: "sm-icon",
    href: "https://twitter.com/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_11__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductInfo, {
    product: productInfo,
    style: selectedStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyleSelector, {
    styles: styles,
    selectedStyle: selectedStyle,
    handleStyleSelector: handleStyleSelector
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AddToCart, {
    style: selectedStyle
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "imageContainer",
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ImageGallery, {
    style: selectedStyle,
    isExpanded: isExpanded,
    handleExpandedView: handleExpandedView
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "related"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OutfitnRelated_RelatedItems_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    productId: productId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_OutfitnRelated_YourOutfit_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    outfit: outfit,
    selected: selected,
    item: selectedStyle,
    add: add,
    remove: remove
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, "Loading... ");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailOverview);

/***/ }),

/***/ "./client/src/components/ProductDetailOverview/Ratings.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/ProductDetailOverview/Ratings.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ratings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Rating */ "./node_modules/@mui/material/Rating/Rating.js");



function Ratings(_ref) {
  var ratings = _ref.ratings;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      avgRating = _useState2[0],
      setAvgRating = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (ratings === undefined || !Object.keys(ratings).length) {
      setAvgRating(0);
    }

    function getSumRatings() {
      var sum = 0;

      for (var rating in ratings) {
        rating = Number.parseFloat(rating);

        if (rating >= 1 || rating <= 5) {
          sum += rating * Number.parseFloat(ratings[rating]);
        }
      }

      return sum;
    }

    ;
    var sumRatings = Number.parseFloat(getSumRatings());

    function getTotalRatings() {
      var total = 0;

      for (var rating in ratings) {
        rating = Number.parseFloat(rating);

        if (rating >= 1 || rating <= 5) {
          total += Number.parseFloat(ratings[rating]);
        }
      }

      return total;
    }

    ;
    var totalRatings = Number.parseFloat(getTotalRatings());
    setAvgRating(sumRatings / totalRatings.toFixed(2));
  }, [ratings]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    "data-testid": "ratings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "read-only",
    value: avgRating,
    precision: 0.25,
    readOnly: true
  }));
}

/***/ })

}]);
//# sourceMappingURL=client_src_components_ProductDetailOverview_ProductDetailOverview_jsx.bundle.js.map