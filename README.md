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

## Used Libraries
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


## Available-Dashboard-Types
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

## How to create Widgets
-	It's as simple as fitting little legos on one giant lego(dashboard)
-	You can use any _ component as a widget by just specifying some properties.
- 	Let assume You Have Component named 'Clock',
	you just need to create an object which have following properties :
```js
	const ClockWidget =	{
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

// following properties are in terms of [custom unit metrix](#unit methodology) used by dashboard (not in pixels)

// as name says, prefered x position from left
// default = 0 
preferedX = number ([units](#unit methodology))

// prefered y position from top
// default = 0 
preferedY = number ([units](#unit methodology))

// minimum width of the widget
// default = MULTIPLIER (look at [unit methodology](#unit methodology) section for more info)
minWidth = number ([units](#unit methodology))

// maximum width of the widget
// default = INFINITE (look at [unit methodology](#unit methodology) section for more info)
maxWidth = number ([units](#unit methodology))

// minimum height of the widget
// default = MULTIPLIER (look at [unit methodology](#unit methodology) section for more info)
minHeight = number ([units](#unit methodology))

// maximum height of the widget
// default = INFINITE (look at [unit methodology](#unit methodology) section for more info)
maxHeight = number ([units](#unit methodology))

```


comming soon.....
work in progress ...........

## Dashboard 


```js

```