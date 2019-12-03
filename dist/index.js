'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactGridLayout = require('react-grid-layout');

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "div.rdl-widget-container::-webkit-scrollbar{width:6px;height:6px;background-color:#f5f5f5}div.rdl-widget-container::-webkit-scrollbar-thumb{background-color:#888}.rdl-widget-container *{scrollbar-width:thin!important;scrollbar-color:#888 #f5f5f5!important}.rdl-close{position:absolute;right:5px;top:5px;width:15px;height:15px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTI0IDIwLjE4OGwtOC4zMTUtOC4yMDkgOC4yLTguMjgyTDIwLjE4OCAwbC04LjIxMiA4LjMxOEwzLjY2Ni4xMTUgMCAzLjc4MWw4LjMyMSA4LjI0LTguMjA2IDguMzEzTDMuNzgxIDI0bDguMjM3LTguMzE4IDguMjg1IDguMjAzeiIvPjwvc3ZnPg==\")!important;background-size:cover;opacity:.5;z-index:999}.rdl-close:hover{opacity:1}.react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgd2lkdGg9IjYiIGhlaWdodD0iNiI+PHBhdGggZD0iTTYgNkgwVjQuMmg0LjJWMEg2djZ6IiBvcGFjaXR5PSIuMzAyIi8+PC9zdmc+\");background-position:100% 100%;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;-webkit-transform:rotate(270deg);transform:rotate(270deg)}.react-resizable-handle-e,.react-resizable-handle-w{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.react-resizable-handle-e{right:0;-webkit-transform:rotate(315deg);transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;-webkit-transform:rotate(225deg);transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.react-grid-layout{position:relative;-webkit-transition:height .2s ease;transition:height .2s ease}.react-grid-item{-webkit-transition:all .2s ease;transition:all .2s ease;-webkit-transition-property:left,top;transition-property:left,top}.react-grid-item.cssTransforms{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.react-grid-item.resizing{z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{-webkit-transition:none;transition:none;z-index:3;will-change:transform}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;-webkit-transition-duration:.1s;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle:after{content:\"\";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}";
styleInject(css);

var INFINITE = 9999;

var Widget = function Widget(_ref) {
  var Component = _ref.Component,
      refreshInterval = _ref.refreshInterval;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      refreshHook = _useState2[0],
      setRefreshHook = _useState2[1];

  React.useEffect(function () {
    if (refreshInterval && typeof refreshInterval === 'number' && refreshInterval > 0) {
      var interval = setInterval(function () {
        return setRefreshHook(function (refreshHook) {
          return !refreshHook;
        });
      }, refreshInterval);
      return function () {
        return clearInterval(interval);
      };
    }
  }, [refreshInterval]);
  return React__default.createElement(Component, {
    refreshHook: refreshHook
  });
};

var ResponsiveReactGridLayout = reactGridLayout.WidthProvider(reactGridLayout.Responsive);
var BREAKPOINTRATIOS = {
  lg: 10,
  md: 9,
  sm: 8,
  xs: 7,
  xxs: 6
};
var MULTIPLIER = 10;

var getLayoutForBreakPoint = function getLayoutForBreakPoint(layout, layouts, currentBreakpoint, forBreakpoint) {
  // console.log(forBreakpoint,currentBreakpoint,layout)
  // console.log('hrererere',layout)
  return layout.map(function (widget) {
    if (layouts[forBreakpoint] && layouts[forBreakpoint].filter(function (w) {
      return w.id === widget.id;
    }).length > 0) {
      return widget;
    } // console.log(widget)


    var x = widget.x,
        w = widget.w;
    var ratio = BREAKPOINTRATIOS[currentBreakpoint] / BREAKPOINTRATIOS[forBreakpoint]; // console.log(ratio)
    // console.log('here')

    return _objectSpread2({}, widget, {
      x: Math.round(x * (1 / ratio)),
      w: Math.round(w * ratio)
    });
  });
};

