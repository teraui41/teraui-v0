"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledNavBar = (0, _styledJss.default)('header')(function (_ref) {
  var style = _ref.style,
      theme = _ref.theme;
  return {
    height: 60,
    marginLeft: 250,
    width: 'calc(100% - 250px)',
    backgroundColor: theme.colors.primary
  };
});

var NavBar = function NavBar(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/_react.default.createElement(StyledNavBar, {
    style: props
  });
};

exports.NavBar = NavBar;
NavBar.propTypes = {
  style: _propTypes.default.object
};
NavBar.defaultProps = {
  style: {}
};
var _default = NavBar;
exports.default = _default;