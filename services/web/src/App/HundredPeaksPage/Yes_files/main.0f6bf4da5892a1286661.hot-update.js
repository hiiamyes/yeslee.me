webpackHotUpdate("main",{

/***/ "./src/App/TrailPage/index.js":
/*!************************************!*\
  !*** ./src/App/TrailPage/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/App/TrailPage/style.js");
/* harmony import */ var _components_Elevation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Elevation */ "./src/App/TrailPage/components/Elevation/index.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Map */ "./src/App/TrailPage/components/Map/index.js");
/* harmony import */ var _components_Trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Trail */ "./src/App/TrailPage/components/Trail.js");
/* harmony import */ var _datas_chilai_main_north_peaks_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datas/chilai-main-north-peaks.json */ "./src/App/TrailPage/datas/chilai-main-north-peaks.json");
var _datas_chilai_main_north_peaks_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./datas/chilai-main-north-peaks.json */ "./src/App/TrailPage/datas/chilai-main-north-peaks.json", 1);
var _jsxFileName = "/Users/Yes/code/yeslee.me/services/web/src/App/TrailPage/index.js";







var tileLayerUrl = "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=".concat("pk.eyJ1IjoiaGlpYW15ZXMiLCJhIjoiY2lnZjBla2M1NjVuY3Zna3JvcTBqZDl1YyJ9.t7CASOZkWcnnPc6aPI7M0w");
var dataMap = {
  "chilai-main-north-peaks": _datas_chilai_main_north_peaks_json__WEBPACK_IMPORTED_MODULE_6__
};

var TrailPage = function TrailPage(props) {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      name = _useParams.name;

  var _dataMap$name = dataMap[name],
      paths = _dataMap$name.paths,
      nodes = _dataMap$name.nodes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Trail Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/trails/chilai-main-north-peaks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\u5947\u840A\u4E3B\u5317")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Elevation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: paths,
    nodes: nodes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: 640,
      height: 480
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "test",
    tileLayerUrl: tileLayerUrl,
    center: [24.1125952, 121.3252793],
    zoom: 13,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Trail__WEBPACK_IMPORTED_MODULE_5__["default"], {
    paths: paths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TrailPage);

/***/ })

})
//# sourceMappingURL=main.0f6bf4da5892a1286661.hot-update.js.map