var getLayoutsFromLayout = function getLayoutsFromLayout(layout, layouts, breakpoint) {
  // console.log(layout)
  return {
    lg: getLayoutForBreakPoint(layout, layouts, breakpoint, 'lg'),
    md: getLayoutForBreakPoint(layout, layouts, breakpoint, 'md'),
    sm: getLayoutForBreakPoint(layout, layouts, breakpoint, 'sm'),
    xs: getLayoutForBreakPoint(layout, layouts, breakpoint, 'xs'),
    xxs: getLayoutForBreakPoint(layout, layouts, breakpoint, 'xxs')
  };
};

var Dashboard = function Dashboard(props) {
  var widgets = props.widgets,
      layoutsState = props.layoutsState,
      setLayoutsState = props.setLayoutsState,
      _props$editable = props.editable,
      editable = _props$editable === void 0 ? false : _props$editable,
      onRemoveWidget = props.onRemoveWidget,
      _props$dashboardStyle = props.dashboardStyle,
      dashboardStyle = _props$dashboardStyle === void 0 ? {} : _props$dashboardStyle,
      _props$backgroundColo = props.backgroundColor,
      backgroundColor = _props$backgroundColo === void 0 ? 'pink' : _props$backgroundColo,
      _props$widgetBackgrou = props.widgetBackgroundColorGeneral,
      widgetBackgroundColorGeneral = _props$widgetBackgrou === void 0 ? '' : _props$widgetBackgrou,
      _props$fixedHeight = props.fixedHeight,
      fixedHeight = _props$fixedHeight === void 0 ? 0 : _props$fixedHeight,
      _props$enableGravity = props.enableGravity,
      enableGravity = _props$enableGravity === void 0 ? false : _props$enableGravity,
      _props$leftGravity = props.leftGravity,
      leftGravity = _props$leftGravity === void 0 ? false : _props$leftGravity,
      _props$widgetMarginLe = props.widgetMarginLeftRight,
      widgetMarginLeftRight = _props$widgetMarginLe === void 0 ? 10 : _props$widgetMarginLe,
      _props$widgetMarginTo = props.widgetMarginTopBottom,
      widgetMarginTopBottom = _props$widgetMarginTo === void 0 ? 10 : _props$widgetMarginTo,
      _props$dashboardLeftP = props.dashboardLeftPadding,
      dashboardLeftPadding = _props$dashboardLeftP === void 0 ? 10 : _props$dashboardLeftP,
      _props$dashboardTopPa = props.dashboardTopPadding,
      dashboardTopPadding = _props$dashboardTopPa === void 0 ? 10 : _props$dashboardTopPa,
      _props$preventCollisi = props.preventCollision,
      preventCollision = _props$preventCollisi === void 0 ? false : _props$preventCollisi; // const [onScreenWidgetIds, setOnScreenWidgetIds] = useState([])
  // const [layouts, setLayouts] = useState(layoutsState||{})

  var _useState = React.useState('lg'),
      _useState2 = _slicedToArray(_useState, 2),
      currentBreakPoint = _useState2[0],
      setCurrentBreakPoint = _useState2[1];

  var _useState3 = React.useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      rowHeight = _useState4[0],
      setRowHeight = _useState4[1]; // const [width, setWidth] = useState(1200)
  // const [currentLayout , setCurrentLayout] = useState([])
  // const [freezeLayout, setFreezeLayout] = useState(true)
  // const tempLayout = useRef([])


  var onLayoutChange = React.useCallback(function (layout, layouts) {
    // console.log(layout,layouts)
    // console.log(getLayoutsFromLayout(layout,currentBreakPoint))
    if (layout && currentBreakPoint && layouts) {
      setLayoutsState(getLayoutsFromLayout(layout, layouts, currentBreakPoint));
    }
  }, [currentBreakPoint, setLayoutsState]); // console.log(currentBreakPoint ,layoutsState)

  var onBreakpointChange = React.useCallback(function (newBreakPoint, cols) {
    setCurrentBreakPoint(newBreakPoint);
    var rowHeight = 0;

    if (newBreakPoint === 'xxs') {
      rowHeight = 1;
    } else if (newBreakPoint === 'xs') {
      rowHeight = 1;
    } else if (newBreakPoint === 'sm') {
      rowHeight = 2;
    } else if (newBreakPoint === 'md') {
      rowHeight = 2;
    } else {
      rowHeight = 3;
    }

    setRowHeight(rowHeight);
  }, []);
  var removeWidget = React.useCallback(function (widget) {
    if (typeof onRemoveWidget === 'function') {
      onRemoveWidget(widget);
    }
  }, [onRemoveWidget]);
  return React__default.createElement(ResponsiveReactGridLayout, {
    style: _objectSpread2({}, dashboardStyle, {
      background: backgroundColor
    }),
    className: "layout",
    layouts: layoutsState,
    preventCollision: preventCollision,
    containerPadding: [dashboardLeftPadding, dashboardTopPadding],
    margin: [widgetMarginLeftRight, widgetMarginTopBottom] // breakpoints={{ lg: 1200, md: 1000, sm: 800 ,xs:500 ,xss:0}}
    ,
    cols: {
      lg: MULTIPLIER * BREAKPOINTRATIOS.lg,
      md: MULTIPLIER * BREAKPOINTRATIOS.md,
      sm: MULTIPLIER * BREAKPOINTRATIOS.sm,
      xs: MULTIPLIER * BREAKPOINTRATIOS.xs,
      xxs: MULTIPLIER * BREAKPOINTRATIOS.xxs
    },
    rowHeight: rowHeight,
    autoSize: fixedHeight === 0,
    compactType: enableGravity ? leftGravity ? 'horizontal' : 'vertical' : null,
    onLayoutChange: onLayoutChange,
    onBreakpointChange: onBreakpointChange // onWidthChange={onWidthChange}
    ,
    isDraggable: editable,
    isResizable: editable // isDroppable={true}
    // onDrag={itemDroped}

  }, widgets && widgets.map(function (widget) {
    var id = widget.id,
        Component = widget.Component,
        backgroundColor = widget.backgroundColor,
        refreshInterval = widget.refreshInterval,
        _widget$preferedX = widget.preferedX,
        preferedX = _widget$preferedX === void 0 ? 0 : _widget$preferedX,
        _widget$preferedY = widget.preferedY,
        preferedY = _widget$preferedY === void 0 ? 0 : _widget$preferedY,
        _widget$minWidth = widget.minWidth,
        minWidth = _widget$minWidth === void 0 ? MULTIPLIER : _widget$minWidth,
        _widget$maxWidth = widget.maxWidth,
        maxWidth = _widget$maxWidth === void 0 ? INFINITE : _widget$maxWidth,
        _widget$minHeight = widget.minHeight,
        minHeight = _widget$minHeight === void 0 ? MULTIPLIER : _widget$minHeight,
        _widget$maxHeight = widget.maxHeight,
        maxHeight = _widget$maxHeight === void 0 ? INFINITE : _widget$maxHeight;

    if (id && Component) {
      return React__default.createElement("div", {
        key: id,
        "data-grid": {
          x: preferedX,
          y: preferedY,
          w: minWidth || 1,
          h: minHeight || 1,
          minW: minWidth,
          maxW: maxWidth,
          minH: minHeight,
          maxH: maxHeight,
          "static": false,
          isDragabble: true,
          isResizable: true
        },
        className: "rdl-widget-container",
        style: {
          background: backgroundColor || widgetBackgroundColorGeneral,
          overflow: 'hidden'
        }
      }, editable && React__default.createElement("span", {
        className: "rdl-close",
        onClick: function onClick() {
          return removeWidget(widget);
        }
      }), React__default.createElement(Widget, {
        Component: Component,
        refreshInterval: refreshInterval
      }));
    } else {
      if (id) {
        throw Error("you missed to specify Component for widget - ".concat(id));
      } else {
        throw Error('you missed "id" for one of the Widget, so it can\'t be rendered ');
      }
    }
  }));
};

