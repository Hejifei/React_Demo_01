import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.js'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

// class Todos  extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         )
//     }
// }

// export default Todos ;

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('redux')
)
