"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _breakpoint = _interopRequireDefault(require("../constant/breakpoint"));

var _styled;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GRID_NUMBER = 24;
var StyledCol = (0, _styledJss.default)('div')((_styled = {
  flexGrow: 0,
  boxSizing: 'border-box',
  maxWidth: function maxWidth(_ref) {
    var lg = _ref.lg;
    return "".concat(100 * lg / GRID_NUMBER, "%");
  },
  flexBasis: function flexBasis(_ref2) {
    var lg = _ref2.lg;
    return "".concat(100 * lg / GRID_NUMBER, "%");
  }
}, _defineProperty(_styled, _breakpoint.default.mediaXS, {
  maxWidth: function maxWidth(_ref3) {
    var xs = _ref3.xs;
    return "".concat(100 * xs / GRID_NUMBER, "%");
  },
  flexBasis: function flexBasis(_ref4) {
    var xs = _ref4.xs;
    return "".concat(100 * xs / GRID_NUMBER, "%");
  }
}), _defineProperty(_styled, _breakpoint.default.mediaSM, {
  maxWidth: function maxWidth(_ref5) {
    var sm = _ref5.sm;
    return "".concat(100 * sm / GRID_NUMBER, "%");
  },
  flexBasis: function flexBasis(_ref6) {
    var sm = _ref6.sm;
    return "".concat(100 * sm / GRID_NUMBER, "%");
  }
}), _defineProperty(_styled, _breakpoint.default.mediaMD, {
  maxWidth: function maxWidth(_ref7) {
    var md = _ref7.md;
    return "".concat(100 * md / GRID_NUMBER, "%");
  },
  flexBasis: function flexBasis(_ref8) {
    var md = _ref8.md;
    return "".concat(100 * md / GRID_NUMBER, "%");
  }
}), _defineProperty(_styled, _breakpoint.default.mediaLG, {
  maxWidth: function maxWidth(_ref9) {
    var lg = _ref9.lg;
    return "".concat(100 * lg / GRID_NUMBER, "%");
  },
  flexBasis: function flexBasis(_ref10) {
    var lg = _ref10.lg;
    return "".concat(100 * lg / GRID_NUMBER, "%");
  }
}), _defineProperty(_styled, "height", '100%'), _styled));

var Col = function Col(_ref11) {
  var children = _ref11.children,
      props = _objectWithoutProperties(_ref11, ["children"]);

  return /*#__PURE__*/_react.default.createElement(StyledCol, props, children);
};

Col.propTypes = {
  /** 極小裝置 360px */
  xs: _propTypes.default.number,

  /** 手機 480px */
  sm: _propTypes.default.number,

  /** 平板 768px */
  md: _propTypes.default.number,

  /** 電腦 1280px */
  lg: _propTypes.default.number
};
Col.defaultProps = {
  xs: GRID_NUMBER,
  sm: GRID_NUMBER,
  md: GRID_NUMBER,
  lg: GRID_NUMBER
};
var _default = Col;
exports.default = _default;