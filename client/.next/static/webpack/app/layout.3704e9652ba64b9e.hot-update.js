"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"3d18da81828f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/YzAzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjNkMThkYTgxODI4ZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/_dumbFetch.tsx":
/*!***************************************!*\
  !*** ./src/components/_dumbFetch.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Dumb = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:4444/genre/all\").then((response)=>{\n            const { data } = response;\n            console.log({\n                data\n            });\n            setData(data.allGenres);\n        }).catch(()=>{\n            console.log(\"catch\");\n        });\n    }, []);\n    if (data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((x, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: x\n            }, i, false, {\n                fileName: \"/home/len/Documents/projects/elektronika-comerza/client/src/components/_dumbFetch.tsx\",\n                lineNumber: 23,\n                columnNumber: 18\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/len/Documents/projects/elektronika-comerza/client/src/components/_dumbFetch.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, undefined);\n    else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"NOnono\"\n    }, void 0, false, {\n        fileName: \"/home/len/Documents/projects/elektronika-comerza/client/src/components/_dumbFetch.tsx\",\n        lineNumber: 27,\n        columnNumber: 15\n    }, undefined);\n};\n_s(Dumb, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = Dumb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dumb);\nvar _c;\n$RefreshReg$(_c, \"Dumb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL19kdW1iRmV0Y2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDdUQ7QUFDN0I7QUFFMUIsTUFBTUksT0FBVzs7SUFDZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQWE7SUFDN0NELGdEQUFTQSxDQUFDO1FBQ1JFLDZDQUFLQSxDQUNGSSxHQUFHLENBQUMsbUNBQ0pDLElBQUksQ0FBQyxDQUFDQztZQUNMLE1BQU0sRUFBRUosSUFBSSxFQUFFLEdBQUdJO1lBQ2pCQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVOO1lBQUs7WUFDbkJDLFFBQVFELEtBQUtPLFNBQVM7UUFDeEIsR0FDQ0MsS0FBSyxDQUFDO1lBQ0xILFFBQVFDLEdBQUcsQ0FBQztRQUNkO0lBQ0osR0FBRyxFQUFFO0lBQ0wsSUFBSU4sTUFDRixxQkFDRSw4REFBQ1M7a0JBQ0VULEtBQUtVLEdBQUcsQ0FBQyxDQUFDQyxHQUFXQztZQUNwQixxQkFBTyw4REFBQ0M7MEJBQVdGO2VBQUpDOzs7OztRQUNqQjs7Ozs7O1NBR0QscUJBQU8sOERBQUNIO2tCQUFJOzs7Ozs7QUFDbkI7R0F2Qk1WO0tBQUFBO0FBeUJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL19kdW1iRmV0Y2gudHN4PzhlOTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgRHVtYjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0NDQ0L2dlbnJlL2FsbFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgZGF0YSB9KTtcbiAgICAgICAgc2V0RGF0YShkYXRhLmFsbEdlbnJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaFwiKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG4gIGlmIChkYXRhKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YS5tYXAoKHg6IHN0cmluZywgaTogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxwIGtleT17aX0+e3h9PC9wPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICBlbHNlIHJldHVybiA8ZGl2Pk5Pbm9ubzwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER1bWI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRHVtYiIsImRhdGEiLCJzZXREYXRhIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImFsbEdlbnJlcyIsImNhdGNoIiwiZGl2IiwibWFwIiwieCIsImkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/_dumbFetch.tsx\n"));

/***/ })

});