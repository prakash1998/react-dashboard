import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import Dashboard from './dashboard'

const getFromLocalStorage = (key) => {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem(key)) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls;
}

const saveToLocalStorage = (key, value) => {
    if (global.localStorage) {
        global.localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }
}

const DashboardWithEditKey = (props) => {

    const {
        id,
        EditButton,
        retrieveLayoutState,
        saveLayoutState,
        widgets,
        dashboardStyle,
        backgroundColor,
        widgetBackgroundColorGeneral,
        fixedHeight,
        enableGravity,
        leftGravity,
        widgetMarginLeftRight,
        widgetMarginTopBottom,
        dashboardLeftPadding,
        dashboardTopPadding,
        preventCollision,
    } = props;

    const [layouts, setLayouts] = useState({})

    useEffect(() => {
        const savedLayouts = retrieveLayoutState && saveToLocalStorage ? retrieveLayoutState(id) : getFromLocalStorage(id);
        if (savedLayouts && typeof savedLayouts === 'object' && savedLayouts.sm)
            setLayouts(savedLayouts)
        // only executes after mounting once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [editable, setEditable] = useState(false)

    const onEditClick = () => {
        if (editable)
            retrieveLayoutState && saveLayoutState ? saveLayoutState(id, layouts) : saveToLocalStorage(id, layouts)
        setEditable(i => !i)
    }

    const getEditButton = () => {
        if (EditButton) {
            try {
                return <EditButton onClick={onEditClick} />
            } catch (e) {
                console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red")
            }
        }
        return <button onClick={onEditClick} > Edit </button>
    }

    return (
        <div>
            <span>
                {getEditButton()}
            </span>
            <Dashboard
                widgets={widgets}
                layoutsState={layouts}
                setLayoutsState={setLayouts}
                editable={editable}
                dashboardStyle={dashboardStyle}
                backgroundColor={backgroundColor}
                widgetBackgroundColorGeneral={widgetBackgroundColorGeneral}
                fixedHeight={fixedHeight}
                enableGravity={enableGravity}
                leftGravity={leftGravity}
                widgetMarginLeftRight={widgetMarginLeftRight}
                widgetMarginTopBottom={widgetMarginTopBottom}
                dashboardLeftPadding={dashboardLeftPadding}
                dashboardTopPadding={dashboardTopPadding}
                preventCollision={preventCollision}
            />
        </div>
    )
}

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
    preventCollision: PropTypes.bool,
}

export default DashboardWithEditKey