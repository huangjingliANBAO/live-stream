"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************!*\
  !*** E:/dev/live-stream/main.js?{"page":"pages%2Flive%2Flive"} ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/live/live.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/live/live'\n        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9saXZlL2xpdmUubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9saXZlL2xpdmUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************************!*\
  !*** E:/dev/live-stream/main.js?{"type":"appStyle"} ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************!*\
  !*** E:/dev/live-stream/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/dev/live-stream/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "bg-main": {
    "backgroundColor": "#009CFF"
  },
  "bg-main-hover": {
    "backgroundColor": "#51BBFF"
  },
  "bg-main-disabled": {
    "backgroundColor": "#51BBFF"
  },
  "text-main": {
    "color": "#009CFF"
  },
  "text-main-hover": {
    "color": "#51BBFF"
  },
  "border-main": {
    "borderColor": "#51BBFF"
  },
  "bg-icon": {
    "backgroundColor": "#EFEFEF"
  },
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-smaller": {
    "fontSize": "15rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "@FONT-FACE": [
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    },
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    }
  ],
  "icon-fanhui": {
    "content:before": "\"\\e6cd\""
  },
  "icon-chongmingming": {
    "content:before": "\"\\e705\""
  },
  "icon-fenxiang-1": {
    "content:before": "\"\\e60b\""
  },
  "icon-file-b-": {
    "content:before": "\"\\e652\""
  },
  "icon-file-b-1": {
    "content:before": "\"\\e653\""
  },
  "icon-file-b-2": {
    "content:before": "\"\\e654\""
  },
  "icon-file-b-3": {
    "content:before": "\"\\e655\""
  },
  "icon-file-b-4": {
    "content:before": "\"\\e656\""
  },
  "icon-file-b-5": {
    "content:before": "\"\\e658\""
  },
  "icon-file-b-6": {
    "content:before": "\"\\e659\""
  },
  "icon-file-b-7": {
    "content:before": "\"\\e65a\""
  },
  "icon-file-b-8": {
    "content:before": "\"\\e65b\""
  },
  "icon-file-b-9": {
    "content:before": "\"\\e65c\""
  },
  "icon-file-b-10": {
    "content:before": "\"\\e65d\""
  },
  "icon-file-b-11": {
    "content:before": "\"\\e65e\""
  },
  "icon-file-b-12": {
    "content:before": "\"\\e65f\""
  },
  "icon-file-b-13": {
    "content:before": "\"\\e660\""
  },
  "icon-file-b-14": {
    "content:before": "\"\\e661\""
  },
  "icon-file-b-15": {
    "content:before": "\"\\e662\""
  },
  "icon-file-b-16": {
    "content:before": "\"\\e663\""
  },
  "icon-file-b-17": {
    "content:before": "\"\\e664\""
  },
  "icon-file-b-18": {
    "content:before": "\"\\e665\""
  },
  "icon-file-b-19": {
    "content:before": "\"\\e666\""
  },
  "icon-file-s-": {
    "content:before": "\"\\e667\""
  },
  "icon-file-s-1": {
    "content:before": "\"\\e668\""
  },
  "icon-file-s-2": {
    "content:before": "\"\\e669\""
  },
  "icon-file-s-3": {
    "content:before": "\"\\e66a\""
  },
  "icon-file-s-4": {
    "content:before": "\"\\e66b\""
  },
  "icon-file-s-5": {
    "content:before": "\"\\e66c\""
  },
  "icon-file-s-6": {
    "content:before": "\"\\e66d\""
  },
  "icon-file-s-7": {
    "content:before": "\"\\e66e\""
  },
  "icon-file-s-8": {
    "content:before": "\"\\e66f\""
  },
  "icon-file-s-9": {
    "content:before": "\"\\e670\""
  },
  "icon-file-s-10": {
    "content:before": "\"\\e671\""
  },
  "icon-file-s-11": {
    "content:before": "\"\\e672\""
  },
  "icon-file-s-12": {
    "content:before": "\"\\e673\""
  },
  "icon-file-s-13": {
    "content:before": "\"\\e674\""
  },
  "icon-file-s-14": {
    "content:before": "\"\\e675\""
  },
  "icon-file-s-15": {
    "content:before": "\"\\e676\""
  },
  "icon-file-s-16": {
    "content:before": "\"\\e677\""
  },
  "icon-file-s-17": {
    "content:before": "\"\\e678\""
  },
  "icon-file-s-18": {
    "content:before": "\"\\e679\""
  },
  "icon-file-s-19": {
    "content:before": "\"\\e67a\""
  },
  "icon-file-s-20": {
    "content:before": "\"\\e67b\""
  },
  "icon-wode": {
    "content:before": "\"\\e657\""
  },
  "icon-chuanshuliebiao": {
    "content:before": "\"\\e612\""
  },
  "icon-shanchu": {
    "content:before": "\"\\e64a\""
  },
  "icon-kaishi": {
    "content:before": "\"\\e613\""
  },
  "icon-zanting": {
    "content:before": "\"\\e614\""
  },
  "icon-sousuo": {
    "content:before": "\"\\e606\""
  },
  "icon-xuanze-yixuan": {
    "content:before": "\"\\e67c\""
  },
  "icon-zengjia": {
    "content:before": "\"\\e684\""
  },
  "icon-gengduo": {
    "content:before": "\"\\e6fc\""
  },
  "icon-xiazai": {
    "content:before": "\"\\e723\""
  },
  "icon-yun": {
    "content:before": "\"\\e6cf\""
  },
  "icon-none": {
    "content:before": "\"\\e60e\""
  },
  "icon-video": {
    "content:before": "\"\\e78e\""
  },
  "icon-text": {
    "content:before": "\"\\e620\""
  },
  "icon-image": {
    "content:before": "\"\\e635\""
  },
  "icon-zipped": {
    "content:before": "\"\\e60d\""
  },
  "icon-dir": {
    "content:before": "\"\\e607\""
  },
  "icon-user": {
    "content:before": "\"\\e7b2\""
  },
  "icon-home": {
    "content:before": "\"\\e7c6\""
  },
  "icon-heart": {
    "content:before": "\"\\e7df\""
  },
  "icon-search": {
    "content:before": "\"\\e60b\""
  }
}

