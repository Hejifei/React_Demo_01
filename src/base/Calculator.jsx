import React from 'react';
// import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import reducer from '../redux/reducers/calculator_index'
import Counter from '../redux/components/Counter'

// const Counter = ({ value ,onIncrement ,onDecrement }) => (
//     <div>   
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//     </div>
// );


const store = createStore(reducer);

class Calculator   extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: store.getState()};
    }
    componentDidMount(){
        var self = this;
        store.subscribe(()=>{
            // console.log(store.getState())
            self.setState(prevState => ({
                count: store.getState()
            }));
        })
    }
    render() {
        return (
            <Provider store={store}>
                <Counter
                    value={this.state.count}
                    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                />
            </Provider>
        )
    }
}
export default Calculator ;

// const rootEl = document.getElementById('redux_calculator')
// const render = () => ReactDOM.render(
//     <Provider store={store}>
//         <Counter
//             value={store.getState()}
//             onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//             onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//         />
//     </Provider>
//     ,
//     rootEl
// )

// render()
// store.subscribe(render)
// export default Calculator ;
