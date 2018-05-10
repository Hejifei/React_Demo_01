import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';//路由
import Loadable from 'react-loadable';//代码拆分
import './index.css';

import App from './App';
import Fieldset from './base/fieldset'
import Clock  from './base/clock';
import Toggle  from './base/Toggle';
import LoginControl  from './base/LoginControl';
import List  from './base/list';
import Form from './base/form';
import Temperature from './base/temperature';
import CpVSIh from './base/jsx';
import MyComponent from './base/proptype';
import RefAndDom from './base/refAndDom';
import WordAdder from './base/wordAdder';
import Calculator from './base/Calculator';
// import './base/Calculator';
// import Link from './base/link'
// import Index from './routers/index';
import registerServiceWorker from './registerServiceWorker';

// redux
import store from './redux/redux_demo01';
// import './redux/todos';

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// import './base/Portals'
const Loading = () => <div>Loading...</div>;


const messages = ['React', 'Re: React', 'Re:Re: React'];
const myname = '1234';
const element = (
    <div>
        <App />
        <Fieldset title="Redux实例——计数器"><Calculator/></Fieldset>
        <Fieldset title="性能优化"><WordAdder/></Fieldset>
        <Fieldset title="Ref And Dom"><RefAndDom/></Fieldset>
        <Fieldset title="使用propTypes进行props值类型检查">
            <MyComponent name={myname} newmessages={messages} color='red'>
                <h1>只有一个child</h1>
            </MyComponent>
        </Fieldset>
        <Fieldset title="组合VS继承、jsx">
            <CpVSIh />
        </Fieldset>
        
        <Fieldset title="组件"><Clock/></Fieldset>
        <Fieldset title="事件"><Toggle /></Fieldset>
        <Fieldset title="条件渲染"><LoginControl  unreadMessages={messages} /></Fieldset>
        <Fieldset title="列表"><List   unreadMessages={messages}/></Fieldset>
        <Fieldset title="表单"><Form /></Fieldset>
        <Fieldset title="温度计"><Temperature /></Fieldset>
        
        
    </div>
)


const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
)
  
const Home = Loadable({
    loader: () => import('./routers/index'),
    loading: Loading,
});
  
const About = () => (
    <div>
      <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state?name='hejifei'&age=15`}>
            Props v. State
          </Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
)
  
const Topic = ({ match }) => (
    <div>
        {JSON.stringify(match)}
      <h3>{match.params.topicId}</h3>
    </div>
)
  
ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<BasicExample/>, document.getElementById('main'));
registerServiceWorker();
