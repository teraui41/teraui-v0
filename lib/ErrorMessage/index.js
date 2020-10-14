"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _breakpoint = _interopRequireDefault(require("../constant/breakpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ErrorMessage = (0, _styledJss.default)("div")(_defineProperty({
  color: function color(_ref) {
    var theme = _ref.theme;
    return theme.colors.danger;
  },
  paddingLeft: function paddingLeft(_ref2) {
    var theme = _ref2.theme;
    return theme.getSpacing(1);
  }
}, _breakpoint.default.mediaLG, {
  paddingLeft: function paddingLeft(_ref3) {
    var theme = _ref3.theme;
    return theme.getSpacing(15);
  }
}));
var _default = ErrorMessage;
exports.default = _default;