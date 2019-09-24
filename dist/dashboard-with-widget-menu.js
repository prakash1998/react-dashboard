import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from "react-grid-layout";
import Dashboard from './dashboard';
import './css/styles.css';
import { INFINITE } from './constants';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardWithWidgetMenu = props => {
  const {
    EditButton,
    AddButton,
    SaveButton,
    WidgetMenuContainer,
    widgetMenuStyle = {},
    initialWidgetIds = [],
    retrieveLayoutState,
    saveLayoutState,
    widgets,
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

  const [visibleWidgets, setVisibleWidgets] = useState([]);
  const [layouts, setLayouts] = useState({});
  const [editable, setEditable] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    const savedLayouts = retrieveLayoutState(); // console.log(savedLayouts)

    if (typeof savedLayouts === 'object') setLayouts(savedLayouts);

    if (savedLayouts && Object.keys(savedLayouts).length > 0) {
      const widgetIdsFromStore = savedLayouts.sm.map(item => item.i);
      setVisibleWidgets(widgets.filter(widget => widgetIdsFromStore.includes(widget.id)));
    } else setVisibleWidgets(widgets.filter(widget => initialWidgetIds.includes(widget.id)));
  }, [initialWidgetIds, retrieveLayoutState, widgets]);

  const onEditClick = () => {
    setEditable(i => !i);
  };

  const onAddClick = () => {
    setMenuVisible(true);
  };

  const saveLayout = () => {
    // console.log(layouts)
    saveLayoutState(layouts);
    setEditable(false);
  };

  const removeWidget = widget => {
    setVisibleWidgets(widgets => widgets.filter(w => w.id !== widget.id));
  };

  const getEditButton = () => {
    if (EditButton) {
      try {
        return React.createElement(EditButton, {
          onClick: onEditClick
        });
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red");
      }
    }

    return React.createElement("button", {
      onClick: onEditClick
    }, " Edit ");
  };

  const getAddButton = () => {
    if (AddButton) {
      try {
        return React.createElement(AddButton, {
          onClick: onAddClick
        });
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red");
      }
    }

    return React.createElement("button", {
      onClick: onAddClick
    }, " Add ");
  };

  const getSaveButton = () => {
    if (SaveButton) {
      try {
        return React.createElement(SaveButton, {
          onClick: saveLayout
        });
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'SaveButton' \n" + e, "color: red");
      }
    }

    return React.createElement("button", {
      onClick: saveLayout
    }, " Save ");
  };

  const getWidgetMenuContainer = () => {
    if (WidgetMenuContainer) {
      try {
        return React.createElement(WidgetMenuContainer, {
          widgetMenu: () => getWidgetMenu()
        }); // eslint-disable-next-line no-unreachable
      } catch (e) {
        console.log("%c Error : Something wrong with passed 'WidgetMenuContainer' \n" + e, "color: red");
      }
    }

    return menuVisible ? getWidgetMenu() : React.createElement(React.Fragment, null);
  };

  const getWidgetMenu = () => {
    return React.createElement(ResponsiveReactGridLayout, {
      style: { ...widgetMenuStyle,
        display: 'block'
      },
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
    }, widgets && widgets.filter(widget => !visibleWidgets.map(w => w.id).includes(widget.id)).map(widget => {
      if (widget.id) {
        return React.createElement("div", {
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
          onClick: () => setVisibleWidgets(widgets => widgets.concat(widget))
        }, widget.id);
      } else {
        throw Error('you missed "id" for one of the Widget, so it can\'t be rendered');
      }
    }));
  };

  return React.createElement("div", {
    style: {}
  }, React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, !editable && getEditButton(), editable && getAddButton(), editable && getSaveButton()), getWidgetMenuContainer(), React.createElement(Dashboard, {
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
  initialWidgetIds: PropTypes.arrayOf(PropTypes.string),
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
export default DashboardWithWidgetMenu;