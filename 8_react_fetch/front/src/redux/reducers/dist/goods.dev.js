"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataAction = void 0;

var _goods = require("../../api/goods");

var GET_DATA = "GET_DATA";
var GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

var getDataAction = function getDataAction(query) {
  return function (dispatch) {
    dispatch({
      type: GET_DATA
    });
    (0, _goods.getData)(query).then(function (_ref) {
      var data = _ref.data;
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: data
      });
    })["catch"](function (e) {
      console.info(e);
    });
  };
};

exports.getDataAction = getDataAction;