"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]/[id]",{

/***/ "./src/pages/post/[slug]/[id]/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/post/[slug]/[id]/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_common_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/common/seo */ \"./src/common/seo.jsx\");\n/* harmony import */ var _src_components_blog_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/components/blog-details */ \"./src/components/blog-details/index.jsx\");\n/* harmony import */ var _src_layout_wrapper_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/layout/wrapper-2 */ \"./src/layout/wrapper-2.jsx\");\n/* harmony import */ var _utils_api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/api/api */ \"./utils/api/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst index = (param)=>{\n    let { posts, categories, postDetails, relatedPosts } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const url = router.asPath;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_wrapper_2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        categories: categories.categorys,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_common_seo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: postDetails === null || postDetails === void 0 ? void 0 : postDetails.title,\n                description: postDetails === null || postDetails === void 0 ? void 0 : postDetails.description,\n                image: postDetails === null || postDetails === void 0 ? void 0 : postDetails.image,\n                url: url\n            }, void 0, false, {\n                fileName: \"F:\\\\2025\\\\project 2025\\\\figmapea\\\\figma\\\\src\\\\pages\\\\post\\\\[slug]\\\\[id]\\\\index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_blog_details__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                posts: posts.posts,\n                categories: categories.categorys,\n                post: postDetails.posts,\n                comments: postDetails.comments,\n                relatedPosts: relatedPosts.posts\n            }, void 0, false, {\n                fileName: \"F:\\\\2025\\\\project 2025\\\\figmapea\\\\figma\\\\src\\\\pages\\\\post\\\\[slug]\\\\[id]\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\2025\\\\project 2025\\\\figmapea\\\\figma\\\\src\\\\pages\\\\post\\\\[slug]\\\\[id]\\\\index.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9bc2x1Z10vW2lkXS9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNxQjtBQUNWO0FBT3JCO0FBQ2U7QUFDZDtBQUUxQixNQUFNTSxRQUFRO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFOztJQUM3RCxNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTVEsTUFBTUQsT0FBT0UsTUFBTTtJQUN6QixxQkFDRSw4REFBQ1gsNkRBQVFBO1FBQUNNLFlBQVlBLFdBQVdNLFNBQVM7OzBCQUN4Qyw4REFBQ2QsdURBQUdBO2dCQUNGZSxLQUFLLEVBQUVOLHdCQUFBQSxrQ0FBQUEsWUFBYU0sS0FBSztnQkFDekJDLFdBQVcsRUFBRVAsd0JBQUFBLGtDQUFBQSxZQUFhTyxXQUFXO2dCQUNyQ0MsS0FBSyxFQUFFUix3QkFBQUEsa0NBQUFBLFlBQWFRLEtBQUs7Z0JBQ3pCTCxLQUFLQTs7Ozs7OzBCQUVQLDhEQUFDWCxvRUFBV0E7Z0JBQ1ZNLE9BQU9BLE1BQU1BLEtBQUs7Z0JBQ2xCQyxZQUFZQSxXQUFXTSxTQUFTO2dCQUNoQ0ksTUFBTVQsWUFBWUYsS0FBSztnQkFDdkJZLFVBQVVWLFlBQVlVLFFBQVE7Z0JBQzlCVCxjQUFjQSxhQUFhSCxLQUFLOzs7Ozs7Ozs7Ozs7QUFJeEM7R0FwQk1EOztRQUNXRixrREFBU0E7Ozs7QUFxQjFCLCtEQUFlRSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0L1tzbHVnXS9baWRdL2luZGV4LmpzeD81MDIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTRU8gZnJvbSBcIkAvc3JjL2NvbW1vbi9zZW9cIjtcclxuaW1wb3J0IEJsb2dEZXRhaWxzIGZyb20gXCJAL3NyYy9jb21wb25lbnRzL2Jsb2ctZGV0YWlsc1wiO1xyXG5pbXBvcnQgV3JhcHBlcjIgZnJvbSBcIkAvc3JjL2xheW91dC93cmFwcGVyLTJcIjtcclxuaW1wb3J0IHtcclxuICBhbGxjYXRlZ29yeVVybCxcclxuICBhbGxwb3N0c1VybCxcclxuICBmaWx0ZXJwb3N0c1VybCxcclxuICBzaW5nbGVQb3N0VXJsLFxyXG4gIHRhZ3Bvc3RzVXJsLFxyXG59IGZyb20gXCJAL3V0aWxzL2FwaS9hcGlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgcG9zdHMsIGNhdGVnb3JpZXMsIHBvc3REZXRhaWxzLCByZWxhdGVkUG9zdHMgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVybCA9IHJvdXRlci5hc1BhdGg7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyMiBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzLmNhdGVnb3J5c30+XHJcbiAgICAgIDxTRU9cclxuICAgICAgICB0aXRsZT17cG9zdERldGFpbHM/LnRpdGxlfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0RGV0YWlscz8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgaW1hZ2U9e3Bvc3REZXRhaWxzPy5pbWFnZX1cclxuICAgICAgICB1cmw9e3VybH1cclxuICAgICAgLz5cclxuICAgICAgPEJsb2dEZXRhaWxzXHJcbiAgICAgICAgcG9zdHM9e3Bvc3RzLnBvc3RzfVxyXG4gICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuY2F0ZWdvcnlzfVxyXG4gICAgICAgIHBvc3Q9e3Bvc3REZXRhaWxzLnBvc3RzfVxyXG4gICAgICAgIGNvbW1lbnRzPXtwb3N0RGV0YWlscy5jb21tZW50c31cclxuICAgICAgICByZWxhdGVkUG9zdHM9e3JlbGF0ZWRQb3N0cy5wb3N0c31cclxuICAgICAgLz5cclxuICAgIDwvV3JhcHBlcjI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG5cclxuLy8gZ2V0IGFsbCBwb3N0cyBhbmQgY2F0ZWdvcmllc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFsbHBvc3RzVXJsKTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGNhdFJlcyA9IGF3YWl0IGZldGNoKGFsbGNhdGVnb3J5VXJsKTtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgY2F0UmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgcG9zdERldGFpbHNSZXMgPSBhd2FpdCBmZXRjaChgJHtzaW5nbGVQb3N0VXJsfS8ke3BhcmFtcy5pZH1gKTtcclxuICBjb25zdCBwb3N0RGV0YWlscyA9IGF3YWl0IHBvc3REZXRhaWxzUmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgcmVsYXRlZFBvc3RzUmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHt0YWdwb3N0c1VybH0vJHtwb3N0RGV0YWlscy5wb3N0cy5jYXRlZ29yeXMuaWR9YFxyXG4gICk7XHJcbiAgY29uc3QgcmVsYXRlZFBvc3RzID0gYXdhaXQgcmVsYXRlZFBvc3RzUmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICAgIGNhdGVnb3JpZXMsXHJcbiAgICAgIHBvc3REZXRhaWxzLFxyXG4gICAgICByZWxhdGVkUG9zdHMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFsbHBvc3RzVXJsKTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy8gY29uc29sZS5sb2coJ3Bvc3RzJywgcG9zdHMpXHJcbiAgY29uc3QgcGF0aHMgPSBbXTtcclxuICBwb3N0cy5wb3N0cy5mb3JFYWNoKChwb3N0KSA9PiBwYXRocy5wdXNoKGAvcG9zdC8ke3Bvc3Quc2x1Z30vJHtwb3N0LmlkfWApKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiU0VPIiwiQmxvZ0RldGFpbHMiLCJXcmFwcGVyMiIsImZpbHRlcnBvc3RzVXJsIiwidXNlUm91dGVyIiwiUmVhY3QiLCJpbmRleCIsInBvc3RzIiwiY2F0ZWdvcmllcyIsInBvc3REZXRhaWxzIiwicmVsYXRlZFBvc3RzIiwicm91dGVyIiwidXJsIiwiYXNQYXRoIiwiY2F0ZWdvcnlzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwicG9zdCIsImNvbW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/post/[slug]/[id]/index.jsx\n"));

/***/ })

});