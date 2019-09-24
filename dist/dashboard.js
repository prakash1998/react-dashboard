import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types'; // import GridLayout from 'react-grid-layout';

import { Responsive, WidthProvider } from "react-grid-layout";
import './css/styles.css';
import { INFINITE } from './constants';
import Widget from './widget';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const BREAKPOINTRATIOS = {
  lg: 12,
  md: 10,
  sm: 9,
  xs: 8,
  xxs: 6
};
const MULTIPLIER = 10;

const getLayoutForBreakPoint = (layout, layouts, currentBreakpoint, forBreakpoint) => {
  // console.log(forBreakpoint,currentBreakpoint,layout)
  // console.log('hrererere',layout)
  return layout.map(widget => {
    if (layouts[forBreakpoint] && layouts[forBreakpoint].filter(w => w.id === widget.id).length > 0) return widget; // console.log(widget)

    const {
      x,
      w
    } = widget;
    const ratio = BREAKPOINTRATIOS[currentBreakpoint] / BREAKPOINTRATIOS[forBreakpoint]; // console.log(ratio)
    // console.log('here')

    return { ...widget,
      x: Math.round(x * (1 / ratio)),
      w: Math.round(w * ratio)
    };
  });
};

const getLayoutsFromLayout = (layout, layouts, breakpoint) => {
  // console.log(layout)
  return {
    lg: getLayoutForBreakPoint(layout, layouts, breakpoint, 'lg'),
    md: getLayoutForBreakPoint(layout, layouts, breakpoint, 'md'),
    sm: getLayoutForBreakPoint(layout, layouts, breakpoint, 'sm'),
    xs: getLayoutForBreakPoint(layout, layouts, breakpoint, 'xs'),
    xxs: getLayoutForBreakPoint(layout, layouts, breakpoint, 'xxs')
  };
};

const Dashboard = props => {
  const {
    widgets,
    layoutsState,
    setLayoutsState,
    editable = false,
    onRemoveWidget,
    dashboardStyle = {},
    backgroundColor = 'pink',
    widgetBackgroundColorGeneral = 'orange',
    fixedHeight = 0,
    enableGravity = false,
    leftGravity = false,
    widgetMarginLeftRight = 10,
    widgetMarginTopBottom = 10,
    dashboardLeftPadding = 10,
    dashboardTopPadding = 10,
    preventCollision = false
  } = props; // const [onScreenWidgetIds, setOnScreenWidgetIds] = useState([])
  // const [layouts, setLayouts] = useState(layoutsState||{})

  const [currentBreakPoint, setCurrentBreakPoint] = useState('lg');
  const [rowHeight, setRowHeight] = useState(1); // const [width, setWidth] = useState(1200)
  // const [currentLayout , setCurrentLayout] = useState([])
  // const [freezeLayout, setFreezeLayout] = useState(true)
  // const tempLayout = useRef([])

  const onLayoutChange = useCallback((layout, layouts) => {
    // console.log(layout,layouts)
    // console.log(getLayoutsFromLayout(layout,currentBreakPoint))
    if (layout && currentBreakPoint && layouts) setLayoutsState(getLayoutsFromLayout(layout, layouts, currentBreakPoint));
  }, [currentBreakPoint, setLayoutsState]); // console.log(currentBreakPoint ,layoutsState)

  const onBreakpointChange = useCallback((newBreakPoint, cols) => {
    setCurrentBreakPoint(newBreakPoint);
    let rowHeight = 0;

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
  const removeWidget = useCallback(widget => {
    if (typeof onRemoveWidget === 'function') onRemoveWidget(widget);
  }, [onRemoveWidget]);
  return React.createElement(ResponsiveReactGridLayout, {
    style: { ...dashboardStyle,
      background: backgroundColor
    },
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

  }, widgets && widgets.map(widget => {
    const {
      id,
      Component,
      backgroundColor,
      refreshInterval,
      preferedX = 0,
      preferedY = 0,
      minWidth = MULTIPLIER,
      maxWidth = INFINITE,
      minHeight = MULTIPLIER,
      maxHeight = INFINITE
    } = widget;

    if (id && Component) {
      return React.createElement("div", {
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
          static: false,
          isDragabble: true,
          isResizable: true
        },
        style: {
          background: backgroundColor || widgetBackgroundColorGeneral
        }
      }, editable ? React.createElement("span", {
        className: "close",
        droppable: "abc",
        onClick: () => removeWidget(widget)
      }) : React.createElement(React.Fragment, null), React.createElement(Widget, {
        Component: Component,
        refreshInterval: refreshInterval
      }));
    } else {
      if (id) throw Error(`you missed to specify component for widget - ${id}`);else throw Error('you missed "id" for one of the Widget, so it can\'t be rendered ');
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
export default Dashboard;