"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

var _fetchData = _interopRequireDefault(require("./fetchData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getData(query) {
  return (0, _fetchData["default"])("/goods", "GET", query);
}