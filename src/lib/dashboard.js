import React, { useState, useEffect, useRef } from 'react'
// import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
import './css/styles.css'

import Widget from './widget'

const INFINITE = 9999;
const ResponsiveReactGridLayout = WidthProvider(Responsive);


const Dashboard = (props) => {

    const {
        // id,
        widgets,
        initialWidgetIds,
        retrieveLayoutState,
        saveLayoutState,
        style,
        backgroundColor,
        widgetBackgroundColorGeneral,
    } = props



    const {
        // height = 500,
        // width = 1200,
        fixedHeight = 0,
        gridCellSize = 100,
        // draggableCancel = 1,
        // draggableHandle = 1,
        leftGravity = false,
        enableGravity = false,
        widgetMarginLeftRight = 10,
        widgetMarginTopBottom = 10,
        dashboardLeftPadding = 10,
        dashboardTopPadding = 10,
        // droppingItem = 1,
        // isDraggable = 1,
        // isResizable = 1,
        // useCSSTransforms = 1,
        preventCollision = false,
        // isDroppable = 1,
        // onLayoutChange = 1,
        // ItemCallback = 1,
        // onDragStart = 1,
        // onDrag = 1,
        // onDragStop = 1,
        // onResizeStart = 1,
        // onResize = 1,
        // onResizeStop = 1,
        // onDrop = 1,
    } = props;

    const [onScreenWidgetIds, setOnScreenWidgetIds] = useState([])
    const [layouts, setLayouts] = useState({})
    const [currentBreakPoint, setCurrentBreakPoint] = useState(undefined)
    const [rowHeight, setRowHeight] = useState(1)
    // const [width, setWidth] = useState(1200)
    // const [currentLayout , setCurrentLayout] = useState([])
    const [freezeLayout, setFreezeLayout] = useState(true)
    const tempLayout = useRef([])

    const onLayoutChange = (layout, layouts) => {
        setLayouts(layouts)
    }

    const saveLayout = () => {
        onEditClick()
        saveLayoutState(layouts);
    }

    const onBreakpointChange = (newBreakPoint, cols) => {
        setCurrentBreakPoint(newBreakPoint)

        let rowHeight = 0;
        if (cols === 40) {
            rowHeight = 5
        } else if (cols === 80) {
            rowHeight = 3
        } else {
            rowHeight = 1
        }
        setRowHeight(rowHeight)

        // console.log(width/cols)
        // setRowHeight(width / cols)
    }

    const onWidthChange = (newWidth) => {
        // console.log('here')
        // console.log(rowHeight)
        // setWidth(oldWidth => {
        //     (newWidth > oldWidth) ? setRowHeight( r => r + 1) : setRowHeight( r => r - 1)
        //     return newWidth
        // })
    }

    useEffect(() => {
        const savedLayouts = retrieveLayoutState();
        if (typeof savedLayouts === 'object')
            setLayouts(savedLayouts)
        if (currentBreakPoint && savedLayouts[currentBreakPoint] && savedLayouts[currentBreakPoint].length > 0)
            setOnScreenWidgetIds(savedLayouts[currentBreakPoint].map(item => item.i))
        else
            setOnScreenWidgetIds(initialWidgetIds)
    }, [currentBreakPoint])

    // console.log(layouts)
    // console.log(onScreenWidgetIds)
    // console.log(currentBreakPoint)
    const onEditClick = () => {
        setFreezeLayout(i => !i)
    }

    const itemDroped = elemParams => {
        console.log(`Element parameters: ${JSON.stringify(elemParams)}`);
    };

    // console.log(layouts)
    return (<div style={{ backgroundColor: "red" }} >
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <button onClick={onEditClick} > Edit </button>
            <button onClick={saveLayout} > Save </button>
            {/* <div> {
                widgets && widgets.filter(widget => !onScreenWidgetIds.includes(widget.id))
                    .map(widget => < ul key={widget.id}
                        onClick={() => setOnScreenWidgetIds(ids => ids.concat(widget.id))} > {widget.id} </ul>)
            }
            </div> */}
        </div>
        <ResponsiveReactGridLayout
            breakpoints={{ lg: 1200, md: 600, sm: 0 }}
            cols={{ lg: 12, md: 8, sm: 4 }}
            layouts={{}}
            rowHeight={50}
            compactType='horizontal'
            // isDraggable={false}
            isResizable={false}
        >
            {
                widgets && widgets.filter(widget => !onScreenWidgetIds.includes(widget.id))
                    .map(widget => <div
                        key={widget.id}
                        data-grid={{
                            x: 12,
                            y: 0,
                            w:  1,
                            h:  1,
                            minW: 0,
                            maxW: INFINITE,
                            minH: 0,
                            maxH: INFINITE,
                        }}
                    
                        style={{
                            background: 'gray',
                        }}
                        onClick={() => setOnScreenWidgetIds(ids => ids.concat(widget.id))} > {widget.id} </div>)
            }
        </ResponsiveReactGridLayout>



        <ResponsiveReactGridLayout
            style={{ ...style, background: backgroundColor }}
            className="layout"
            layouts={layouts}
            preventCollision={preventCollision}
            containerPadding={[dashboardLeftPadding, dashboardTopPadding]}
            margin={[widgetMarginLeftRight, widgetMarginTopBottom]}
            breakpoints={{ lg: 1200, md: 600, sm: 0 }}
            cols={{ lg: 120, md: 80, sm: 40 }}
            rowHeight={rowHeight}
            autoSize={fixedHeight === 0}
            verticalCompact={enableGravity}
            compactType={leftGravity ? 'horizontal' : 'vertical'}
            onLayoutChange={onLayoutChange}
            onBreakpointChange={onBreakpointChange}
            onWidthChange={onWidthChange}
            isDraggable={!freezeLayout}
            isResizable={!freezeLayout}
            isDroppable={true}
            onDrag={itemDroped}
        >
            {
                widgets && widgets.filter(widget => onScreenWidgetIds.includes(widget.id))
                    .map(widget => {
                        const {
                            id,
                            Component,
                            backgroundColor,
                            refreshInterval,
                            preferedX = 0,
                            preferedY = 0,
                            minWidth = 10,
                            maxWidth = INFINITE,
                            minHeight = 10,
                            maxHeight = INFINITE,
                        } = widget
                        // console.log(widget);
                        return (
                            <div key={id}
                                data-grid={{
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
                                    isResizable: true,
                                }}

                                style={{
                                    background: backgroundColor || widgetBackgroundColorGeneral,
                                }}
                            >
                                {freezeLayout ? <></> : <span
                                    className='close'
                                    droppable='abc'
                                    onClick={() => setOnScreenWidgetIds(ids => ids.filter(wi => wi !== id))}></span>}
                                <Widget Component={Component} refreshInterval={refreshInterval} />
                            </div>)
                    })
            }

            {/* </GridLayout> */}
        </ResponsiveReactGridLayout>
        <span className="droppable-element" draggable={true} unselectable="on">
            Droppable Element
        </span>

    </div>
    )

}

export default Dashboard