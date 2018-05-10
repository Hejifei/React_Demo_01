import React, { Component } from 'react';

class Toggle   extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn:true,
            parentValue:1
        };

        // 这个绑定是必要的，使`this`在回调中起作用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(val,event){
        this.setState(prevState=>({
            isToggleOn : !prevState.isToggleOn
        }))
        console.log(val)
    }
    render() {
        return (
            <div>
                带参
                <button onClick={this.handleClick.bind(this,11)}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                不带参
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

export default Toggle  ;
