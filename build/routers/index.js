"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _corona = _interopRequireDefault(require("./corona"));

var router = _express["default"].Router();

router.all("*", _corona["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map