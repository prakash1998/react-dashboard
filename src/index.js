import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './lib'
import { Comp1Widget } from './widget1'
import { Comp2Widget } from './widget2'
import { ClockWidget } from './clock'

const App = () => {
    return (
        <div>
            <Dashboard
                id={'dashboard1'}
                widgets={[Comp1Widget, Comp2Widget, ClockWidget]}
                initialWidgetIds={["item1"]}
                backgroundColor="yellow"
                widgetBackgroundColor = 'blue'
                />
        </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));
