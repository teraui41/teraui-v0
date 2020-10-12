"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _breakpoint = _interopRequireDefault(require("../constant/breakpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormGroup = (0, _styledJss.default)("div")(_defineProperty({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-star"
}, _breakpoint.default.mediaLG, {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  boxSizing: "border-box"
}));
var _default = FormGroup;
exports.default = _default;