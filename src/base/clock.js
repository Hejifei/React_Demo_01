import React, { Component } from 'react';

class Clock  extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        // 设置定时器
        this.timerId = setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        // 清除定时器
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock ;
