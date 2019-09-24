import React, { useState } from 'react'
import PropTypes from 'prop-types';

import Dashboard from './dashboard'

const DashboardWithEditKey = (props) => {

    const {
        EditButton ,
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
        preventCollision = false,
    } = props;

    const [editable, setEditable] = useState(false)

    const onEditClick = () => {
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
                layoutsState={{}}
                setLayoutsState={() => { }}
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
    EditButton : PropTypes.func,
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