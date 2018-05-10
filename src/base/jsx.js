import React from 'react';

function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
        {props.children}
      </div>
    );
}
  
function App() {
    return (
      <SplitPane
        left={
          <span>left</span>
        }
        right={
            <span>right</span>
        }>
        <span>children</span>
        </SplitPane>
    );
}
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
}
  
function Header(){
    return <header>header show</header>
}
function ListOfTenThings() {
    const showHeader = true;
    return (
        <div>
            <App />
            <h5>showHeader ={String(showHeader)}</h5>
            {showHeader && <Header />}
            <Repeat numTimes={3}>
                {(index) => <div key={index}>This is item {index} in the list</div>}
            </Repeat>
        </div>
    );
}
export default ListOfTenThings ;
