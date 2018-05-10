import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}} >
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div  key={this.props}>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}
class MyComponent extends React.Component {
  getChildContext() {
    return {color: this.props.color};
  }
  render() {
    // 这里必须是一个元素，否则会发出警告。
    const children = this.props.children;
    const childrennew = this.props.newmessages.map((message,index) =>
      <Message key={index} text={message} />
    );
    return (
      <div>
        <h1>Hello, 我叫{this.props.name},我{this.props.age}岁了。</h1>
        {children}
        <div>{childrennew}</div>
      </div>
    );
  }
}
// 设置prop值的要求
MyComponent.propTypes = {
  name: PropTypes.string,// 限制name的类型必须为string，
  children: PropTypes.element.isRequired // 要求单独的 Child
};
// 设置默认的prop值
MyComponent.defaultProps = {
  age: 25
};
MyComponent.childContextTypes = {
  color: PropTypes.string
};
export default MyComponent;