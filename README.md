# simple react dashboard
A library to create dashboard with widgets.(under development)

## Installation
Install the [react-dashboard-lib](https://www.npmjs.com/package/react-dashboard-lib) using [npm](https://www.npmjs.com/):

```bash
npm install react-dashboard-lib
```

## Usage
You can use this library when you want to create dashboard for your
application.
Widgets or Components on Dashboard are fully resizable and their positions
can be easily set by your user.

### Used Libraries
[React-Grid-Layout](https://github.com/STRML/react-grid-layout) - for resizable & draggable container

## Features

* 100% React - no jQuery
* Compatible with server-rendered apps
* Dashboard with Draggable and Resizable widgets
* Configurable gravity : top , bottom , off
* Dashboard with fixed number of adjustable widgets
* Preserve state of dashboard anywhere you want
* Dashboard with widgets menu for add/remove functionality
* Responsive Dashboard
* Grid Items placed using CSS Transforms


### Available Dashboard Types
1)	[DashboardWithEditKey](#DashboardWithEditKey) - In this type, use can adjust the widgets passed by you 
	as per his/her choice. you can persist state anywhere you want by passing functions
2)	[DashboardWithWidgetMenu](#DashboardWithWidgetMenu) - Here, you can provide user set of widgets, from 
	which user can select and configure some/all widgets on dashboard as per need.
3)	[FloatingDashboard](#FloatingDashboard){Comming Soon...} - This dashboard is like assistive touch for
	your application, using which you can provide dashboard with floting icon.
4)	[MultiDashboard](#MultiDashboard) - It's combo of dashboard container, In which user can create as many
	dashboards, he/she wants using provided widgets.
5)	[Dashboard](#Dashboard) - It is the base component used by all other dashboards, you can use it, if you
	want to create your own custom dashboard
	
### Unit Methodology
- For shake of simplicity and responsiveness, i have used custom unit instead of pixel
- In code, there is constant named MULTIPLIER, which is used to derive partition of dashboard.
	ex. MULTIPLIER = 10 means, dashboard board have 100 columns in large view, and it will decrease 
		to 90,80,70,60 as screen size decreases.
- you can check value of MULTIPLIER in code, for now it is fixed.
- you need to give all properties to widgets using this unit method.
	ex. if you want to set minimum width of widget to feel 50% dashboard then you need to pass 50 as minWidth.
- It is like passing percentage value with respect to dashboard. dashboard will manage its propertiy changes 
	as per screens size changes.
- Height of the compnent is also relative to the width, so you need to use same units for that.
	

## How to create Widgets
-	It's as simple as fitting little legos on one giant lego(dashboard)
-	You can use any _ component as a widget by just specifying some properties.
- 	Let assume You Have Component named 'Clock',
	you just need to create an object which have following properties :
```js
const ClockWidget = {
		  id : 'clock', 
		  Component : Clock, 
		}
```
	and Hurraa!!! ,you have just created 'Clock' widget , ready to use in dashboard.
	
## Available properties for Widget
- Currently, Widget supports the following properties (suggest more properties by raising issue or by pull request):
```js

// unique identifier for widget ,
// if you'll repeat id then components with same id will overlap each-other
// you can create widgets using same component with different ids
id : string // Required

// if you want to pass parameters to your component, for some special behaviour,
// you can just wrap it inside function like,. () => <Clock digital />
// It is useful when you want to create different widgets from one component based
// on passed parameters
Component : object // Required

// background color of widget container (In case of transparancy or underflow)
// default = no-color/transparant
backgroundColor : string

//  It is interval by which widget will get refreshed by dashboard.
//	You need to use [refreshHook](#refreshHook) inside your component for using this feature
refreshInterval = number (in milli-seconds / 10e-3 seconds )

```

- following properties are in terms of [custom unit metrix](#Unit-Methodology) used by dashboard (not in pixels)
```js

// as name says, prefered x position from left
// default = 0 
preferedX = number (units*)

// prefered y position from top
// default = 0 
preferedY = number (units*)

// minimum width of the widget
// default = MULTIPLIER (**)
minWidth = number (units*)

// maximum width of the widget
// default = INFINITE (**)
maxWidth = number (units*)

// minimum height of the widget
// default = MULTIPLIER (**)
minHeight = number (units*)

// maximum height of the widget
// default = INFINITE (**)
maxHeight = number (units*)

```
-	\* :  in [units](#Unit-Methodology)
-	** : for more info, take a look at [Unit Methodology](#Unit-Methodology) section 

- You can see Code Samples for widget on following links:
- [Clock.js](https://github.com/prakash1998/react-dashboard/blob/master/src/clock.js)
- [demo.js](https://github.com/prakash1998/react-dashboard/blob/master/src/widget1.js)
- [antdTableWidget.js](https://github.com/prakash1998/react-dashboard/blob/master/src/antdTableWidget.js)

### Common properties for all dashboards 
- this are the properties either essential for creating dashboard or related to styling of the dashboard
- you can pass this properties as props to any of the dashboard available

```js
// array of widgets( take a look at create widget section )
widgets = array of object // Required

// css for dashboard
// default = {}
dashboardStyle = object

// background color for css
// default = 'pink'
backgroundColor = string 

// background color for widget container
// default = ''
widgetBackgroundColorGeneral = string

// you can specify fixed Height for dashboard
// default = 0 means adaptive height
// under development
fixedHeight = number

// This flag is for gravity of dashboard 
// default = false , means no gravity - widgets will float on dashboard
// gravity defines widgets flow direction  
// default = false
enableGravity = number,

// you can specify flow direction here
// default = false , means widgets will flow in top direction
// if true widget will flow in left to right direction
// default = false
leftGravity = boolean

// following are margins and paddings ( in pixels ) for dashboard and widgets
// default = 10px (for all)
widgetMarginLeftRight = number
widgetMarginTopBottom = number
dashboardLeftPadding = number
dashboardTopPadding = number

// this property refers to behaviour of widgets when user drags widget and it passes through 
// another widget, true means other widgets will not move for create space for holded widget
// default = false
preventCollision = boolean

```

## DashboardWithEditKey
- In this type, you will get dashboard with edit button
- User can edit dashboard state, it will be stored/retrieved from storage specified by passed function

-DashboardWithEditKey has following properties to configure other than [common](#Common-properties-for-all-dashboards) properties
```js
// Unique identifier for dashboard
// it will be used for store dashboard state into localStorage, if storage functions are not passed
id  = string 

// It is function which should return jsx to render button
// Using this you can inject your own button component withing this component to match your application theme
// default = it will render simple html button in case of undefined / error	
EditButton = function // () => { return (jsx for button)}

// You can pass function which will be called when dashboard need to save state
// default = it will try to store state in localStorage	
saveLayoutState = function // ( id , state ) => { }

// You can pass function which will be used to retrieve state of layout
// default = it will try to fetch state from localStorage
retrieveLayoutState = function // ( id ) => { return state }

```
- You can see Code Samples for widget on following links:
- [DashboardWithEditKey] (https://github.com/prakash1998/react-dashboard/blob/master/src/index.js)

##DashboardWithWidgetMenu
- And now , In this Component you will get Widget menu along with dashboard.
- User can add or remove widgets to or from dashboard
- Removed widget will automatically added to Widget menu and shown when user clicks on add
- This component also provide custom save / retrieve function as [DashboardWithEditKey](#DashboardWithEditKey) component

```js

// It is function which should return jsx to render button
// Using this you can inject your own button component withing this component to match your application theme
// default = it will render simple html button in case of undefined or any error	
EditButton = function // () => { return (jsx for button)}

// It is function which should return jsx to render button
// Using this you can inject your own button component withing this component to match your application theme
// default = it will render simple html button in case of undefined or any error
AddButton: PropTypes.func

// It is function which should return jsx to render button
// Using this you can inject your own button component withing this component to match your application theme
// default = it will render simple html button in case of undefined or any error
SaveButton: PropTypes.func

// It is function which should return jsx to render button
// Using this you can inject your own container withing this component to show widgets e.g. drawer / modal
// default = it will render simple html div in case of undefined or any error
WidgetMenuContainer: PropTypes.func

// style for widget menu if not passed WidgetMenuContainer
widgetMenuStyle = object

// Which widgets should be rendered initially
initialWidgetIds: array of widget ids // Required
	
// You can pass function which will be called when dashboard need to save state
// default = it will try to store state in localStorage	
saveLayoutState = function // ( id , state ) => { }

// You can pass function which will be used to retrieve state of layout
// default = it will try to fetch state from localStorage
retrieveLayoutState = function // ( id ) => { return state }

```
- You can see Code Samples for widget on following links:
- [DashboardWithEditKey] (https://github.com/prakash1998/react-dashboard/blob/master/src/index.js)

## Dashboard 

It is the base component for all other complex components. So yup , you can create custom dashboard using this component.
It provides you basic container for widgets, you can play with it and create awesome custom dashboard as you like

-Dashboard has following properties to configure
```js
// layout for widget on dashboard
// this is state of the dashboard all the lifetime of the dashboard
// you can set it externally from anywhere
layoutsState = object // Required

// pair of layoutsState and setLayoutsState should be passed for 
// responsive functionality
// function to set layoutState
setLayoutsState = function // Required   // ( state ) => { }

// It specify , if dashboard is editable or not
// default = false
editable  = boolean

// If you pass this function, it'll get called on close event of widget
// it will provide you host widget as parameter
onRemoveWidget = function // ( widget ) => { }

```
- You can see Source code of DashboardWithEditKey and DashboardWithWidgetMenu for usage of Dashboard:
- [dashboard-with-editkey.js] (https://github.com/prakash1998/react-dashboard/blob/master/src/lib/dashboard-with-editkey.js)
- [dashboard-with-widget-menu.js] (https://github.com/prakash1998/react-dashboard/blob/master/src/lib/dashboard-with-widget-menu.js)


