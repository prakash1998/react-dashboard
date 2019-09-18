import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './lib'
import { Comp1Widget } from './widget1'
import { Comp2Widget } from './widget2'
import { ClockWidget } from './clock'

const getFromLocalStorage = (key) => {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem(key)) || [];
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
    return (
        <div>
             <Dashboard
                // width={1200}
                // height={500}
                // fixedHeight={false}
                gridCellSize={100}
                widgets={[Comp1Widget, Comp2Widget, ClockWidget]}
                initialWidgetIds={["item1"]}
                backgroundColor='pink'
                widgetBackgroundColorGeneral='orange'
                enableGravity
                saveLayoutState={(layout) => saveToLocalStorage('dashboard1', layout)}
                retrieveLayoutState={() => getFromLocalStorage('dashboard1')}
            />
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
