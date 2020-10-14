"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _Typography = _interopRequireDefault(require("../Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledPath = (0, _styledJss.default)("a")({
  display: "inline-block",
  textDecoration: "none",
  color: function color(_ref) {
    var theme = _ref.theme,
        href = _ref.href;
    return (0, _isEmpty.default)(href) ? theme.colors.grey4 : theme.colors.primary;
  }
});
var StyledSeparate = (0, _styledJss.default)("span")({
  display: function display(_ref2) {
    var hidden = _ref2.hidden;
    return hidden ? "none" : "inline-block";
  },
  padding: function padding(_ref3) {
    var theme = _ref3.theme;
    return theme.getSpacing(0.5);
  },
  color: function color(_ref4) {
    var theme = _ref4.theme;
    return theme.colors.grey2;
  }
});

var Paths = function Paths(_ref5) {
  var paths = _ref5.paths;
  return paths.map(function (item, index) {
    var showSeparator = index === paths.length - 1;
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledPath, {
      href: item.path
    }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, item.text)), /*#__PURE__*/_react.default.createElement(StyledSeparate, {
      hidden: showSeparator
    }, "/"));
  });
};

var Breadcrumbs = function Breadcrumbs(_ref6) {
  var paths = _ref6.paths,
      props = _objectWithoutProperties(_ref6, ["paths"]);

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(Paths, {
    paths: paths
  }));
};

Breadcrumbs.propTypes = {
  paths: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    path: _propTypes.default.string
  }))
};
Breadcrumbs.defaultProps = {
  paths: []
};
var _default = Breadcrumbs;
exports.default = _default;