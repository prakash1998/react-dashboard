import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from "react-grid-layout";
import Dashboard from './dashboard'
import './css/styles.css'
import { INFINITE } from './constants'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardWithWidgetMenu = (props) => {

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
        preventCollision = false,
    } = props

    // const [onScreenWidgetIds, setOnScreenWidgetIds] = useState([])
    const [visibleWidgets, setVisibleWidgets] = useState([])
    const [layouts, setLayouts] = useState({})
    const [editable, setEditable] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        const savedLayouts = retrieveLayoutState();
        // console.log(savedLayouts)
        if (savedLayouts && typeof savedLayouts === 'object' && savedLayouts.sm) {
            setLayouts(savedLayouts)
            const widgetIdsFromStore = savedLayouts.sm.map(item => item.i);
            setVisibleWidgets(widgets.filter(widget => widgetIdsFromStore.includes(widget.id)))
        }
        else
            setVisibleWidgets(widgets.filter(widget => initialWidgetIds.includes(widget.id)))
    // only executes after mounting once
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const onEditClick = useCallback(() => {
        setEditable(i => !i)
    },[])

    const onAddClick = useCallback(() => {
        setMenuVisible(true)
    },[])

    const saveLayout = useCallback(() => {
        saveLayoutState(layouts);
        setEditable(false)
    },[layouts, saveLayoutState])

    const removeWidget = useCallback((widget) => {
        setVisibleWidgets(widgets => widgets.filter(w => w.id !== widget.id))
    },[])

    const getEditButton = useCallback(() => {
        if (EditButton) {
            try {
                return <EditButton onClick={onEditClick} />
            } catch (e) {
                console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red")
            }
        }
        return <button onClick={onEditClick} > Edit </button>
    },[EditButton, onEditClick])

    const getAddButton = useCallback(() => {
        if (AddButton) {
            try {
                return <AddButton />
            // eslint-disable-next-line no-unreachable
            } catch (e) {
                console.log("%c Error : Something wrong with passed 'EditButton' \n" + e, "color: red")
            }
        }
        return <button onClick={onAddClick} > Add </button>
    },[AddButton, onAddClick])

    const getSaveButton = useCallback(() => {
        if (SaveButton) {
            try {
                return <SaveButton onClick={saveLayout} />
            } catch (e) {
                console.log("%c Error : Something wrong with passed 'SaveButton' \n" + e, "color: red")
            }
        }
        return <button onClick={saveLayout} > Save </button>
    },[SaveButton, saveLayout])

    const getWidgetMenu = useCallback(() => {

        return <ResponsiveReactGridLayout
            style={{ ...widgetMenuStyle, display: 'block', }}
            breakpoints={{ lg: 1200, md: 600, sm: 0 }}
            cols={{ lg: 12, md: 8, sm: 4 }}
            layouts={{}}
            rowHeight={50}
            compactType='horizontal'
            // isDraggable={false}
            isResizable={false}
        >
            {
                widgets && widgets.filter(widget => !visibleWidgets.map(w => w.id).includes(widget.id))
                    .map(widget => {
                        if (widget.id) {
                            return (<div
                                key={widget.id}
                                data-grid={{
                                    x: 12,
                                    y: 0,
                                    w: 1,
                                    h: 1,
                                    minW: 0,
                                    maxW: INFINITE,
                                    minH: 0,
                                    maxH: INFINITE,
                                }}

                                style={{
                                    background: 'gray',
                                }}
                                onClick={() => setVisibleWidgets(widgets => widgets.concat(widget))} >
                                {widget.id}
                            </div>)
                        } else {
                            throw Error('you missed "id" for one of the Widget, so it can\'t be rendered')
                        }

                    })
            }
        </ResponsiveReactGridLayout>
    },[visibleWidgets, widgetMenuStyle, widgets])

    const getWidgetMenuContainer = useCallback(() => {
        if (WidgetMenuContainer) {
            try {
                return <WidgetMenuContainer widgetMenu={() => getWidgetMenu()} />
                // eslint-disable-next-line no-unreachable
            } catch (e) {
                console.log("%c Error : Something wrong with passed 'WidgetMenuContainer' \n" + e, "color: red")
            }
        }
        return menuVisible ? getWidgetMenu() : <></>
    },[WidgetMenuContainer, getWidgetMenu, menuVisible])


    return (
        <div style={{}} >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {/* <button onClick={onEditClick} > Edit </button> */}
                {!editable && getEditButton()}
                {editable && getAddButton()}
                {editable && getSaveButton()}
            </div>

            {getWidgetMenuContainer()}

            <Dashboard
                widgets={visibleWidgets}
                layoutsState={layouts}
                setLayoutsState={setLayouts}
                editable={editable}
                onRemoveWidget={removeWidget}
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
    preventCollision: PropTypes.bool,
}

export default DashboardWithWidgetMenu