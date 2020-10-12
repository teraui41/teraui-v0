"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledCardHeader = (0, _styledJss.default)('div')({
  padding: function padding(_ref) {
    var theme = _ref.theme;
    return "".concat(theme.getSpacing(2), "px ").concat(theme.getSpacing(4), "px");
  },
  borderBottom: function borderBottom(_ref2) {
    var theme = _ref2.theme;
    return "1px solid ".concat(theme.colors.grey1);
  },
  '& > h1, & > p': {
    margin: 0
  }
});

var Card = function Card(_ref3) {
  var title = _ref3.title,
      subtitle = _ref3.subtitle,
      props = _objectWithoutProperties(_ref3, ["title", "subtitle"]);

  return /*#__PURE__*/_react.default.createElement(StyledCardHeader, props, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("p", null, subtitle));
};

Card.propTypes = {
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string
};
Card.defaultProps = {
  title: '',
  subtitle: ''
};
var _default = Card;
exports.default = _default;