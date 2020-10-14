"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Typography = _interopRequireDefault(require("../Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuIcon = (0, _styledJss.default)(_Icon.default)(function (_ref) {
  var theme = _ref.theme;
  return {
    fontSize: 14,
    color: theme.colors.grey2
  };
});
var StyledMenuContainer = (0, _styledJss.default)("div")({
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: function padding(_ref2) {
    var theme = _ref2.theme;
    return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px");
  },
  '&:hover': {
    backgroundColor: function backgroundColor(_ref3) {
      var theme = _ref3.theme;
      return theme.colors.grey4;
    }
  }
});
var MenuText = (0, _styledJss.default)(_Typography.default)({
  color: function color(_ref4) {
    var theme = _ref4.theme;
    return "".concat(theme.colors.grey2);
  }
});
var MenuExtent = (0, _styledJss.default)(_Icon.default)(function (_ref5) {
  var theme = _ref5.theme,
      hasChild = _ref5.hasChild,
      open = _ref5.open;
  return {
    color: theme.colors.grey2,
    opacity: hasChild ? 1 : 0,
    transition: 'all .2s ease',
    transform: open ? 'rotate(90deg)' : 'rotate(0deg)'
  };
});

var MenuItem = function MenuItem(_ref6) {
  var children = _ref6.children,
      text = _ref6.text,
      icon = _ref6.icon,
      open = _ref6.open,
      hasChild = _ref6.hasChild,
      props = _objectWithoutProperties(_ref6, ["children", "text", "icon", "open", "hasChild"]);

  return /*#__PURE__*/_react.default.createElement(StyledMenuContainer, props, /*#__PURE__*/_react.default.createElement(MenuIcon, {
    icon: icon
  }), /*#__PURE__*/_react.default.createElement(MenuText, {
    variant: "content"
  }, text), /*#__PURE__*/_react.default.createElement(MenuExtent, {
    open: open,
    hasChild: hasChild,
    icon: "fa-angle-right"
  }));
};

MenuItem.propTypes = {
  icon: _propTypes.default.string,
  text: _propTypes.default.string,
  hasChild: _propTypes.default.bool
};
MenuItem.defaultProps = {
  icon: '',
  text: '',
  hasChild: false
};
var _default = MenuItem;
exports.default = _default;