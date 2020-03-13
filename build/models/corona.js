"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var CORONA_API = process.env.CORONA_API;

var Corona = /*#__PURE__*/function () {
  function Corona() {
    (0, _classCallCheck2["default"])(this, Corona);
  }

  (0, _createClass2["default"])(Corona, [{
    key: "total",
    value: function () {
      var _total = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios["default"].get("".concat(CORONA_API, "/all"));

              case 3:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw new Error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function total() {
        return _total.apply(this, arguments);
      }

      return total;
    }()
  }, {
    key: "countries",
    value: function () {
      var _countries = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _axios["default"].get("".concat(CORONA_API, "/countries"));

              case 3:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function countries() {
        return _countries.apply(this, arguments);
      }

      return countries;
    }()
  }]);
  return Corona;
}();

var _default = Corona;
exports["default"] = _default;
//# sourceMappingURL=corona.js.map