Dashboard.propTypes = {
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  layoutsState: PropTypes.object.isRequired,
  setLayoutsState: PropTypes.func.isRequired,
  dashboardStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  widgetBackgroundColorGeneral: PropTypes.string,
  editable: PropTypes.bool,
  onRemoveWidget: PropTypes.func,
  fixedHeight: PropTypes.number,
  leftGravity: PropTypes.bool,
  enableGravity: PropTypes.bool,
  widgetMarginLeftRight: PropTypes.number,
  widgetMarginTopBottom: PropTypes.number,
  dashboardLeftPadding: PropTypes.number,
  dashboardTopPadding: PropTypes.number,
  preventCollision: PropTypes.bool
};

var ResponsiveReactGridLayout$1 = reactGridLayout.WidthProvider(reactGridLayout.Responsive);

var DashboardWithWidgetMenu = function DashboardWithWidgetMenu(props) {
  var EditButton = props.EditButton,
      AddButton = props.AddButton,
      SaveButton = props.SaveButton,
      WidgetMenuContainer = props.WidgetMenuContainer,
      _props$widgetMenuStyl = props.widgetMenuStyle,
      widgetMenuStyle = _props$widgetMenuStyl === void 0 ? {} : _props$widgetMenuStyl,
      _props$initialWidgetI = props.initialWidgetIds,
      initialWidgetIds = _props$initialWidgetI === void 0 ? [] : _props$initialWidgetI,
      retrieveLayoutState = props.retrieveLayoutState,
      saveLayoutState = props.saveLayoutState,
      widgets = props.widgets,
      dashboardStyle = props.dashboardStyle,
      backgroundColor = props.backgroundColor,
      widgetBackgroundColorGeneral = props.widgetBackgroundColorGeneral,
      fixedHeight = props.fixedHeight,
      enableGravity = props.enableGravity,
      leftGravity = props.leftGravity,
      widgetMarginLeftRight = props.widgetMarginLeftRight,
      widgetMarginTopBottom = props.widgetMarginTopBottom,
      dashboardLeftPadding = props.dashboardLeftPadding,
      dashboardTopPadding = props.dashboardTopPadding,
      preventCollision = props.preventCollision; // const [onScreenWidgetIds, setOnScreenWidgetIds] = useState([])

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      visibleWidgets = _useState2[0],
      setVisibleWidgets = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      layouts = _useState4[0],
      setLayouts = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      editable = _useState6[0],
      setEditable = _useState6[1];

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      menuVisible = _useState8[0],
      setMenuVisible = _useState8[1];

  React.useEffect(function () {
    var savedLayouts = retrieveLayoutState(); // console.log(savedLayouts)

    if (savedLayouts && _typeof(savedLayouts) === 'object' && savedLayouts.sm) {
      setLayouts(savedLayouts);
      var widgetIdsFromStore = savedLayouts.sm.map(function (item) {
        return item.i;
      });
      setVisibleWidgets(widgets.filter(function (widget) {
        return widgetIdsFromStore.includes(widget.id);
      }));
    } else {
      if (initialWidgetIds.length === 0) setVisibleWidgets(widgets);else setVisibleWidgets(widgets.filter(function (widget) {
        return initialWidgetIds.includes(widget.id);
      }));
    } // only executes after mounting once
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  var onEditClick = React.useCallback(function () {
    setEditable(function (i) {
      return !i;
    });
  }, []);
  var onAddClick = React.useCallback(function () {
    setMenuVisible(true);
  }, []);
  var saveLayout = React.useCallback(function () {
    saveLayoutState(layouts);
    setEditable(false);
  }, [layouts, saveLayoutState]);
  var removeWidget = React.useCallback(function (widget) {
    setVisibleWidgets(function (widgets) {
      return widgets.filter(function (w) {
        return w.id !== widget.id;
      });
    });
  }, []);
  var getEditButton = React.useCallback(function () {
    if (EditButton) {
      try {
        return React__default.createElement(EditButton, {
          onClick: onEditClick
        });
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red");
      }
    }

    return React__default.createElement("button", {
      onClick: onEditClick
    }, " Edit ");
  }, [EditButton, onEditClick]);
  var getAddButton = React.useCallback(function () {
    if (AddButton) {
      try {
        return React__default.createElement(AddButton, null); // eslint-disable-next-line no-unreachable
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red");
      }
    }

    return React__default.createElement("button", {
      onClick: onAddClick
    }, " Add ");
  }, [AddButton, onAddClick]);
  var getSaveButton = React.useCallback(function () {
    if (SaveButton) {
      try {
        return React__default.createElement(SaveButton, {
          onClick: saveLayout
        });
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'SaveButton' \n" + e, "color: red");
      }
    }

    return React__default.createElement("button", {
      onClick: saveLayout
    }, " Save ");
  }, [SaveButton, saveLayout]);
  var getWidgetMenu = React.useCallback(function () {
    return React__default.createElement(ResponsiveReactGridLayout$1, {
      style: _objectSpread2({}, widgetMenuStyle, {
        display: 'block'
      }),
      breakpoints: {
        lg: 1200,
        md: 600,
        sm: 0
      },
      cols: {
        lg: 12,
        md: 8,
        sm: 4
      },
      layouts: {},
      rowHeight: 50,
      compactType: "horizontal" // isDraggable={false}
      ,
      isResizable: false
    }, widgets && widgets.filter(function (widget) {
      return !visibleWidgets.map(function (w) {
        return w.id;
      }).includes(widget.id);
    }).map(function (widget) {
      if (widget.id) {
        return React__default.createElement("div", {
          key: widget.id,
          "data-grid": {
            x: 12,
            y: 0,
            w: 1,
            h: 1,
            minW: 0,
            maxW: INFINITE,
            minH: 0,
            maxH: INFINITE
          },
          style: {
            background: 'gray'
          },
          onClick: function onClick() {
            return setVisibleWidgets(function (widgets) {
              return widgets.concat(widget);
            });
          }
        }, widget.id);
      } else {
        throw Error('you missed "id" for one of the Widget, so it can\'t be rendered');
      }
    }));
  }, [visibleWidgets, widgetMenuStyle, widgets]);
  var getWidgetMenuContainer = React.useCallback(function () {
    if (WidgetMenuContainer) {
      try {
        return React__default.createElement(WidgetMenuContainer, {
          widgetMenu: function widgetMenu() {
            return getWidgetMenu();
          }
        }); // eslint-disable-next-line no-unreachable
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'WidgetMenuContainer' \n" + e, "color: red");
      }
    }

    return menuVisible ? getWidgetMenu() : React__default.createElement(React__default.Fragment, null);
  }, [WidgetMenuContainer, getWidgetMenu, menuVisible]);
  return React__default.createElement("div", {
    style: {}
  }, React__default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, !editable && getEditButton(), editable && getAddButton(), editable && getSaveButton()), getWidgetMenuContainer(), React__default.createElement(Dashboard, {
    widgets: visibleWidgets,
    layoutsState: layouts,
    setLayoutsState: setLayouts,
    editable: editable,
    onRemoveWidget: removeWidget,
    dashboardStyle: dashboardStyle,
    backgroundColor: backgroundColor,
    widgetBackgroundColorGeneral: widgetBackgroundColorGeneral,
    fixedHeight: fixedHeight,
    enableGravity: enableGravity,
    leftGravity: leftGravity,
    widgetMarginLeftRight: widgetMarginLeftRight,
    widgetMarginTopBottom: widgetMarginTopBottom,
    dashboardLeftPadding: dashboardLeftPadding,
    dashboardTopPadding: dashboardTopPadding,
    preventCollision: preventCollision
  }));
};

DashboardWithWidgetMenu.prototype = {
  EditButton: PropTypes.func,
  AddButton: PropTypes.func,
  SaveButton: PropTypes.func,
  WidgetMenuContainer: PropTypes.func,
  widgetMenuStyle: PropTypes.object,
  initialWidgetIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  retrieveLayoutState: PropTypes.func.isRequired,
  saveLayoutState: PropTypes.func.isRequired,
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  dashboardStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  widgetBackgroundColorGeneral: PropTypes.string,
  fixedHeight: PropTypes.number,
  enableGravity: PropTypes.bool,
  leftGravity: PropTypes.bool,
  widgetMarginLeftRight: PropTypes.number,
  widgetMarginTopBottom: PropTypes.number,
  dashboardLeftPadding: PropTypes.number,
  dashboardTopPadding: PropTypes.number,
  preventCollision: PropTypes.bool
};

var getFromLocalStorage = function getFromLocalStorage(key) {
  var ls = {};

  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem(key)) || {};
    } catch (e) {
      /*Ignore*/
    }
  }

  return ls;
};

