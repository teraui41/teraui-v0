"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledJss = _interopRequireDefault(require("styled-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ICON_MAP = {
  NEXT: 'fa-angle-right',
  PREVIOUS: 'fa-angle-left',
  TOP: 'fa-angle-double-left',
  END: 'fa-angle-double-right'
};

var getPadding = function getPadding(theme) {
  return "".concat(theme.getSpacing(1), "px ").concat(theme.getSpacing(2), "px");
};

var getBorder = function getBorder(theme, active) {
  return "1px solid ".concat(active ? theme.colors.primary : theme.colors.grey1);
};

var getIconColor = function getIconColor(accessible, theme) {
  return accessible ? theme.colors.primary : theme.colors.grey2;
};

var PageNumber = (0, _styledJss.default)('span')({
  border: function border(_ref) {
    var theme = _ref.theme,
        active = _ref.active;
    return getBorder(theme, active);
  },
  padding: function padding(_ref2) {
    var theme = _ref2.theme;
    return getPadding(theme);
  },
  borderRadius: function borderRadius(_ref3) {
    var theme = _ref3.theme;
    return theme.radius;
  },
  marginRight: function marginRight(_ref4) {
    var theme = _ref4.theme;
    return theme.getSpacing(1);
  },
  color: function color(_ref5) {
    var theme = _ref5.theme,
        active = _ref5.active;
    return active ? theme.colors.primary : theme.colors.grey2;
  }
});
var StyledIcon = (0, _styledJss.default)(_Icon.default)({
  color: function color(_ref6) {
    var theme = _ref6.theme,
        accessible = _ref6.accessible;
    return getIconColor(accessible, theme);
  },
  marginRight: function marginRight(_ref7) {
    var theme = _ref7.theme;
    return theme.getSpacing(1);
  }
});
var PagesBox = (0, _styledJss.default)('div')({
  display: 'inline-flex'
});
var PaginationBox = (0, _styledJss.default)('div')({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center'
});

var Pages = function Pages(_ref8) {
  var current = _ref8.current,
      pages = _ref8.pages,
      handlePageChange = _ref8.handlePageChange;
  return /*#__PURE__*/_react.default.createElement(PagesBox, null, pages.map(function (page, index) {
    var isActive = current === page;
    return /*#__PURE__*/_react.default.createElement(PageNumber, {
      key: "page_".concat(index),
      active: isActive,
      onClick: handlePageChange(page)
    }, page);
  }));
};

var getPages = function getPages(total, size) {
  var numbers = [];
  var pages = (total / size).toFixed(0);

  for (var i = 0; i < pages; i++) {
    numbers.push(i + 1);
  }

  return numbers;
};

var pageChange = function pageChange(onPageChange) {
  return function (page) {
    return function () {
      onPageChange(page);
    };
  };
};

var Pagination = function Pagination(_ref9) {
  var current = _ref9.current,
      total = _ref9.total,
      size = _ref9.size,
      onPageChange = _ref9.onPageChange,
      props = _objectWithoutProperties(_ref9, ["current", "total", "size", "onPageChange"]);

  var pages = getPages(total, size);
  var handlePageChange = pageChange(onPageChange);
  return /*#__PURE__*/_react.default.createElement(PaginationBox, props, /*#__PURE__*/_react.default.createElement(StyledIcon, {
    icon: ICON_MAP.TOP,
    accessible: current !== 1,
    onClick: handlePageChange(1)
  }), /*#__PURE__*/_react.default.createElement(StyledIcon, {
    icon: ICON_MAP.PREVIOUS,
    accessible: current !== 1,
    onClick: handlePageChange(current - 1)
  }), /*#__PURE__*/_react.default.createElement(Pages, {
    current: current,
    pages: pages,
    handlePageChange: handlePageChange
  }), /*#__PURE__*/_react.default.createElement(StyledIcon, {
    icon: ICON_MAP.NEXT,
    accessible: current !== pages.length,
    onClick: handlePageChange(pages.length + 1)
  }), /*#__PURE__*/_react.default.createElement(StyledIcon, {
    icon: ICON_MAP.END,
    accessible: current !== pages.length,
    onClick: handlePageChange(pages.length)
  }));
};

Pagination.propTypes = {
  /** 當前頁數 */
  current: _propTypes.default.number,

  /** 總頁數 */
  total: _propTypes.default.number,

  /** 每頁筆數 */
  size: _propTypes.default.number,

  /** 頁面變換事件 */
  onPageChange: _propTypes.default.func
};
Pagination.defaultProps = {
  current: 1,
  total: 1,
  size: 10,
  onPageChange: function onPageChange() {
    return false;
  }
};
var _default = Pagination;
exports.default = _default;