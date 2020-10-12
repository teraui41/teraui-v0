"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledRow = (0, _styledJss.default)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box'
  };
});

var Row = function Row(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement(StyledRow, null, children);
};

Row.propTypes = {
  children: _propTypes.default.node
};
Row.defaultProps = {
  children: null
};
var _default = Row;
exports.default = _default;