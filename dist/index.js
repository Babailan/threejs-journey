/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\nfunction cutTheSticks(arr) {\r\n    // Write your code here\r\n    function ha(arr, cutSticks) {\r\n        var cs = cutSticks ? cutSticks : [];\r\n        var newArr = [];\r\n        arr.sort(function (a, b) { return a - b; });\r\n        var m = arr[0];\r\n        if (arr.length > 0) {\r\n            cs.push(arr.length);\r\n            for (var i = 0; i < arr.length; i++) {\r\n                var x = arr[i] - m;\r\n                if (x > 0) {\r\n                    newArr.push(x);\r\n                }\r\n                ;\r\n            }\r\n            return ha(newArr, cs);\r\n        }\r\n        else {\r\n            return cs;\r\n        }\r\n    }\r\n    return ha(arr);\r\n}\r\nconsole.log(cutTheSticks([5, 4, 4, 2, 2, 8]));\r\n\n\n//# sourceURL=webpack://threejs-journey/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;