import React from 'react'

class Clock extends React.Component{
    constructor() {
        super()
        this.state = {
            time: Date.now(),
            one: true,
            two: false,
            three: false,
            four: false,
            background: {
                backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
            },
            class: ''
        }
        this.clicked = this.clicked.bind(this)
    }
    componentDidMount() {
        setInterval(()=>{
            if(this.state.one == true) {
                this.setState({
                    time: Date.now()
                })
            }
            else if(this.state.four == true){
                this.setState({
                    time: Date.now()
                })
            }
        },1000)
    }
    clicked() {
        this.setState({
            background: {
                backgroundColor: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16)})
            }
        })
        if(this.state.one === true) {
            this.setState({class: 'faded'})
            setTimeout(()=>{
                this.setState({
                    time: Date.now(),
                    one: false,
                    two: true,
                    class: ''
                })
            },200)
        }
        else if(this.state.two == true) {
            this.setState({class: 'faded'})
            setTimeout(()=>{
                this.setState({
                    time: Date.now(),
                    two: false,
                    three: true,
                    class: ''
                })
            },200)
        }
        else if(this.state.three == true) {
            this.setState({class: 'faded'})
            setTimeout(()=>{
                this.setState({
                    time: Date.now(),
                    three: false,
                    four: true,
                    class: ''
                })
            },200)
        }
        else if(this.state.four == true) {
            this.setState({class: 'faded'})
            setTimeout(()=>{
                this.setState({
                    time: Date.now(),
                    four: false,
                    one: true,
                    class: ''
                })
            },200)
        }
    }
    render() {
        return(
            <div id="clock" style={this.state.background} onClick={this.clicked}>
                <h1 className={this.state.class}>{this.state.time}</h1>
            </div>
        )
    }
}

class Instruction extends React.Component {
    render() {
        return(
            <p id="instruction">Click anywhere to change formats</p>
        )
    }
}

class ClockIn extends React.Component {
    render() {
        return(
            <div>
                <Instruction/>
                <Clock/>
            </div>
        )
    }
}


export const ClockWidget = {
    id: 'clock',
 Component:ClockIn , minWidth:3 , minHieght :2
}