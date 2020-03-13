"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _routers = _interopRequireDefault(require("./routers"));

var app = (0, _express["default"])();
var port = process.env.PORT || 5000; // app.use(cors());

app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use(_routers["default"]);
app.get("*", function (req, res) {
  res.sendStatus(404);
});
app.listen(port, function () {
  console.log("Running at port ".concat(port));
});
//# sourceMappingURL=server.js.map