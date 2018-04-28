import React from 'react';
import ReactDOM from 'react-dom';
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
import WordAdder from './base/wordAdder'
import registerServiceWorker from './registerServiceWorker';

const messages = ['React', 'Re: React', 'Re:Re: React'];
const myname = '1234';
const element = (
    <div>
        <App />
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

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
