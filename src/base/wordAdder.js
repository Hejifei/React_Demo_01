import React, { Component } from 'react';

class ListOfWords extends React.PureComponent {
    render() {
      return <div>{this.props.words.join(',')}</div>;
    }
}
  
class WordAdder extends Component {
    constructor(props) {
      super(props);
      this.state = {
        words: ['marklar']
      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        // 1、push不行
        // this.setState(prevState => ({
        //     words: prevState.words.push('marklar')
        // }));
        // 2、concat可以
        // this.setState(prevState => ({
        //     words: prevState.words.concat(['marklar'])
        // }));
        this.setState(prevState => ({
            words: [...prevState.words,'marklar']
        }));
        // 4、不突变原来的对象
        // Object.assign({}, colormap, {right: 'blue'});
        // 或者
        // {...colormap, right: 'blue'};
    }
  
    render() {
      return (
        <div>
            {this.state.words}
            <button onClick={this.handleClick}>新增</button>
            <ListOfWords words={this.state.words} />
        </div>
      );
    }
}

export default WordAdder  ;