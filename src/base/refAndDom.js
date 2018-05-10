import React from 'react';

function SonInput(props) {
    return (
      <div>
        <input ref={props.inputRef} />
      </div>
    );
}
  
function Parent(props) {
    return (
      <div>
        My input: <SonInput inputRef={props.inputRef} />
      </div>
    );
}
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.focus = this.focus.bind(this);
    }
    componentDidMount(){
        // this.textInput.focus();
        this.inputElement.focus();
    }

    focus() {
      // 通过使用原生API，显式地聚焦text输入框
      this.textInput.focus();
    }
  
    render() {
      // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
      return (
        <div>
            <h3>在DOM元素上添加Ref，只有类组件可以添加Ref</h3>
            <input
                type="text"
                defaultValue="Bob"
                ref={(input) => { this.textInput = input; }} />
            <input
                type="button"
                value="Focus the text input"
                onClick={this.focus}
            />
            <h3>在父组件中触发子组件的事情</h3>
            <Parent
                inputRef={el => this.inputElement = el}
            />
        </div>
      );
    }
  }



  export default CustomTextInput ;