var saveToLocalStorage = function saveToLocalStorage(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(key, JSON.stringify(value));
  }
};

var DashboardWithEditKey = function DashboardWithEditKey(props) {
  var id = props.id,
      EditButton = props.EditButton,
      retrieveLayoutState = props.retrieveLayoutState,
      saveLayoutState = props.saveLayoutState,
      widgets = props.widgets,
      dashboardStyle = props.dashboardStyle,
      backgroundColor = props.backgroundColor,
      widgetBackgroundColorGeneral = props.widgetBackgroundColorGeneral,
      fixedHeight = props.fixedHeight,
      enableGravity = props.enableGravity,
      leftGravity = props.leftGravity,
      widgetMarginLeftRight = props.widgetMarginLeftRight,
      widgetMarginTopBottom = props.widgetMarginTopBottom,
      dashboardLeftPadding = props.dashboardLeftPadding,
      dashboardTopPadding = props.dashboardTopPadding,
      preventCollision = props.preventCollision;

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      layouts = _useState2[0],
      setLayouts = _useState2[1];

  React.useEffect(function () {
    var savedLayouts = retrieveLayoutState && saveToLocalStorage ? retrieveLayoutState(id) : getFromLocalStorage(id);
    if (savedLayouts && _typeof(savedLayouts) === 'object' && savedLayouts.sm) setLayouts(savedLayouts); // only executes after mounting once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editable = _useState4[0],
      setEditable = _useState4[1];

  var onEditClick = function onEditClick() {
    if (editable) retrieveLayoutState && saveLayoutState ? saveLayoutState(id, layouts) : saveToLocalStorage(id, layouts);
    setEditable(function (i) {
      return !i;
    });
  };

  var getEditButton = function getEditButton() {
    if (EditButton) {
      try {
        return React__default.createElement(EditButton, {
          onClick: onEditClick
        });
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red");
      }
    }

    return React__default.createElement("button", {
      onClick: onEditClick
    }, " Edit ");
  };

  return React__default.createElement("div", null, React__default.createElement("span", null, getEditButton()), React__default.createElement(Dashboard, {
    widgets: widgets,
    layoutsState: layouts,
    setLayoutsState: setLayouts,
    editable: editable,
    dashboardStyle: dashboardStyle,
    backgroundColor: backgroundColor,
    widgetBackgroundColorGeneral: widgetBackgroundColorGeneral,
    fixedHeight: fixedHeight,
    enableGravity: enableGravity,
    leftGravity: leftGravity,
    widgetMarginLeftRight: widgetMarginLeftRight,
    widgetMarginTopBottom: widgetMarginTopBottom,
    dashboardLeftPadding: dashboardLeftPadding,
    dashboardTopPadding: dashboardTopPadding,
    preventCollision: preventCollision
  }));
};

DashboardWithEditKey.propTypes = {
  id: PropTypes.string.isRequired,
  EditButton: PropTypes.func,
  retrieveLayoutState: PropTypes.func,
  saveLayoutState: PropTypes.func,
  widgets: PropTypes.arrayOf(PropTypes.object).isRequired,
  dashboardStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  widgetBackgroundColorGeneral: PropTypes.string,
  fixedHeight: PropTypes.number,
  enableGravity: PropTypes.bool,
  leftGravity: PropTypes.bool,
  widgetMarginLeftRight: PropTypes.number,
  widgetMarginTopBottom: PropTypes.number,
  dashboardLeftPadding: PropTypes.number,
  dashboardTopPadding: PropTypes.number,
  preventCollision: PropTypes.bool
};

exports.Dashboard = Dashboard;
exports.DashboardWithEditKey = DashboardWithEditKey;
exports.DashboardWithWidgetMenu = DashboardWithWidgetMenu;
//# sourceMappingURL=index.js.map
