import React, { Component } from 'react';
function ListItem(props) {
    return <li>{props.value}</li>;
  }
  
function NumberList(props) {
    const numbers = props.unreadMessages;
    return (
        <ul>
            {numbers.map((number)=>
                <ListItem key={number.toString()}  value={number}/>
            )}
        </ul>
    )
  }

class List  extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const unreadMessages = this.props.unreadMessages;
        const listItems = unreadMessages.map((val,index) =>
            <li key={index}>{val}</li>
        );
        return (
            <div>
                <ul>{listItems}</ul>,
                <NumberList unreadMessages={this.props.unreadMessages}/>
            </div>
        )
    }
}

export default List ;
