"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Pop = _interopRequireDefault(require("../Pop"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Card = _interopRequireDefault(require("../Card"));

var _CardBody = _interopRequireDefault(require("../CardBody"));

var _FormGroup = _interopRequireDefault(require("../FormGroup"));

var _FormLabel = _interopRequireDefault(require("../FormLabel"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ErrorMessage = _interopRequireDefault(require("../ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getBorderStyle = function getBorderStyle(_ref) {
  var theme = _ref.theme,
      errorMessage = _ref.errorMessage,
      open = _ref.open;

  if (!(0, _isEmpty.default)(errorMessage)) {
    return theme.colors.danger;
  }

  if (open) {
    return theme.colors.primary;
  }

  console.log("TCL: getBorderStyle -> theme.colors.grey1", theme.colors.grey1);
  return theme.colors.grey1;
};

var StyledSelect = (0, _styledJss.default)("div")({
  flex: 1,
  display: "flex",
  cursor: "pointer",
  position: 'relative',
  justifyContent: "space-between",
  borderRadius: function borderRadius(_ref2) {
    var theme = _ref2.theme;
    return theme.radius;
  },
  fontSize: function fontSize(_ref3) {
    var theme = _ref3.theme;
    return theme.typography.content.fontSize;
  },
  border: function border(_ref4) {
    var theme = _ref4.theme,
        errorMessage = _ref4.errorMessage,
        open = _ref4.open;
    return "1px solid ".concat(getBorderStyle({
      open: open,
      theme: theme,
      errorMessage: errorMessage
    }));
  },
  color: function color(_ref5) {
    var theme = _ref5.theme,
        disabled = _ref5.disabled;
    return disabled ? theme.colors.grey2 : theme.colors.black;
  },
  backgroundColor: function backgroundColor(_ref6) {
    var theme = _ref6.theme,
        disabled = _ref6.disabled;
    return disabled ? theme.colors.grey0 : theme.colors.white;
  }
});
var StyledTypography = (0, _styledJss.default)(_Typography.default)({
  position: 'absolute',
  padding: function padding(_ref7) {
    var theme = _ref7.theme;
    return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px");
  }
});
var Options = (0, _styledJss.default)("div")({
  cursor: "pointer",
  padding: function padding(_ref8) {
    var theme = _ref8.theme;
    return theme.getSpacing(2);
  },
  "&:hover": {
    backgroundColor: function backgroundColor(_ref9) {
      var theme = _ref9.theme;
      return theme.colors.primary;
    },
    color: function color(_ref10) {
      var theme = _ref10.theme;
      return theme.colors.white;
    }
  }
});
var OptionBox = (0, _styledJss.default)("div")({
  overflow: "hidden",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.17)",
  borderRadius: function borderRadius(_ref11) {
    var theme = _ref11.theme;
    return theme.radius;
  },
  backgroundColor: function backgroundColor(_ref12) {
    var theme = _ref12.theme;
    return theme.colors.white;
  },
  border: function border(_ref13) {
    var theme = _ref13.theme;
    return "1px solid ".concat(theme.colors.grey1);
  }
});
var StyledInput = (0, _styledJss.default)('input')({
  opacity: 0,
  cursor: "pointer",
  padding: function padding(_ref14) {
    var theme = _ref14.theme;
    return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px");
  }
});
var StyledIcon = (0, _styledJss.default)(_Icon.default)({
  right: 0,
  position: 'absolute',
  padding: function padding(_ref15) {
    var theme = _ref15.theme;
    return "".concat(theme.getSpacing(1), "px");
  }
});

var handleClick = function handleClick(open, setOpen) {
  return function () {
    setOpen(!open);
  };
};

var handleSelectItem = function handleSelectItem(_ref16) {
  var setValue = _ref16.setValue,
      setSelectedItem = _ref16.setSelectedItem,
      setOpen = _ref16.setOpen,
      onChange = _ref16.onChange;
  return function (item) {
    return function (e) {
      setOpen(false);
      setSelectedItem(item);
      onChange(e);
    };
  };
};

var handleOnBlur = function handleOnBlur(setOpen) {
  return function () {
    setOpen(false);
  };
};

var Select = function Select(_ref17) {
  var items = _ref17.items,
      label = _ref17.label,
      required = _ref17.required,
      onChange = _ref17.onChange,
      placeholder = _ref17.placeholder,
      errorMessage = _ref17.errorMessage,
      props = _objectWithoutProperties(_ref17, ["items", "label", "required", "onChange", "placeholder", "errorMessage"]);

  var menuEle = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedItem = _useState6[0],
      setSelectedItem = _useState6[1];

  var onSelectClick = handleClick(open, setOpen);
  var onSelectItem = handleSelectItem({
    setSelectedItem: setSelectedItem,
    setOpen: setOpen,
    onChange: onChange,
    setValue: setValue
  });
  var onBlurClick = handleOnBlur(setOpen);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, /*#__PURE__*/_react.default.createElement(_FormLabel.default, {
    required: required
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    ref: menuEle,
    onClick: onSelectClick
  }, /*#__PURE__*/_react.default.createElement(StyledSelect, {
    open: open,
    errorMessage: errorMessage
  }, /*#__PURE__*/_react.default.createElement(StyledTypography, null, selectedItem.label || placeholder), /*#__PURE__*/_react.default.createElement(StyledIcon, {
    icon: "fa-angle-down",
    size: 12
  }), /*#__PURE__*/_react.default.createElement(StyledInput, {
    type: "text",
    value: value,
    onChange: onChange,
    onBlur: onBlurClick
  }))), /*#__PURE__*/_react.default.createElement(_Pop.default, {
    open: open,
    anchorEl: menuEle
  }, /*#__PURE__*/_react.default.createElement(OptionBox, null, items.map(function (item, index) {
    var key = "select_item_".concat(item.label, "_").concat(item.vale, "_").concat(index);
    return /*#__PURE__*/_react.default.createElement(Options, {
      key: key,
      onClick: onSelectItem(item)
    }, item.label);
  })))), /*#__PURE__*/_react.default.createElement(_ErrorMessage.default, {
    errorMessage: errorMessage
  }, errorMessage));
};

Select.propTypes = {
  label: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }))
};
Select.defaultProps = {
  label: "",
  items: [],
  placeholder: '請選擇...',
  disabled: false,
  onChange: function onChange() {
    return false;
  }
};
var _default = Select;
exports.default = _default;