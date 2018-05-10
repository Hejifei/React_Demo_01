import React, { Component } from 'react';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
}
function UserGreeting(props){
    return (
        <h1>Welcome back!</h1>,
        <Mailbox unreadMessages={props.unreadMessages} />
    )
}

function GuestGreeting(props){
    return <h1>Please Sign up.</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        const unreadMessages = props.unreadMessages;
        return <UserGreeting unreadMessages={unreadMessages}/>
    }else{
        return <GuestGreeting/>
    }
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            login
        </button>
    )
}

function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
}
function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
}
  

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false}
    }
    
    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let btn = null;
        if (isLoggedIn) {
            btn = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            btn = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} unreadMessages={this.props.unreadMessages} />
                <WarningBanner warn={isLoggedIn} />
                {btn}
            </div>
        )
    }
}

export default LoginControl;
