"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledStep = (0, _styledJss.default)("span")({
  width: 10,
  height: 10,
  display: "block",
  borderRadius: 20,
  lineHeight: "10px",
  textAlign: "center",
  padding: function padding(_ref) {
    var theme = _ref.theme;
    return theme.getSpacing(1);
  },
  color: function color(_ref2) {
    var theme = _ref2.theme,
        active = _ref2.active,
        step = _ref2.step;
    return active.includes(step) ? theme.colors.white : theme.colors.grey4;
  },
  backgroundColor: function backgroundColor(_ref3) {
    var theme = _ref3.theme,
        active = _ref3.active,
        step = _ref3.step;
    return active.includes(step) ? theme.colors.primary : theme.colors.grey1;
  }
});
var StyledStepsContainer = (0, _styledJss.default)("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
var Separator = (0, _styledJss.default)("div")({
  flex: 1,
  height: 1,
  border: '5px solid #fff',
  display: function display(_ref4) {
    var hide = _ref4.hide;
    return hide ? "none" : "block";
  },
  backgroundColor: function backgroundColor(_ref5) {
    var theme = _ref5.theme;
    return theme.colors.grey1;
  },
  borderBottom: function borderBottom(_ref6) {
    var theme = _ref6.theme;
    return "1px solid ".concat(theme.colors.grey1, "px");
  }
});

var Step = function Step(_ref7) {
  var step = _ref7.step,
      active = _ref7.active;
  return /*#__PURE__*/_react.default.createElement(StyledStep, {
    step: step,
    active: active
  }, step);
};

var Steps = function Steps(_ref8) {
  var steps = _ref8.steps,
      active = _ref8.active;
  return /*#__PURE__*/_react.default.createElement(StyledStepsContainer, null, steps.map(function (step, index) {
    var showSeparator = steps.length - 1 === index;
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(Step, {
      step: step,
      active: active
    }), /*#__PURE__*/_react.default.createElement(Separator, {
      hide: showSeparator
    }));
  }));
};

Steps.propTypes = {
  steps: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])),
  active: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]))
};
var _default = Steps;
exports.default = _default;