/***/ }),
/* 4 */
/*!***********************************************************!*\
  !*** E:/dev/live-stream/pages/live/live.nvue?mpType=page ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live.nvue?vue&type=template&id=3098d4a8&mpType=page */ 5);\n/* harmony import */ var _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"f39a4d40\",\n  false,\n  _live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/live/live.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDdU07QUFDdk0sZ0JBQWdCLCtNQUFVO0FBQzFCLEVBQUUsc0ZBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2xpdmUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDk4ZDRhOCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGl2ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpdmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyN1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZjM5YTRkNDBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbGl2ZS9saXZlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************************************************************************!*\
  !*** E:/dev/live-stream/pages/live/live.nvue?vue&type=template&id=3098d4a8&mpType=page ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=template&id=3098d4a8&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_3098d4a8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/dev/live-stream/pages/live/live.nvue?vue&type=template&id=3098d4a8&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["flex-1"] },
        [
          _c("u-video", {
            staticClass: ["flex-1"],
            attrs: {
              src: "http://ivi.bupt.edu.cn/hls/hunanhd.m3u8",
              autoplay: true,
              controls: false
            }
          }),
          _c(
            "view",
            {
              staticStyle: { position: "fixed", left: "0", right: "0" },
              style: "top:" + _vm.statusBarHeight + "px"
            },
            [
              _c(
                "view",
                {
                  staticClass: [
                    "px-2",
                    "flex",
                    "justify-between",
                    "align-center"
                  ],
                  staticStyle: { height: "80rpx" }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "rounded-circle"],
                      staticStyle: {
                        width: "325rpx",
                        backgroundColor: "rgba(0,0,0,0.4)"
                      }
                    },
                    [
                      _c(
                        "view",
                        { staticClass: ["p"] },
                        [
                          _c("u-image", {
                            staticClass: ["rounded-circle"],
                            staticStyle: { width: "70rpx", height: "70rpx" },
                            attrs: { src: "../../static/me.jpg" }
                          })
                        ],
                        1
                      ),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "flex-1",
                            "flex",
                            "flex-column",
                            "justify-center"
                          ]
                        },
                        [
                          _c(
                            "u-text",
                            { staticClass: ["text-white", "font"] },
                            [_vm._v("主播昵称")]
                          ),
                          _c(
                            "u-text",
                            { staticClass: ["text-white", "font-sm"] },
                            [_vm._v("100")]
                          )
                        ]
                      ),
                      _c("view", { staticClass: ["p"] }, [
                        _c(
                          "view",
                          {
                            staticClass: [
                              "rounded-circle",
                              "flex",
                              "align-center",
                              "justify-center",
                              "bg-danger"
                            ],
                            staticStyle: { width: "70rpx", height: "70rpx" }
                          },
                          [
                            _c("u-text", { staticClass: ["text-white"] }, [
                              _vm._v("+")
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "rounded-circle"],
                      staticStyle: {
                        width: "325rpx",
                        backgroundColor: "rgba(0,0,0,0.4)"
                      }
                    },
                    [
                      _c(
                        "scroll-view",
                        {
                          staticClass: ["flex-1", "flex"],
                          attrs: { scrollX: "true" }
                        },
                        _vm._l(20, function(i) {
                          return _c(
                            "view",
                            { key: i, staticClass: ["p"] },
                            [
                              _c("u-image", {
                                staticClass: ["rounded-circle"],
                                staticStyle: {
                                  width: "70rpx",
                                  height: "70rpx"
                                },
                                attrs: { src: "../../static/gift/1.png" }
                              })
                            ],
                            1
                          )
                        }),
                        0
                      ),
                      _c("view", { staticClass: ["p"] }, [
                        _c(
                          "view",
                          {
                            staticClass: [
                              "rounded-circle",
                              "flex",
                              "align-center",
                              "justify-center",
                              "bg-danger"
                            ],
                            staticStyle: { width: "70rpx", height: "70rpx" }
                          },
                          [
                            _c(
                              "u-text",
                              { staticClass: ["text-white", "font-sm"] },
                              [_vm._v("1000")]
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: ["px-2", "my-2"],
                  staticStyle: { height: "80rpx" }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "rounded-circle", "align-center"],
                      staticStyle: {
                        width: "325rpx",
                        backgroundColor: "rgba(0,0,0,0.4)"
                      }
                    },
                    [
                      _c("view", { staticClass: ["p"] }, [
                        _c("u-text", { staticClass: ["text-warning"] }, [
                          _vm._v("金币")
                        ])
                      ]),
                      _c(
                        "view",
                        {
                          staticClass: [
                            "flex-1",
                            "flex",
                            "flex-column",
                            "justify-center"
                          ]
                        },
                        [
                          _c(
                            "u-text",
                            { staticClass: ["text-white", "font"] },
                            [_vm._v("100")]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _c("f-gift", { ref: "gift" }),
              _c("view", {
                staticClass: [
                  "flex",
                  "align-center",
                  "justify-between",
                  "fixed-bottom",
                  "bg-danger"
                ],
                staticStyle: { height: "120rpx" }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!***********************************************************************************!*\
  !*** E:/dev/live-stream/pages/live/live.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9oQixDQUFnQiwwakJBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFx0b29sc1xcXFxIQnVpbGRlclguMi44LjEzLjIwMjAwOTI3XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUY6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjdcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFGOlxcXFx0b29sc1xcXFxIQnVpbGRlclguMi44LjEzLjIwMjAwOTI3XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpdmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjdcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRjpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyN1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUY6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjdcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGl2ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/dev/live-stream/pages/live/live.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fGift = _interopRequireDefault(__webpack_require__(/*! @/components/common/f-gift.vue */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { fGift: _fGift.default }, data: function data() {return { statusBarHeight: 0, content: '' };}, mounted: function mounted() {var _this = this; //送礼物演示\n    setInterval(function () {_this.$refs.gift.send({ username: \"发送人\", avatar: \"\", gift_name: \"蛋糕\", gift_image: \"/static/gift/3.png\", num: 1 });}, 3000);}, onLoad: function onLoad() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight;} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZS9saXZlLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLGtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsY0FDQSxxQkFEQSxFQURBLEVBSUEsSUFKQSxrQkFJQSxDQUNBLFNBQ0Esa0JBREEsRUFFQSxXQUZBLEdBSUEsQ0FUQSxFQVVBLE9BVkEscUJBVUEsbUJBQ0E7QUFDQSw2QkFDQSx3QkFDQSxlQURBLEVBRUEsVUFGQSxFQUdBLGVBSEEsRUFJQSxnQ0FKQSxFQUtBLE1BTEEsSUFPQSxDQVJBLEVBUUEsSUFSQSxFQVNBLENBckJBLEVBc0JBLE1BdEJBLG9CQXNCQSxDQUNBLGtDQUNBLDJDQUNBLENBekJBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIj5cclxuXHRcdDx2aWRlbyBjbGFzcz1cImZsZXgtMVwiIHNyYz1cImh0dHA6Ly9pdmkuYnVwdC5lZHUuY24vaGxzL2h1bmFuaGQubTN1OFwiIGF1dG9wbGF5IDpjb250cm9scz1cImZhbHNlXCI+PC92aWRlbz5cclxuXHRcdDwhLS0g5aS06YOoIC0tPlxyXG5cdFx0PHZpZXcgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7bGVmdDogMDtyaWdodDogMDtcIiA6c3R5bGU9XCIndG9wOicrc3RhdHVzQmFySGVpZ2h0KydweCdcIj5cclxuXHRcdFx0PCEtLSDkuKrkurrkv6Hmga986KeC55yL6K+m5oOF5L+h5oGvIC0tPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogODBycHg7XCIgY2xhc3M9XCJweC0yIGZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDMyNXJweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XCIgY2xhc3M9XCJmbGV4IHJvdW5kZWQtY2lyY2xlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9tZS5qcGdcIiBzdHlsZT1cIndpZHRoOiA3MHJweDtoZWlnaHQ6IDcwcnB4O1wiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGUgZm9udFwiPuS4u+aSreaYteensDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnQtc21cIj4xMDA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYW5nZXJcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3MHJweDtoZWlnaHQ6IDcwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIj4rPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDMyNXJweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XCIgY2xhc3M9XCJmbGV4IHJvdW5kZWQtY2lyY2xlXCI+XHJcblx0XHRcdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXg9XCJ0cnVlXCIgY2xhc3M9XCJmbGV4LTEgZmxleFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBcIiB2LWZvcj1cImkgaW4gMjBcIiA6a2V5PVwiaVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvZ2lmdC8xLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDcwcnB4O2hlaWdodDogNzBycHg7XCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA3MHJweDtoZWlnaHQ6IDcwcnB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBmb250LXNtXCI+MTAwMDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOmHkeW4gSAtLT5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDgwcnB4O1wiIGNsYXNzPVwicHgtMiBteS0yXCI+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDogMzI1cnB4O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjQpO1wiIGNsYXNzPVwiZmxleCByb3VuZGVkLWNpcmNsZSBhbGlnbi1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicFwiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2FybmluZ1wiPumHkeW4gTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnRcIj4xMDA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5pS25Yiw56S854mpIC0tPlxyXG5cdFx0XHRcclxuXHRcdFx0PGYtZ2lmdCByZWY9XCJnaWZ0XCI+PC9mLWdpZnQ+XHJcblx0XHRcdDwhLS0g5bqV6YOoIC0tPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogMTIwcnB4O1wiIGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZpeGVkLWJvdHRvbSBiZy1kYW5nZXJcIj5cclxuXHRcdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZkdpZnQgZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9mLWdpZnQudnVlJztcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czp7XHJcblx0XHRcdGZHaWZ0XHJcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsXHJcblx0XHRcdFx0Y29udGVudDonJ1xuXHRcdFx0fTtcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpe1xyXG5cdFx0XHQvL+mAgeekvOeJqea8lOekulxyXG5cdFx0XHRzZXRJbnRlcnZhbCgoKSA9PntcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmdpZnQuc2VuZCh7XHJcblx0XHRcdFx0XHR1c2VybmFtZTpcIuWPkemAgeS6ulwiLFxyXG5cdFx0XHRcdFx0YXZhdGFyOlwiXCIsXHJcblx0XHRcdFx0XHRnaWZ0X25hbWU6XCLom4vns5VcIixcclxuXHRcdFx0XHRcdGdpZnRfaW1hZ2U6XCIvc3RhdGljL2dpZnQvMy5wbmdcIixcclxuXHRcdFx0XHRcdG51bToxXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSwzMDAwKVxyXG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcblx0XHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcmVzLnN0YXR1c0JhckhlaWdodFxuXHRcdH1cblx0XHRcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG48L3N0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************!*\
  !*** E:/dev/live-stream/components/common/f-gift.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-gift.vue?vue&type=template&id=3b0abc30& */ 10);\n/* harmony import */ var _f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-gift.vue?vue&type=script&lang=js& */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"dce14f30\",\n  false,\n  _f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/common/f-gift.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDdU07QUFDdk0sZ0JBQWdCLCtNQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2YtZ2lmdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2IwYWJjMzAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mLWdpZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLWdpZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyN1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZGNlMTRmMzBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jb21tb24vZi1naWZ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**************************************************************************************!*\
  !*** E:/dev/live-stream/components/common/f-gift.vue?vue&type=template&id=3b0abc30& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-gift.vue?vue&type=template&id=3b0abc30& */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_template_id_3b0abc30___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/dev/live-stream/components/common/f-gift.vue?vue&type=template&id=3b0abc30& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "list",
    {
      staticStyle: { width: "520rpx", height: "500rpx" },
      attrs: { showScrollbar: false, bounce: false }
    },
    _vm._l(_vm.gifts, function(item, index) {
      return _c(
        "cell",
        {
          key: index,
          ref: "item" + index,
          refInFor: true,
          staticClass: ["flex", "align-center", "px-3", "pt-3"],
          appendAsTree: true,
          attrs: {
            insertAnimation: "default",
            deleteAnimation: "default",
            append: "tree"
          }
        },
        [
          _c(
            "view",
            {
              staticClass: ["flex", "rounded-circle"],
              staticStyle: {
                width: "325rpx",
                backgroundImage: "linear-gradient(to right,#BCABB1,#65AAF0)"
              }
            },
            [
              _c(
                "view",
                { staticClass: ["p"] },
                [
                  _c("u-image", {
                    staticClass: ["rounded-circle"],
                    staticStyle: { width: "70rpx", height: "70rpx" },
                    attrs: { src: item.avatar || _vm.defaultAavtar }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: [
                    "flex-1",
                    "flex",
                    "flex-column",
                    "justify-center"
                  ]
                },
                [
                  _c("u-text", { staticClass: ["text-white", "font"] }, [
                    _vm._v(_vm._s(item.username))
                  ]),
                  _c("u-text", { staticClass: ["text-white", "font-sm"] }, [
                    _vm._v("送" + _vm._s(item.gift_name))
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: ["p"] },
                [
                  _c("u-image", {
                    staticClass: ["rounded-circle"],
                    staticStyle: { width: "70rpx", height: "70rpx" },
                    attrs: { src: item.gift_image }
                  })
                ],
                1
              )
            ]
          ),
          _c("u-text", { staticClass: ["text-warning", "font-lg", "ml-1"] }, [
            _vm._v("X" + _vm._s(item.num))
          ])
        ]
      )
    }),
    0
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!********************************************************************************!*\
  !*** E:/dev/live-stream/components/common/f-gift.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-gift.vue?vue&type=script&lang=js& */ 13);\n/* harmony import */ var _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_F_tools_HBuilderX_2_8_13_20200927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBnQixDQUFnQixnakJBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyN1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFGOlxcXFx0b29sc1xcXFxIQnVpbGRlclguMi44LjEzLjIwMjAwOTI3XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRjpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyN1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLWdpZnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjdcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRjpcXFxcdG9vbHNcXFxcSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyN1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUY6XFxcXHRvb2xzXFxcXEhCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjdcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZi1naWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/dev/live-stream/components/common/f-gift.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar dom = weex.requireModule('dom');var _default =\n{\n  data: function data() {\n    return {\n      defaultAavtar: '/static/me.jpg',\n      gifts: [] };\n\n  },\n  methods: {\n    send: function send(gift) {\n      //将新发送的礼物加入数组尾部\n      this.gifts.push(gift);\n      //置于底部\n      this.toBottom();\n      //自动消失\n      this.autoHide();\n    },\n    toBottom: function toBottom() {var _this = this;\n      this.$nextTick(function () {\n        var index = _this.gifts.length - 1;\n        var ref = 'item' + index;\n        if (_this.$refs[ref]) {\n          dom.scrollToElement(_this.$refs[ref][0], {});\n        }\n      });\n    },\n    autoHide: function autoHide() {var _this2 = this;\n      //定时器，5秒从数组移除掉，思考，移除了那个？\n      if (this.gifts.length) {\n        var timer = setTimeout(function () {\n          _this2.gifts.splice(0, 1);\n        }, 5000);\n      }\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jb21tb24vZi1naWZ0LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxvQztBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxlQUZBOztBQUlBLEdBTkE7QUFPQTtBQUNBLFFBREEsZ0JBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLFlBVEEsc0JBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0EsS0FqQkE7QUFrQkEsWUFsQkEsc0JBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0EsS0F6QkEsRUFQQSxFIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxsaXN0IHN0eWxlPVwid2lkdGg6IDUyMHJweDtoZWlnaHQ6IDUwMHJweDtcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIDpib3VuY2U9XCJmYWxzZVwiPlxyXG5cdFx0PGNlbGwgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBweC0zIHB0LTNcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnaWZ0c1wiIDprZXk9XCJpbmRleFwiIGluc2VydC1hbmltYXRpb249XCJkZWZhdWx0XCJcclxuXHRcdGRlbGV0ZS1hbmltYXRpb249XCJkZWZhdWx0XCIgOnJlZj1cIidpdGVtJyArIGluZGV4XCI+XHJcblx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiAzMjVycHg7IGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNCQ0FCQjEsIzY1QUFGMCk7XCIgY2xhc3M9XCJmbGV4IHJvdW5kZWQtY2lyY2xlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicFwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXIgfHwgZGVmYXVsdEFhdnRhclwiIHN0eWxlPVwid2lkdGg6IDcwcnB4O2hlaWdodDogNzBycHg7XCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZSBmb250XCI+e3tpdGVtLnVzZXJuYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlIGZvbnQtc21cIj7pgIF7e2l0ZW0uZ2lmdF9uYW1lfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwXCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmdpZnRfaW1hZ2VcIiBzdHlsZT1cIndpZHRoOiA3MHJweDtoZWlnaHQ6IDcwcnB4O1wiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13YXJuaW5nIGZvbnQtbGcgbWwtMVwiPlh7e2l0ZW0ubnVtfX08L3RleHQ+XHJcblx0XHQ8L2NlbGw+XHJcblx0PC9saXN0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRjb25zdCBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpXHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHRkZWZhdWx0QWF2dGFyOicvc3RhdGljL21lLmpwZycsXHJcblx0XHRcdFx0Z2lmdHM6W11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRzZW5kKGdpZnQpe1xyXG5cdFx0XHRcdC8v5bCG5paw5Y+R6YCB55qE56S854mp5Yqg5YWl5pWw57uE5bC+6YOoXHJcblx0XHRcdFx0dGhpcy5naWZ0cy5wdXNoKGdpZnQpXHJcblx0XHRcdFx0Ly/nva7kuo7lupXpg6hcclxuXHRcdFx0XHR0aGlzLnRvQm90dG9tKClcclxuXHRcdFx0XHQvL+iHquWKqOa2iOWksVxyXG5cdFx0XHRcdHRoaXMuYXV0b0hpZGUoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b0JvdHRvbSgpe1xyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5naWZ0cy5sZW5ndGggLSAxXHJcblx0XHRcdFx0XHRsZXQgcmVmID0gJ2l0ZW0nICsgaW5kZXhcclxuXHRcdFx0XHRcdGlmKHRoaXMuJHJlZnNbcmVmXSl7XHJcblx0XHRcdFx0XHRcdGRvbS5zY3JvbGxUb0VsZW1lbnQodGhpcy4kcmVmc1tyZWZdWzBdLHt9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG9IaWRlKCl7XHJcblx0XHRcdFx0Ly/lrprml7blmajvvIw156eS5LuO5pWw57uE56e76Zmk5o6J77yM5oCd6ICD77yM56e76Zmk5LqG6YKj5Liq77yfXHJcblx0XHRcdFx0aWYodGhpcy5naWZ0cy5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0bGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ2lmdHMuc3BsaWNlKDAsMSlcclxuXHRcdFx0XHRcdH0sNTAwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);