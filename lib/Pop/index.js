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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledPop = (0, _styledJss.default)("div")({
  zIndex: 1000,
  overflow: 'hidden',
  position: "absolute",
  transition: "all .1s ease",
  height: function height(_ref) {
    var _height = _ref.height;
    return _height;
  },
  opacity: function opacity(_ref2) {
    var open = _ref2.open;
    return open ? 1 : 0;
  },
  padding: function padding(_ref3) {
    var theme = _ref3.theme;
    return theme.getSpacing(1);
  },
  top: function top(_ref4) {
    var theme = _ref4.theme,
        position = _ref4.position;
    return position.top - theme.getSpacing(2);
  },
  left: function left(_ref5) {
    var theme = _ref5.theme,
        position = _ref5.position;
    return position.left;
  }
});

var onClose = function onClose(setHeight, handleGetClientHeight) {
  setHeight(handleGetClientHeight());
  setTimeout(function () {
    setHeight(0);
  }, 100);
};

var onOpen = function onOpen(setHeight) {
  setTimeout(function () {
    setHeight("auto");
  }, 100);
};

var getClientHeight = function getClientHeight(refEle) {
  return function () {
    return refEle ? refEle.current.clientHeight : 0;
  };
};

var Pop = function Pop(_ref6) {
  var children = _ref6.children,
      open = _ref6.open,
      anchorEl = _ref6.anchorEl,
      props = _objectWithoutProperties(_ref6, ["children", "open", "anchorEl"]);

  var refEle = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = (0, _react.useState)({
    left: 0,
    top: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      position = _useState4[0],
      setPosition = _useState4[1];

  var setHeightHandler = (0, _react.useCallback)(function () {
    var handleGetClientHeight = getClientHeight(refEle);
    setHeight(handleGetClientHeight());
    open ? onOpen(setHeight) : onClose(setHeight, handleGetClientHeight);
  }, [refEle, open]);
  (0, _react.useEffect)(function () {
    if (anchorEl !== null) {
      var _anchorEl$current = anchorEl.current,
          left = _anchorEl$current.offsetLeft,
          top = _anchorEl$current.offsetTop;
      setPosition({
        left: left,
        top: top
      });
    }

    setHeightHandler();
  }, [anchorEl, setHeightHandler]);
  return /*#__PURE__*/_react.default.createElement(StyledPop, {
    position: position,
    open: open,
    height: height
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: refEle
  }, children));
};

Pop.propTypes = {
  anchorEl: _propTypes.default.node
};
Pop.default = {
  anchorEl: null
};
var _default = Pop;
exports.default = _default;