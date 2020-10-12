"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FromLabel = _interopRequireDefault(require("../FromLabel"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _breakpoint = _interopRequireDefault(require("../constant/breakpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledRadio = (0, _styledJss.default)("label")(_defineProperty({
  position: "relative",
  display: "flex",
  paddingLeft: 30,
  opacity: function opacity(_ref) {
    var disabled = _ref.disabled;
    return disabled ? 0.5 : 1;
  },
  marginBottom: function marginBottom(_ref2) {
    var theme = _ref2.theme;
    return theme.getSpacing(1);
  },
  paddingRight: function paddingRight(_ref3) {
    var theme = _ref3.theme;
    return theme.getSpacing(1);
  },
  alignItems: "center",
  "&:before": {
    position: "absolute",
    content: '""',
    left: 0,
    width: 8,
    height: 8,
    borderRadius: 10,
    margin: function margin(_ref4) {
      var theme = _ref4.theme;
      return theme.getSpacing(1);
    },
    border: function border(_ref5) {
      var theme = _ref5.theme,
          checked = _ref5.checked;
      return "5px solid ".concat(checked ? theme.colors.primary : theme.colors.grey1);
    }
  }
}, _breakpoint.default.mediaMD, {
  marginBottom: function marginBottom(_ref6) {
    var theme = _ref6.theme;
    return theme.getSpacing(0);
  }
}));

var RadioItems = function RadioItems(_ref7) {
  var items = _ref7.items,
      name = _ref7.name,
      onChange = _ref7.onChange,
      disabled = _ref7.disabled,
      currentValue = _ref7.value;
  return items.map(function (item, index) {
    var checked = currentValue === item.value;
    var ID = "".concat(name, "_").concat(item.value, "_").concat(index);
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: "radios_".concat(index)
    }, /*#__PURE__*/_react.default.createElement(StyledRadio, {
      htmlFor: ID,
      checked: checked,
      disabled: disabled
    }, item.label), /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      id: ID,
      name: name,
      value: item.value,
      onChange: onChange,
      checked: checked,
      disabled: disabled,
      style: {
        display: "none"
      }
    }));
  });
};

var RadioGroup = function RadioGroup(_ref8) {
  var name = _ref8.name,
      items = _ref8.items,
      label = _ref8.label,
      value = _ref8.value,
      onChange = _ref8.onChange,
      required = _ref8.required,
      disabled = _ref8.disabled,
      props = _objectWithoutProperties(_ref8, ["name", "items", "label", "value", "onChange", "required", "disabled"]);

  return /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement(_FromLabel.default, {
    required: required
  }, label), /*#__PURE__*/_react.default.createElement(RadioItems, {
    name: name,
    value: value,
    items: items,
    onChange: onChange,
    disabled: disabled
  }));
};

RadioGroup.propTypes = {
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  })),
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  onChange: _propTypes.default.func
};
RadioGroup.defaultProps = {
  label: "",
  value: "",
  items: [],
  disabled: false,
  onChange: function onChange() {
    return false;
  }
};
var _default = RadioGroup;
exports.default = _default;