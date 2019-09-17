import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import './css/styles.css';
import Widget from './widget';
const INFINITE = 9999;

const getFromLocalStorage = key => {
  let ls = {};

  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem(key)) || [];
    } catch (e) {
      /*Ignore*/
    }
  }

  return ls;
};

const saveToLocalStorage = (key, value) => {
  if (global.localStorage) {
    global.localStorage.setItem(key, JSON.stringify(value));
  }
}; // const backgroundStyleBuilder = (backgroundColor , backgroundImage) => {
// }


const Dashboard = props => {
  const {
    id,
    widgets,
    initialWidgetIds,
    backgroundColor,
    widgetBackgroundColor
  } = props;
  const {
    height = 500,
    width = 1200,
    fixedSize = false,
    gridCellSize = 100,
    draggableCancel = 1,
    draggableHandle = 1,
    verticalCompact = 1,
    compactType = 1,
    //   layout = 1,
    margin = 1,
    containerPadding = 1,
    droppingItem = 1,
    isDraggable = 1,
    isResizable = 1,
    useCSSTransforms = 1,
    preventCollision = 1,
    isDroppable = 1,
    //   onLayoutChange = 1,
    ItemCallback = 1,
    onDragStart = 1,
    onDrag = 1,
    onDragStop = 1,
    onResizeStart = 1,
    onResize = 1,
    onResizeStop = 1,
    onDrop = 1
  } = props; // console.log( 'created ', createLayoutFromWidgets(widgets));

  const [onScreenWidgetIds, setOnScreenWidgetIds] = useState([]);
  const [layout, setLayout] = useState([]); // console.log(layout)

  const [freezeLayout, setFreezeLayout] = useState(true);

  const onLayoutChange = layout => {
    saveToLocalStorage(id, layout);
  };

  useEffect(() => {
    const savedLayout = getFromLocalStorage(id);
    setLayout(savedLayout);
    if (savedLayout.length > 0) setOnScreenWidgetIds(savedLayout.map(item => item.i));else setOnScreenWidgetIds(initialWidgetIds);
  }, []);

  const onEditClick = () => {
    console.log(freezeLayout);
    setFreezeLayout(i => !i);
  };

  return React.createElement("div", {
    style: {
      height: height + 50,
      backgroundColor: "red"
    }
  }, React.createElement(GridLayout, {
    style: {
      background: backgroundColor
    },
    className: "layout",
    layout: layout,
    cols: width / gridCellSize,
    rowHeight: gridCellSize,
    width: width,
    autoSize: !fixedSize,
    onLayoutChange: onLayoutChange,
    isDraggable: !freezeLayout,
    isResizable: !freezeLayout
  }, widgets && widgets.filter(widget => onScreenWidgetIds.includes(widget.id)).map(widget => {
    const {
      id,
      Component,
      backgroundColor,
      refreshInterval,
      preferedX = 0,
      preferedY = 0,
      minWidth = 1,
      maxWidth = INFINITE,
      minHeight = 1,
      maxHeight = INFINITE
    } = widget; // console.log(widget);

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
        background: backgroundColor || widgetBackgroundColor
      }
    }, freezeLayout ? React.createElement(React.Fragment, null) : React.createElement("span", {
      style: {
        position: 'fixed',
        right: 5
      },
      onClick: () => setOnScreenWidgetIds(ids => ids.filter(wi => wi !== id))
    }, "x"), React.createElement(Widget, {
      Component: Component,
      refreshInterval: refreshInterval
    }));
  })), React.createElement("div", null, " ", widgets && widgets.filter(widget => !onScreenWidgetIds.includes(widget.id)).map(widget => React.createElement("ul", {
    key: widget.id,
    onClick: () => setOnScreenWidgetIds(ids => ids.concat(widget.id))
  }, " ", widget.id, " "))), React.createElement("button", {
    onClick: onEditClick
  }, " Edit "));
};

export default Dashboard;