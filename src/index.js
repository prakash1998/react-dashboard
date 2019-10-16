import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Button, Drawer } from 'antd'
import 'antd/dist/antd.css';

// import {Dashboard} from './lib'
import { Dashboard, DashboardWithWidgetMenu, DashboardWithEditKey } from './lib'
import { Comp1Widget } from './widget1'
import { Comp2Widget } from './widget2'
import { ClockWidget } from './clock'
import { antdTableWidget } from './antdTableWidget'


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

const App = () => {


    const [drawerVisible, setDrawerVisible] = useState(false)

    return (
        <div>
            <DashboardWithEditKey
                id='dashboard'
                // width={1200}
                // height={500}
                // fixedHeight={false}
                gridCellSize={100}
                widgets={[Comp1Widget, Comp2Widget, ClockWidget]}
                initialWidgetIds={["item1"]}
                backgroundColor='pink'
                widgetBackgroundColorGeneral='orange'
                enableGravity
                // saveLayoutState={(layout) => saveToLocalStorage('dashboard1', layout)}
                // retrieveLayoutState={() => getFromLocalStorage('dashboard1')}
                EditButton={({ onClick }) => <Button onClick={() => { onClick(); setDrawerVisible(true) }} type="primary">Edit</Button>}
            />

            {/* <DashboardWithWidgetMenu
                // width={1200}
                // height={500}
                // fixedHeight={false}
                // gridCellSize={100}
                widgets={[Comp1Widget, Comp2Widget, ClockWidget , antdTableWidget]}
                initialWidgetIds={["item1"]}
                backgroundColor='pink'
                widgetBackgroundColorGeneral='orange'
                enableGravity
                saveLayoutState={(layout) => saveToLocalStorage('dashboard1', layout)}
                retrieveLayoutState={() => getFromLocalStorage('dashboard1')}
                EditButton={({ onClick }) => <Button onClick={() => onClick()} type="primary">Edit</Button>}
                AddButton={() => <Button onClick={() => setDrawerVisible(true)} type="primary">Add</Button>}
                SaveButton={({ onClick }) => <Button onClick={() => {onClick();setDrawerVisible(false)}} type="danger">Save</Button>}
                WidgetMenuContainer={({widgetMenu}) =>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable
                        onClose={() => setDrawerVisible(false)}
                        visible={drawerVisible}
                        width={520}
                    >
                        {widgetMenu()}
                    </Drawer>}
            /> */}
            {/* <Dashboard
                // width={1200}
                // height={500}
                // fixedHeight={100}
                gridCellSize={100}
                widgets={[Comp1Widget, Comp2Widget, ClockWidget]}
                initialWidgetIds={["item1"]}
                backgroundColor='pink'
                widgetBackgroundColorGeneral='orange'
                saveLayoutState={(layout) => saveToLocalStorage('dashboard2', layout)}
                retrieveLayoutState={() => getFromLocalStorage('dashboard2')}
            /> */}
        </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));
