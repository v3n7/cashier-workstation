"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _checkPositions = _interopRequireDefault(require("./checkPositions"));

var _auth = _interopRequireDefault(require("./auth"));

var _notification = _interopRequireDefault(require("./notification"));

var _goods = _interopRequireDefault(require("./goods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  checkPositions: _checkPositions["default"],
  auth: _auth["default"],
  notification: _notification["default"],
  goods: _goods["default"]
});

exports["default"] = _default;